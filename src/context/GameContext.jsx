import { createContext, useContext, useReducer, useEffect } from 'react';
import { chapters } from '../data/levels';
import { achievements } from '../data/achievements';

const GameContext = createContext();

const STORAGE_KEY = 'codequest_progress';

const initialState = {
  username: '',
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
      const { chapterId, levelId, xp, stars } = action.payload;
      const key = `${chapterId}/${levelId}`;
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
      const { chapterId, levelId, optionIndex } = action.payload;
      const key = `${chapterId}/${levelId}`;
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
    case 'CHEAT_UNLOCK': {
      const allLevels = chapters.flatMap(c => c.levels.map(l => `${c.id}/${l.id}`));
      const newCompleted = [...new Set([...state.completedLevels, ...allLevels])];
      return { ...state, cheatsUnlocked: true, completedLevels: newCompleted };
    }
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

    const chapterIdx = chapters.findIndex(c => c.id === chapterId);
    const chapter = chapters[chapterIdx];
    if (!chapter) return false;
    const levelIdx = chapter.levels.findIndex(l => l.id === levelId);
    if (levelIdx === 0 && chapterIdx === 0) return true;

    if (levelIdx > 0) {
      const prevLevel = chapter.levels[levelIdx - 1];
      return state.completedLevels.includes(`${chapterId}/${prevLevel.id}`);
    }

    const prevChapter = chapters[chapterIdx - 1];
    const lastLevel = prevChapter.levels[prevChapter.levels.length - 1];
    return state.completedLevels.includes(`${prevChapter.id}/${lastLevel.id}`);
  };

  const isLevelCompleted = (chapterId, levelId) => {
    return state.completedLevels.includes(`${chapterId}/${levelId}`);
  };

  const getLevelStars = (chapterId, levelId) => {
    return state.stars[`${chapterId}/${levelId}`] || 0;
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

  const value = {
    ...state,
    availableXp,
    dispatch,
    isLevelUnlocked,
    isLevelCompleted,
    getLevelStars,
    getPlayerRank,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame debe usarse dentro de GameProvider');
  return context;
}
