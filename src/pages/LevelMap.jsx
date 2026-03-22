import { useNavigate, useParams } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { getChaptersForLanguage, getLanguage } from '../data/languages';
import { Lock, Check, ChevronLeft, Zap, Award, Star } from 'lucide-react';

const colorMap = {
  'neon-green': { border: 'border-neon-green', text: 'text-neon-green', bg: 'bg-neon-green/10', glow: 'shadow-[0_0_15px_rgba(57,211,83,0.3)]' },
  'neon-blue': { border: 'border-neon-blue', text: 'text-neon-blue', bg: 'bg-neon-blue/10', glow: 'shadow-[0_0_15px_rgba(88,166,255,0.3)]' },
  'neon-purple': { border: 'border-neon-purple', text: 'text-neon-purple', bg: 'bg-neon-purple/10', glow: 'shadow-[0_0_15px_rgba(188,140,255,0.3)]' },
  'neon-yellow': { border: 'border-neon-yellow', text: 'text-neon-yellow', bg: 'bg-neon-yellow/10', glow: 'shadow-[0_0_15px_rgba(227,179,65,0.3)]' },
  'neon-orange': { border: 'border-neon-orange', text: 'text-neon-orange', bg: 'bg-neon-orange/10', glow: 'shadow-[0_0_15px_rgba(240,136,62,0.3)]' },
};

export default function LevelMap() {
  const navigate = useNavigate();
  const params = useParams();
  const { availableXp, isLevelUnlocked, isLevelCompleted, getLevelStars, getPlayerRank, username, selectedLanguage, dispatch } = useGame();

  const lang = params.lang || selectedLanguage || 'python';
  const chapters = getChaptersForLanguage(lang);
  const langInfo = getLanguage(lang);

  // Set language in context if from URL
  if (lang !== selectedLanguage) {
    dispatch({ type: 'SELECT_LANGUAGE', payload: lang });
  }

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/lenguajes')}
          className="flex items-center gap-1 text-terminal-muted hover:text-neon-green transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Lenguajes
        </button>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/logros')} className="flex items-center gap-1 text-neon-yellow hover:text-neon-orange transition-colors cursor-pointer">
            <Award className="w-4 h-4" />
          </button>
          <span className="text-neon-purple text-sm">{getPlayerRank()}</span>
          <div className="flex items-center gap-1 text-neon-yellow">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-bold">{availableXp} XP</span>
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center mb-2 text-terminal-text">
        {langInfo?.icon} {langInfo?.name || 'Mapa'}
      </h1>
      <p className="text-center text-terminal-muted text-sm mb-10">
        Agente <span className="text-neon-purple">{username}</span> — Completa cada nivel para desbloquear el siguiente
      </p>

      {/* Chapters */}
      <div className="space-y-10">
        {chapters.map((chapter, chapterIdx) => {
          const colors = colorMap[chapter.color] || colorMap['neon-green'];
          const chapterCompleted = chapter.levels.every(l => isLevelCompleted(chapter.id, l.id, lang));
          const firstLevelUnlocked = isLevelUnlocked(chapter.id, chapter.levels[0].id, lang);

          return (
            <div key={chapter.id} className="animate-slide-up" style={{ animationDelay: `${chapterIdx * 0.1}s` }}>
              {/* Chapter header */}
              <div className={`flex items-center gap-3 mb-4 ${firstLevelUnlocked ? colors.text : 'text-terminal-muted/50'}`}>
                <span className="text-2xl">{chapter.icon}</span>
                <div>
                  <h2 className="text-lg font-bold">
                    Cap. {chapterIdx + 1}: {chapter.title}
                    {chapterCompleted && <Check className="w-4 h-4 inline ml-2 text-neon-green" />}
                  </h2>
                  <p className="text-xs text-terminal-muted">{chapter.description}</p>
                </div>
              </div>

              {/* Levels */}
              <div className="grid gap-3 ml-4 md:ml-8">
                {chapter.levels.map((level, levelIdx) => {
                  const unlocked = isLevelUnlocked(chapter.id, level.id, lang);
                  const completed = isLevelCompleted(chapter.id, level.id, lang);

                  return (
                    <button
                      key={level.id}
                      onClick={() => unlocked && navigate(`/nivel/${lang}/${chapter.id}/${level.id}`)}
                      disabled={!unlocked}
                      className={`relative flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 text-left cursor-pointer
                        ${completed
                          ? `${colors.border} ${colors.bg} ${colors.glow}`
                          : unlocked
                            ? `border-terminal-border hover:${colors.border} bg-terminal-surface hover:${colors.bg}`
                            : 'border-terminal-border/30 bg-terminal-surface/30 opacity-50 cursor-not-allowed'
                        }`}
                    >
                      {/* Level number */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2
                        ${completed
                          ? `${colors.border} ${colors.text}`
                          : unlocked
                            ? 'border-terminal-border text-terminal-muted'
                            : 'border-terminal-border/30 text-terminal-muted/30'
                        }`}
                      >
                        {completed ? <Check className="w-5 h-5" /> : unlocked ? levelIdx + 1 : <Lock className="w-4 h-4" />}
                      </div>

                      {/* Level info */}
                      <div className="flex-1">
                        <div className={`font-bold text-sm ${completed ? colors.text : unlocked ? 'text-terminal-text' : 'text-terminal-muted/30'}`}>
                          {level.title}
                        </div>
                        <div className="text-xs text-terminal-muted mt-0.5">
                          {level.lesson.concept}
                        </div>
                      </div>

                      {/* Stars & XP */}
                      <div className="flex flex-col items-end gap-1">
                        {completed && (
                          <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(i => (
                              <Star key={i} className={`w-3 h-3 ${i <= getLevelStars(chapter.id, level.id, lang) ? 'text-neon-yellow fill-neon-yellow' : 'text-terminal-border'}`} />
                            ))}
                          </div>
                        )}
                        <div className={`flex items-center gap-1 text-xs ${completed ? 'text-neon-yellow' : 'text-terminal-muted/50'}`}>
                          <Zap className="w-3 h-3" />
                          {level.xpReward} XP
                        </div>
                      </div>

                      {/* Connector line */}
                      {levelIdx < chapter.levels.length - 1 && (
                        <div className={`absolute left-[2.25rem] -bottom-3 w-0.5 h-3 ${completed ? colors.border.replace('border', 'bg') : 'bg-terminal-border/30'}`} />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Connector between chapters */}
              {chapterIdx < chapters.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className={`w-0.5 h-6 ${chapterCompleted ? 'bg-neon-green/50' : 'bg-terminal-border/20'}`} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
