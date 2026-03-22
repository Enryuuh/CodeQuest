import { createContext, useContext, useReducer, useEffect } from 'react';
import { chapters } from '../data/levels';
import { achievements } from '../data/achievements';
import { languages, getChaptersForLanguage } from '../data/languages';

const GameContext = createContext();

const STORAGE_KEY = 'codequest_progress';

const initialState = {
  username: '',
  xp: 0,
  totalXpEarned: 0,
  completedLevels: [],    // "lang:chapterId/levelId"
  decisions: {},           // "lang:chapterId/levelId": optionIndex
  unlocks: [],
  currentStreak: 0,
  claimedAchievements: [],
  xpSpent: 0,
  stars: {},               // "lang:chapterId/levelId": 5
  cheatsUnlocked: false,
  selectedLanguage: null,  // 'python' | 'java' | 'csharp'
};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return initialState;
    const parsed = JSON.parse(saved);
    // Migrate old data: if completedLevels don't have lang prefix, add 'python:'
    if (parsed.completedLevels?.length > 0 && !parsed.completedLevels[0].includes(':')) {
      parsed.completedLevels = parsed.completedLevels.map(l => `python:${l}`);
      const newStars = {};
      for (const [k, v] of Object.entries(parsed.stars || {})) {
        newStars[k.includes(':') ? k : `python:${k}`] = v;
      }
      parsed.stars = newStars;
      const newDecisions = {};
      for (const [k, v] of Object.entries(parsed.decisions || {})) {
        newDecisions[k.includes(':') ? k : `python:${k}`] = v;
      }
      parsed.decisions = newDecisions;
    }
    return { ...initialState, ...parsed };
  } catch {
    return initialState;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'COMPLETE_LEVEL': {
      const { lang, chapterId, levelId, xp, stars } = action.payload;
      const key = `${lang}:${chapterId}/${levelId}`;
      const alreadyCompleted = state.completedLevels.includes(key);
      const prevStars = state.stars[key] || 0;
      const newStars = Math.max(prevStars, stars);
      return {
        ...state,
        xp: state.xp + (alreadyCompleted ? 0 : xp),
        totalXpEarned: state.totalXpEarned + (alreadyCompleted ? 0 : xp),
        completedLevels: alreadyCompleted ? state.completedLevels : [...state.completedLevels, key],
        currentStreak: state.currentStreak + (alreadyCompleted ? 0 : 1),
        stars: { ...state.stars, [key]: newStars },
      };
    }
    case 'ADD_XP':
      return {
        ...state,
        xp: state.xp + action.payload,
        totalXpEarned: state.totalXpEarned + action.payload,
      };
    case 'MAKE_DECISION': {
      const { lang, chapterId, levelId, optionIndex } = action.payload;
      const key = `${lang}:${chapterId}/${levelId}`;
      return {
        ...state,
        decisions: { ...state.decisions, [key]: optionIndex },
      };
    }
    case 'ADD_UNLOCK':
      if (state.unlocks.includes(action.payload)) return state;
      return { ...state, unlocks: [...state.unlocks, action.payload] };
    case 'CLAIM_ACHIEVEMENT': {
      const achievementId = action.payload;
      if (state.claimedAchievements.includes(achievementId)) return state;
      const achievement = achievements.find(a => a.id === achievementId);
      if (!achievement) return state;
      const available = state.xp - state.xpSpent;
      if (available < achievement.cost) return state;
      if (!achievement.requirement(state)) return state;
      return {
        ...state,
        claimedAchievements: [...state.claimedAchievements, achievementId],
        xpSpent: state.xpSpent + achievement.cost,
      };
    }
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SELECT_LANGUAGE':
      return { ...state, selectedLanguage: action.payload };
    case 'CHEAT_UNLOCK':
      return { ...state, cheatsUnlocked: true };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null, loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const isLevelUnlocked = (chapterId, levelId, lang = state.selectedLanguage) => {
    if (state.cheatsUnlocked) return true;
    const langChapters = getChaptersForLanguage(lang);
    if (!langChapters.length) return false;

    const chapterIdx = langChapters.findIndex(c => c.id === chapterId);
    const chapter = langChapters[chapterIdx];
    if (!chapter) return false;
    const levelIdx = chapter.levels.findIndex(l => l.id === levelId);
    if (levelIdx === 0 && chapterIdx === 0) return true;

    if (levelIdx > 0) {
      const prevLevel = chapter.levels[levelIdx - 1];
      return state.completedLevels.includes(`${lang}:${chapterId}/${prevLevel.id}`);
    }

    const prevChapter = langChapters[chapterIdx - 1];
    const lastLevel = prevChapter.levels[prevChapter.levels.length - 1];
    return state.completedLevels.includes(`${lang}:${prevChapter.id}/${lastLevel.id}`);
  };

  const isLevelCompleted = (chapterId, levelId, lang = state.selectedLanguage) => {
    return state.completedLevels.includes(`${lang}:${chapterId}/${levelId}`);
  };

  const getLevelStars = (chapterId, levelId, lang = state.selectedLanguage) => {
    return state.stars[`${lang}:${chapterId}/${levelId}`] || 0;
  };

  const getCompletedForLanguage = (lang) => {
    const prefix = `${lang}:`;
    return state.completedLevels.filter(l => l.startsWith(prefix)).length;
  };

  const availableXp = state.xp - state.xpSpent;

  const getPlayerRank = () => {
    const total = state.totalXpEarned;
    if (total >= 4000) return 'Arquitecto de la Simulación';
    if (total >= 3000) return 'Maestro del Código';
    if (total >= 2000) return 'Arquitecto del Sistema';
    if (total >= 1500) return 'Ingeniero Senior';
    if (total >= 1000) return 'Programador';
    if (total >= 600) return 'Técnico';
    if (total >= 300) return 'Aprendiz';
    if (total >= 100) return 'Cadete';
    return 'Recluta';
  };

  const value = {
    ...state,
    availableXp,
    dispatch,
    isLevelUnlocked,
    isLevelCompleted,
    getLevelStars,
    getPlayerRank,
    getCompletedForLanguage,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame debe usarse dentro de GameProvider');
  return context;
}
