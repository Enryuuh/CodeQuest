export const achievements = [
  // --- Progreso ---
  { id: 'first_line', title: 'Primera Línea', description: 'Completa tu primer nivel', icon: '💻', category: 'progreso', cost: 0, requirement: (s) => s.completedLevels.length >= 1 },
  { id: 'five_levels', title: 'En Racha', description: 'Completa 5 niveles', icon: '🔥', category: 'progreso', cost: 25, requirement: (s) => s.completedLevels.length >= 5 },
  { id: 'ten_levels', title: 'Imparable', description: 'Completa 10 niveles', icon: '⚡', category: 'progreso', cost: 50, requirement: (s) => s.completedLevels.length >= 10 },
  { id: 'twenty_levels', title: 'Veterano', description: 'Completa 20 niveles', icon: '🎯', category: 'progreso', cost: 75, requirement: (s) => s.completedLevels.length >= 20 },
  { id: 'thirty_levels', title: 'Experto', description: 'Completa 30 niveles', icon: '🌟', category: 'progreso', cost: 100, requirement: (s) => s.completedLevels.length >= 30 },
  { id: 'all_levels', title: 'Maestro del Código', description: 'Completa los 50 niveles', icon: '👑', category: 'progreso', cost: 150, requirement: (s) => s.completedLevels.length >= 50 },

  // --- Capítulos ---
  { id: 'ch_fundamentos', title: 'Bases Sólidas', description: 'Completa Fundamentos', icon: '🧱', category: 'capitulos', cost: 30, requirement: (s) => s.completedLevels.filter(l => l.startsWith('fundamentos/')).length >= 10 },
  { id: 'ch_condicionales', title: 'Decisor', description: 'Completa Condicionales', icon: '🔀', category: 'capitulos', cost: 50, requirement: (s) => s.completedLevels.filter(l => l.startsWith('condicionales/')).length >= 10 },
  { id: 'ch_bucles', title: 'Iterador', description: 'Completa Bucles', icon: '🔄', category: 'capitulos', cost: 60, requirement: (s) => s.completedLevels.filter(l => l.startsWith('bucles/')).length >= 10 },
  { id: 'ch_estructuras', title: 'Arquitecto de Datos', description: 'Completa Estructuras de Datos', icon: '📦', category: 'capitulos', cost: 75, requirement: (s) => s.completedLevels.filter(l => l.startsWith('estructuras/')).length >= 10 },
  { id: 'ch_funciones', title: 'Ingeniero de Funciones', description: 'Completa Funciones', icon: '⚙️', category: 'capitulos', cost: 90, requirement: (s) => s.completedLevels.filter(l => l.startsWith('funciones/')).length >= 10 },

  // --- XP milestones ---
  { id: 'xp_100', title: 'Centenario', description: 'Acumula 100 XP total', icon: '💎', category: 'xp', cost: 10, requirement: (s) => s.totalXpEarned >= 100 },
  { id: 'xp_500', title: 'Medio Millar', description: 'Acumula 500 XP total', icon: '💠', category: 'xp', cost: 40, requirement: (s) => s.totalXpEarned >= 500 },
  { id: 'xp_1000', title: 'Gran Maestro', description: 'Acumula 1000 XP total', icon: '🏆', category: 'xp', cost: 75, requirement: (s) => s.totalXpEarned >= 1000 },
  { id: 'xp_2000', title: 'Leyenda', description: 'Acumula 2000 XP total', icon: '🔮', category: 'xp', cost: 100, requirement: (s) => s.totalXpEarned >= 2000 },

  // --- Decisiones ---
  { id: 'first_decision', title: 'Libre Albedrío', description: 'Toma tu primera decisión', icon: '🎭', category: 'decisiones', cost: 15, requirement: (s) => Object.keys(s.decisions).length >= 1 },
  { id: 'five_decisions', title: 'Estratega', description: 'Toma 5 decisiones', icon: '🧠', category: 'decisiones', cost: 40, requirement: (s) => Object.keys(s.decisions).length >= 5 },
  { id: 'all_decisions', title: 'Destino Escrito', description: 'Toma todas las decisiones', icon: '📜', category: 'decisiones', cost: 75, requirement: (s) => Object.keys(s.decisions).length >= 10 },

  // --- Especiales ---
  { id: 'explorer', title: 'Explorador', description: 'Desbloquea un item especial', icon: '🗺️', category: 'especiales', cost: 20, requirement: (s) => s.unlocks.length >= 1 },
  { id: 'collector', title: 'Coleccionista', description: 'Reclama 10 logros', icon: '🎖️', category: 'especiales', cost: 60, requirement: (s) => s.claimedAchievements.length >= 10 },
  { id: 'completionist', title: 'Completista', description: 'Reclama 20 logros', icon: '🌈', category: 'especiales', cost: 100, requirement: (s) => s.claimedAchievements.length >= 20 },
];

export const categories = {
  progreso: { title: 'Progreso', color: 'neon-green' },
  capitulos: { title: 'Capítulos', color: 'neon-blue' },
  xp: { title: 'Experiencia', color: 'neon-yellow' },
  decisiones: { title: 'Decisiones', color: 'neon-purple' },
  especiales: { title: 'Especiales', color: 'neon-orange' },
};
