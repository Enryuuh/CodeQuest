// Hub de lenguajes — importa los niveles de cada lenguaje y los unifica
import { chapters as pythonChapters, getLevelById as getPythonLevelById, getNextLevel as getNextPythonLevel, getTotalLevels as getTotalPythonLevels } from './levels';
import { javaChapters, getJavaLevelById, getNextJavaLevel, getTotalJavaLevels } from './javaLevels';
import { csharpChapters, getCsharpLevelById, getNextCsharpLevel, getTotalCsharpLevels } from './csharpLevels';

export const languages = {
  python: {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: 'neon-green',
    description: 'El lenguaje más popular para empezar',
    chapters: pythonChapters,
    getLevelById: getPythonLevelById,
    getNextLevel: getNextPythonLevel,
    getTotalLevels: getTotalPythonLevels,
  },
  java: {
    id: 'java',
    name: 'Java',
    icon: '☕',
    color: 'neon-blue',
    description: 'El gigante de la industria',
    chapters: javaChapters,
    getLevelById: getJavaLevelById,
    getNextLevel: getNextJavaLevel,
    getTotalLevels: getTotalJavaLevels,
  },
  csharp: {
    id: 'csharp',
    name: 'C#',
    icon: '💎',
    color: 'neon-purple',
    description: 'El poder de Microsoft y Unity',
    chapters: csharpChapters,
    getLevelById: getCsharpLevelById,
    getNextLevel: getNextCsharpLevel,
    getTotalLevels: getTotalCsharpLevels,
  },
};

export const languageList = Object.values(languages);

export function getLanguage(langId) {
  return languages[langId] || null;
}

export function getChaptersForLanguage(langId) {
  return languages[langId]?.chapters || [];
}

export function getLevelByIdForLanguage(langId, chapterId, levelId) {
  return languages[langId]?.getLevelById(chapterId, levelId) || null;
}

export function getNextLevelForLanguage(langId, chapterId, levelId) {
  return languages[langId]?.getNextLevel(chapterId, levelId) || null;
}

export function getTotalLevelsForLanguage(langId) {
  return languages[langId]?.getTotalLevels() || 0;
}

export function getTotalLevelsAllLanguages() {
  return languageList.reduce((acc, lang) => acc + lang.getTotalLevels(), 0);
}
