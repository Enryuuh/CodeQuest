import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { languageList } from '../data/languages';
import { ChevronLeft, Zap, Check } from 'lucide-react';

const colorMap = {
  'neon-green': { border: 'border-neon-green', text: 'text-neon-green', bg: 'bg-neon-green/10', glow: 'shadow-[0_0_20px_rgba(57,211,83,0.3)]' },
  'neon-blue': { border: 'border-neon-blue', text: 'text-neon-blue', bg: 'bg-neon-blue/10', glow: 'shadow-[0_0_20px_rgba(88,166,255,0.3)]' },
  'neon-purple': { border: 'border-neon-purple', text: 'text-neon-purple', bg: 'bg-neon-purple/10', glow: 'shadow-[0_0_20px_rgba(188,140,255,0.3)]' },
};

export default function LanguageSelect() {
  const navigate = useNavigate();
  const { dispatch, getCompletedForLanguage, availableXp, getPlayerRank } = useGame();

  const handleSelect = (langId) => {
    dispatch({ type: 'SELECT_LANGUAGE', payload: langId });
    navigate(`/mapa/${langId}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="flex items-center justify-between w-full max-w-2xl mb-8">
        <button onClick={() => navigate('/')} className="flex items-center gap-1 text-terminal-muted hover:text-neon-green transition-colors cursor-pointer">
          <ChevronLeft className="w-4 h-4" /> Volver
        </button>
        <div className="flex items-center gap-4">
          <span className="text-neon-purple text-sm">{getPlayerRank()}</span>
          <div className="flex items-center gap-1 text-neon-yellow">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-bold">{availableXp} XP</span>
          </div>
        </div>
      </div>

      <div className="text-center mb-10 animate-slide-up">
        <h1 className="text-3xl font-bold text-terminal-text mb-2">Elige tu Lenguaje</h1>
        <p className="text-terminal-muted text-sm">Cada lenguaje tiene su propio camino de 50 niveles</p>
        <p className="text-terminal-muted text-xs mt-1">Tu XP es compartido entre todos los lenguajes</p>
      </div>

      <div className="grid gap-6 w-full max-w-2xl">
        {languageList.map((lang, idx) => {
          const colors = colorMap[lang.color] || colorMap['neon-green'];
          const completed = getCompletedForLanguage(lang.id);
          const total = lang.getTotalLevels();
          const progress = Math.round((completed / total) * 100);

          return (
            <button
              key={lang.id}
              onClick={() => handleSelect(lang.id)}
              className={`relative flex items-center gap-6 p-6 rounded-xl border-2 transition-all duration-300 text-left cursor-pointer
                ${colors.border} ${colors.bg} hover:${colors.glow} hover:scale-[1.02] animate-slide-up`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-5xl">{lang.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className={`text-xl font-bold ${colors.text}`}>{lang.name}</h2>
                  {completed === total && total > 0 && (
                    <span className="flex items-center gap-1 text-xs text-neon-green bg-neon-green/10 px-2 py-0.5 rounded-full">
                      <Check className="w-3 h-3" /> Completado
                    </span>
                  )}
                </div>
                <p className="text-sm text-terminal-muted mb-3">{lang.description}</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-terminal-border rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${colors.border.replace('border', 'bg')}`} style={{ width: `${progress}%` }} />
                  </div>
                  <span className="text-xs text-terminal-muted">{completed}/{total}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-terminal-muted/50 text-xs mt-8 text-center max-w-md">
        "En la simulación, todos los lenguajes son uno. Son diferentes dialectos del mismo código que construye la realidad." — E.V.A.
      </p>
    </div>
  );
}
