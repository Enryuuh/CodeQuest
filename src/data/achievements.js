export const achievements = [
  // --- Progreso general ---
  { id: 'first_line', title: 'Primera Línea', description: 'Completa tu primer nivel', icon: '💻', category: 'progreso', cost: 0, requirement: (s) => s.completedLevels.length >= 1 },
  { id: 'five_levels', title: 'En Racha', description: 'Completa 5 niveles', icon: '🔥', category: 'progreso', cost: 25, requirement: (s) => s.completedLevels.length >= 5 },
  { id: 'ten_levels', title: 'Imparable', description: 'Completa 10 niveles', icon: '⚡', category: 'progreso', cost: 50, requirement: (s) => s.completedLevels.length >= 10 },
  { id: 'twenty_levels', title: 'Veterano', description: 'Completa 20 niveles', icon: '🎯', category: 'progreso', cost: 75, requirement: (s) => s.completedLevels.length >= 20 },
  { id: 'fifty_levels', title: 'Experto', description: 'Completa 50 niveles', icon: '🌟', category: 'progreso', cost: 100, requirement: (s) => s.completedLevels.length >= 50 },
  { id: 'hundred_levels', title: 'Centurión', description: 'Completa 100 niveles', icon: '🏅', category: 'progreso', cost: 150, requirement: (s) => s.completedLevels.length >= 100 },
  { id: 'all_levels', title: 'Maestro de la Simulación', description: 'Completa los 150 niveles', icon: '👑', category: 'progreso', cost: 250, requirement: (s) => s.completedLevels.length >= 150 },

  // --- Lenguajes ---
  { id: 'python_master', title: 'Domador de Serpientes', description: 'Completa todos los niveles de Python', icon: '🐍', category: 'lenguajes', cost: 100, requirement: (s) => s.completedLevels.filter(l => l.startsWith('python:')).length >= 50 },
  { id: 'java_master', title: 'Barista del Código', description: 'Completa todos los niveles de Java', icon: '☕', category: 'lenguajes', cost: 100, requirement: (s) => s.completedLevels.filter(l => l.startsWith('java:')).length >= 50 },
  { id: 'csharp_master', title: 'Diamante Digital', description: 'Completa todos los niveles de C#', icon: '💎', category: 'lenguajes', cost: 100, requirement: (s) => s.completedLevels.filter(l => l.startsWith('csharp:')).length >= 50 },
  { id: 'polyglot', title: 'Políglota', description: 'Completa al menos 10 niveles en cada lenguaje', icon: '🌐', category: 'lenguajes', cost: 75, requirement: (s) => {
    const py = s.completedLevels.filter(l => l.startsWith('python:')).length;
    const java = s.completedLevels.filter(l => l.startsWith('java:')).length;
    const cs = s.completedLevels.filter(l => l.startsWith('csharp:')).length;
    return py >= 10 && java >= 10 && cs >= 10;
  }},

  // --- XP milestones ---
  { id: 'xp_100', title: 'Centenario', description: 'Acumula 100 XP total', icon: '💎', category: 'xp', cost: 10, requirement: (s) => s.totalXpEarned >= 100 },
  { id: 'xp_500', title: 'Medio Millar', description: 'Acumula 500 XP total', icon: '💠', category: 'xp', cost: 40, requirement: (s) => s.totalXpEarned >= 500 },
  { id: 'xp_1000', title: 'Gran Maestro', description: 'Acumula 1000 XP total', icon: '🏆', category: 'xp', cost: 75, requirement: (s) => s.totalXpEarned >= 1000 },
  { id: 'xp_2000', title: 'Leyenda', description: 'Acumula 2000 XP total', icon: '🔮', category: 'xp', cost: 100, requirement: (s) => s.totalXpEarned >= 2000 },
  { id: 'xp_4000', title: 'Arquitecto de Realidades', description: 'Acumula 4000 XP total', icon: '🌌', category: 'xp', cost: 150, requirement: (s) => s.totalXpEarned >= 4000 },

  // --- Decisiones ---
  { id: 'first_decision', title: 'Libre Albedrío', description: 'Toma tu primera decisión', icon: '🎭', category: 'decisiones', cost: 15, requirement: (s) => Object.keys(s.decisions).length >= 1 },
  { id: 'five_decisions', title: 'Estratega', description: 'Toma 5 decisiones', icon: '🧠', category: 'decisiones', cost: 40, requirement: (s) => Object.keys(s.decisions).length >= 5 },
  { id: 'all_decisions', title: 'Destino Escrito', description: 'Toma todas las decisiones', icon: '📜', category: 'decisiones', cost: 75, requirement: (s) => Object.keys(s.decisions).length >= 15 },

  // --- Especiales ---
  { id: 'explorer', title: 'Explorador', description: 'Desbloquea un item especial', icon: '🗺️', category: 'especiales', cost: 20, requirement: (s) => s.unlocks.length >= 1 },
  { id: 'collector', title: 'Coleccionista', description: 'Reclama 10 logros', icon: '🎖️', category: 'especiales', cost: 60, requirement: (s) => s.claimedAchievements.length >= 10 },
  { id: 'completionist', title: 'Completista', description: 'Reclama 20 logros', icon: '🌈', category: 'especiales', cost: 100, requirement: (s) => s.claimedAchievements.length >= 20 },
  { id: 'matrix_aware', title: 'Despierto', description: 'Descubre que todo es una simulación', icon: '🔴', category: 'especiales', cost: 50, requirement: (s) => s.completedLevels.length >= 30 },
];

export const categories = {
  progreso: { title: 'Progreso', color: 'neon-green' },
  lenguajes: { title: 'Lenguajes', color: 'neon-blue' },
  xp: { title: 'Experiencia', color: 'neon-yellow' },
  decisiones: { title: 'Decisiones', color: 'neon-purple' },
  especiales: { title: 'Especiales', color: 'neon-orange' },
};
