import { createContext, useContext, useReducer, useEffect, useMemo } from 'react';
import { chapters as chaptersPython } from '../data/levels';
import { chapters as chaptersJava } from '../data/levels_java';
import { chapters as chaptersCSharp } from '../data/levels_csharp';
import { achievements } from '../data/achievements';

const GameContext = createContext();

const STORAGE_KEY = 'codequest_progress';

const initialState = {
  username: '',
  language: 'python', // python, java, csharp
  xp: 0,
  totalXpEarned: 0,
  completedLevels: [],
  decisions: {},
  unlocks: [],
  currentStreak: 0,
  claimedAchievements: [],
  xpSpent: 0,
  stars: {},          // { "chapterId/levelId": 5 }
  cheatsUnlocked: false,
};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...initialState, ...JSON.parse(saved) } : initialState;
  } catch {
    return initialState;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'COMPLETE_LEVEL': {
      const { chapterId, levelId, xp, stars, language } = action.payload;
      const key = `${language}/${chapterId}/${levelId}`;
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
      const { chapterId, levelId, optionIndex, language } = action.payload;
      const key = `${language}/${chapterId}/${levelId}`;
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
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
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

  const isLevelUnlocked = (chapterId, levelId) => {
    // Cheat: todos desbloqueados
    if (state.cheatsUnlocked) return true;

    const currentLanguageChapters = state.language === 'java' ? chaptersJava : state.language === 'csharp' ? chaptersCSharp : chaptersPython;
    const lang = state.language;

    const chapterIdx = currentLanguageChapters.findIndex(c => c.id === chapterId);
    const chapter = currentLanguageChapters[chapterIdx];
    if (!chapter) return false;
    const levelIdx = chapter.levels.findIndex(l => l.id === levelId);
    if (levelIdx === 0 && chapterIdx === 0) return true;

    if (levelIdx > 0) {
      const prevLevel = chapter.levels[levelIdx - 1];
      return state.completedLevels.includes(`${lang}/${chapterId}/${prevLevel.id}`);
    }

    const prevChapter = currentLanguageChapters[chapterIdx - 1];
    const lastLevel = prevChapter.levels[prevChapter.levels.length - 1];
    return state.completedLevels.includes(`${lang}/${prevChapter.id}/${lastLevel.id}`);
  };

  const isLevelCompleted = (chapterId, levelId) => {
    return state.completedLevels.includes(`${state.language}/${chapterId}/${levelId}`);
  };

  const getLevelStars = (chapterId, levelId) => {
    return state.stars[`${state.language}/${chapterId}/${levelId}`] || 0;
  };

  const availableXp = state.xp - state.xpSpent;

  const getPlayerRank = () => {
    const total = state.totalXpEarned;
    if (total >= 1500) return 'Arquitecto del Sistema';
    if (total >= 1000) return 'Ingeniero Senior';
    if (total >= 600) return 'Programador';
    if (total >= 300) return 'Técnico';
    if (total >= 100) return 'Aprendiz';
    return 'Recluta';
  };

  const chapters = useMemo(() => {
    if (state.language === 'java') return chaptersJava;
    if (state.language === 'csharp') return chaptersCSharp;
    return chaptersPython;
  }, [state.language]);

  const getLevelById = (chapterId, levelId) => {
    const chapter = chapters.find(c => c.id === chapterId);
    if (!chapter) return null;
    const level = chapter.levels.find(l => l.id === levelId);
    return level ? { ...level, chapter } : null;
  };

  const getNextLevel = (chapterId, levelId) => {
    const chapterIdx = chapters.findIndex(c => c.id === chapterId);
    const chapter = chapters[chapterIdx];
    if (!chapter) return null;

    const levelIdx = chapter.levels.findIndex(l => l.id === levelId);

    if (levelIdx < chapter.levels.length - 1) {
      return { chapterId: chapter.id, levelId: chapter.levels[levelIdx + 1].id };
    }

    if (chapterIdx < chapters.length - 1) {
      const nextChapter = chapters[chapterIdx + 1];
      return { chapterId: nextChapter.id, levelId: nextChapter.levels[0].id };
    }

    return null;
  };

  const getTotalLevels = () => {
    return chapters.reduce((acc, ch) => acc + ch.levels.length, 0);
  };

  const value = {
    ...state,
    availableXp,
    dispatch,
    isLevelUnlocked,
    isLevelCompleted,
    getLevelStars,
    getPlayerRank,
    chapters,
    getLevelById,
    getNextLevel,
    getTotalLevels,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame debe usarse dentro de GameProvider');
  return context;
}
