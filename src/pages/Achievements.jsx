import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { achievements, categories } from '../data/achievements';
import { ChevronLeft, Zap, Lock, Check, Award } from 'lucide-react';

const colorClasses = {
  'neon-green': { text: 'text-neon-green', border: 'border-neon-green', bg: 'bg-neon-green/10', glow: 'shadow-[0_0_20px_rgba(57,211,83,0.3)]' },
  'neon-blue': { text: 'text-neon-blue', border: 'border-neon-blue', bg: 'bg-neon-blue/10', glow: 'shadow-[0_0_20px_rgba(88,166,255,0.3)]' },
  'neon-yellow': { text: 'text-neon-yellow', border: 'border-neon-yellow', bg: 'bg-neon-yellow/10', glow: 'shadow-[0_0_20px_rgba(227,179,65,0.3)]' },
  'neon-purple': { text: 'text-neon-purple', border: 'border-neon-purple', bg: 'bg-neon-purple/10', glow: 'shadow-[0_0_20px_rgba(188,140,255,0.3)]' },
  'neon-orange': { text: 'text-neon-orange', border: 'border-neon-orange', bg: 'bg-neon-orange/10', glow: 'shadow-[0_0_20px_rgba(240,136,62,0.3)]' },
};

export default function Achievements() {
  const navigate = useNavigate();
  const game = useGame();
  const { availableXp, claimedAchievements, dispatch, getPlayerRank, totalXpEarned } = game;
  const [claimingId, setClaimingId] = useState(null);
  const [justClaimed, setJustClaimed] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleClaim = (achievement) => {
    setClaimingId(achievement.id);
    setTimeout(() => {
      dispatch({ type: 'CLAIM_ACHIEVEMENT', payload: achievement.id });
      setClaimingId(null);
      setJustClaimed(achievement.id);
      setTimeout(() => setJustClaimed(null), 2000);
    }, 600);
  };

  const grouped = {};
  for (const cat of Object.keys(categories)) {
    grouped[cat] = achievements.filter(a => a.category === cat);
  }

  const filteredCategories = filter === 'all'
    ? Object.keys(categories)
    : [filter];

  const totalClaimed = claimedAchievements.length;
  const totalAchievements = achievements.length;
  const progress = Math.round((totalClaimed / totalAchievements) * 100);

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => navigate('/')} className="flex items-center gap-1 text-terminal-muted hover:text-neon-green transition-colors cursor-pointer">
          <ChevronLeft className="w-4 h-4" /> Volver
        </button>
        <div className="flex items-center gap-4">
          <span className="text-neon-purple text-sm">{getPlayerRank()}</span>
          <div className="flex items-center gap-1 text-neon-yellow">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-bold">{availableXp} XP</span>
            <span className="text-terminal-muted text-xs">disponible</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Award className="w-6 h-6 text-neon-yellow" />
          <h1 className="text-2xl font-bold text-terminal-text">Logros</h1>
        </div>
        <p className="text-terminal-muted text-sm mb-4">Reclama logros gastando XP. Completa desafíos para desbloquearlos.</p>

        {/* Progress bar */}
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-xs text-terminal-muted mb-1">
            <span>{totalClaimed}/{totalAchievements} reclamados</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 bg-terminal-border rounded-full overflow-hidden">
            <div className="h-full bg-neon-yellow rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Stats row */}
        <div className="flex justify-center gap-6 mt-4 text-xs">
          <div className="text-center">
            <div className="text-neon-green font-bold text-lg">{totalXpEarned}</div>
            <div className="text-terminal-muted">XP total ganado</div>
          </div>
          <div className="text-center">
            <div className="text-neon-yellow font-bold text-lg">{availableXp}</div>
            <div className="text-terminal-muted">XP disponible</div>
          </div>
          <div className="text-center">
            <div className="text-neon-purple font-bold text-lg">{totalXpEarned - availableXp}</div>
            <div className="text-terminal-muted">XP gastado</div>
          </div>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-full text-xs border transition-colors cursor-pointer ${
            filter === 'all'
              ? 'border-neon-green text-neon-green bg-neon-green/10'
              : 'border-terminal-border text-terminal-muted hover:border-terminal-muted'
          }`}
        >
          Todos
        </button>
        {Object.entries(categories).map(([key, cat]) => {
          const c = colorClasses[cat.color];
          return (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-3 py-1 rounded-full text-xs border transition-colors cursor-pointer ${
                filter === key
                  ? `${c.border} ${c.text} ${c.bg}`
                  : 'border-terminal-border text-terminal-muted hover:border-terminal-muted'
              }`}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Achievement cards */}
      <div className="space-y-8">
        {filteredCategories.map(catKey => {
          const cat = categories[catKey];
          const catAchievements = grouped[catKey];
          const c = colorClasses[cat.color];

          return (
            <div key={catKey}>
              <h2 className={`text-sm font-bold ${c.text} mb-3 flex items-center gap-2`}>
                <div className={`w-2 h-2 rounded-full ${c.bg} ${c.border} border`} />
                {cat.title}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {catAchievements.map(achievement => {
                  const isClaimed = claimedAchievements.includes(achievement.id);
                  const meetsRequirement = achievement.requirement(game);
                  const canAfford = availableXp >= achievement.cost;
                  const canClaim = meetsRequirement && canAfford && !isClaimed;
                  const isClaiming = claimingId === achievement.id;
                  const wasJustClaimed = justClaimed === achievement.id;

                  return (
                    <div
                      key={achievement.id}
                      className={`relative p-4 rounded-lg border transition-all duration-500 ${
                        wasJustClaimed
                          ? `${c.border} ${c.bg} ${c.glow} scale-[1.02]`
                          : isClaimed
                            ? `${c.border} ${c.bg} border-opacity-50`
                            : meetsRequirement
                              ? 'border-terminal-border bg-terminal-surface hover:border-terminal-muted'
                              : 'border-terminal-border/30 bg-terminal-surface/50'
                      }`}
                    >
                      {isClaiming && (
                        <div className="absolute inset-0 rounded-lg overflow-hidden">
                          <div className={`absolute inset-0 ${c.bg} animate-pulse`} />
                        </div>
                      )}

                      <div className="relative flex items-start gap-3">
                        {/* Icon */}
                        <div className={`text-2xl ${!meetsRequirement && !isClaimed ? 'grayscale opacity-30' : ''} transition-all`}>
                          {isClaimed ? achievement.icon : meetsRequirement ? achievement.icon : '🔒'}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className={`font-bold text-sm ${
                              isClaimed ? c.text : meetsRequirement ? 'text-terminal-text' : 'text-terminal-muted/50'
                            }`}>
                              {achievement.title}
                            </h3>
                            {isClaimed && <Check className={`w-4 h-4 ${c.text}`} />}
                          </div>
                          <p className={`text-xs mt-0.5 ${meetsRequirement || isClaimed ? 'text-terminal-muted' : 'text-terminal-muted/30'}`}>
                            {achievement.description}
                          </p>
                        </div>

                        {/* Claim button / cost */}
                        <div className="flex-shrink-0">
                          {isClaimed ? (
                            <div className={`text-xs ${c.text} font-bold px-2 py-1 rounded ${c.bg}`}>
                              Obtenido
                            </div>
                          ) : canClaim ? (
                            <button
                              onClick={() => handleClaim(achievement)}
                              disabled={isClaiming}
                              className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-bold border transition-all cursor-pointer hover:scale-105 ${
                                achievement.cost === 0
                                  ? `${c.border} ${c.text} ${c.bg} hover:${c.glow}`
                                  : `border-neon-yellow text-neon-yellow bg-neon-yellow/10 hover:bg-neon-yellow/20`
                              }`}
                            >
                              {achievement.cost === 0 ? (
                                'Gratis!'
                              ) : (
                                <>
                                  <Zap className="w-3 h-3" />
                                  {achievement.cost}
                                </>
                              )}
                            </button>
                          ) : (
                            <div className="flex items-center gap-1 text-xs text-terminal-muted/40">
                              {!meetsRequirement ? (
                                <Lock className="w-3 h-3" />
                              ) : (
                                <>
                                  <Zap className="w-3 h-3" />
                                  <span>{achievement.cost}</span>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
