import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { chapters, getTotalLevels } from '../data/levels';
import { Terminal, Zap, Trophy, RotateCcw, Award, User, BookOpen } from 'lucide-react';
import AriaAvatar from '../components/AriaAvatar';
import { playTypewriterKey } from '../utils/sounds';

export default function Home() {
  const navigate = useNavigate();
  const { xp, completedLevels, getPlayerRank, dispatch, availableXp, claimedAchievements, username, cheatsUnlocked } = useGame();
  const totalLevels = getTotalLevels();
  const progress = Math.round((completedLevels.length / totalLevels) * 100);

  // Si no tiene username, mostrar pantalla de registro
  if (!username) {
    return <UsernameScreen dispatch={dispatch} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Logo y título */}
      <div className="text-center mb-12 animate-slide-up">
        <div className="inline-flex items-center gap-3 mb-4">
          <Terminal className="w-10 h-10 text-neon-green" />
          <h1 className="text-4xl md:text-6xl font-bold text-neon-green animate-glow">
            CodeQuest
          </h1>
        </div>
        <p className="text-terminal-muted text-lg">
          Aprende a programar salvando el sistema
        </p>
        <p className="mt-2 text-neon-blue text-sm">
          Bienvenido, <span className="font-bold text-neon-purple">{username}</span>
        </p>
      </div>

      {/* Stats del jugador */}
      <div className="grid grid-cols-3 gap-4 mb-10 w-full max-w-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="bg-terminal-surface border border-terminal-border rounded-lg p-4 text-center">
          <Zap className="w-5 h-5 text-neon-yellow mx-auto mb-1" />
          <div className="text-2xl font-bold text-neon-yellow">{availableXp}</div>
          <div className="text-xs text-terminal-muted">XP disp.</div>
        </div>
        <div className="bg-terminal-surface border border-terminal-border rounded-lg p-4 text-center">
          <Trophy className="w-5 h-5 text-neon-purple mx-auto mb-1" />
          <div className="text-sm font-bold text-neon-purple">{getPlayerRank()}</div>
          <div className="text-xs text-terminal-muted">Rango</div>
        </div>
        <div className="bg-terminal-surface border border-terminal-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-neon-blue">{completedLevels.length}/{totalLevels}</div>
          <div className="text-xs text-terminal-muted">Niveles</div>
        </div>
      </div>

      {/* Barra de progreso */}
      {completedLevels.length > 0 && (
        <div className="w-full max-w-md mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <div className="flex justify-between text-xs text-terminal-muted mb-1">
            <span>Progreso general</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 bg-terminal-border rounded-full overflow-hidden">
            <div
              className="h-full bg-neon-green rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Botón principal */}
      <button
        onClick={() => navigate('/mapa')}
        className="group relative px-8 py-4 bg-neon-green/10 border-2 border-neon-green text-neon-green rounded-lg text-lg font-bold hover:bg-neon-green/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,211,83,0.3)] animate-slide-up cursor-pointer"
        style={{ animationDelay: '0.2s' }}
      >
        <span className="relative z-10">
          {completedLevels.length === 0 ? '[ INICIAR MISIÓN ]' : '[ CONTINUAR MISIÓN ]'}
        </span>
      </button>

      {/* Logros */}
      <button
        onClick={() => navigate('/logros')}
        className="mt-4 flex items-center gap-2 px-6 py-3 bg-neon-yellow/10 border border-neon-yellow/50 text-neon-yellow rounded-lg font-bold hover:bg-neon-yellow/20 hover:border-neon-yellow transition-all animate-slide-up cursor-pointer"
        style={{ animationDelay: '0.25s' }}
      >
        <Award className="w-5 h-5" />
        Logros ({claimedAchievements.length}/22)
      </button>

      {/* Memoria */}
      {completedLevels.length > 0 && (
        <button
          onClick={() => navigate('/memoria')}
          className="mt-3 flex items-center gap-2 px-6 py-3 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue rounded-lg font-bold hover:bg-neon-blue/20 hover:border-neon-blue transition-all animate-slide-up cursor-pointer"
          style={{ animationDelay: '0.3s' }}
        >
          <BookOpen className="w-5 h-5" />
          Memoria ({completedLevels.length} lecciones)
        </button>
      )}

      {/* Reset */}
      {completedLevels.length > 0 && (
        <button
          onClick={() => {
            if (confirm('¿Reiniciar todo el progreso? Se borrará tu nombre y avance.')) {
              dispatch({ type: 'RESET' });
            }
          }}
          className="mt-4 flex items-center gap-2 text-terminal-muted hover:text-neon-red text-sm transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          Reiniciar progreso
        </button>
      )}

      {/* Terminal interactivo con cheat code */}
      <CheatTerminal username={username} chapters={chapters} totalLevels={totalLevels} getPlayerRank={getPlayerRank} dispatch={dispatch} cheatsUnlocked={cheatsUnlocked} />
    </div>
  );
}

function CheatTerminal({ username, chapters, totalLevels, getPlayerRank, dispatch, cheatsUnlocked }) {
  const [input, setInput] = useState('');
  const [lines, setLines] = useState([]);
  const [cheatPhase, setCheatPhase] = useState(cheatsUnlocked ? 'done' : 'idle'); // idle | secret | done
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = input.trim().toUpperCase();
    setInput('');

    if (cheatPhase === 'idle' && cmd === 'CHEAT') {
      setLines(prev => [
        ...prev,
        { type: 'cmd', text: cmd },
        { type: 'eva', text: 'Vaya, vaya... has encontrado una parte oculta del sistema.' },
        { type: 'eva', text: 'Soy EVA, y tengo un secreto para ti. Si conoces el código, escríbelo ahora...' },
      ]);
      setCheatPhase('secret');
    } else if (cheatPhase === 'secret' && cmd === 'LCKING') {
      dispatch({ type: 'CHEAT_UNLOCK' });
      setLines(prev => [
        ...prev,
        { type: 'cmd', text: '******' },
        { type: 'success', text: '¡CÓDIGO ACEPTADO! Todos los niveles han sido desbloqueados.' },
        { type: 'eva', text: 'Úsalo con sabiduría, agente. Los niveles están abiertos, pero no completados.' },
      ]);
      setCheatPhase('done');
    } else if (cheatPhase === 'secret') {
      setLines(prev => [
        ...prev,
        { type: 'cmd', text: cmd },
        { type: 'error', text: 'Código incorrecto. Intenta de nuevo...' },
      ]);
    } else {
      setLines(prev => [
        ...prev,
        { type: 'cmd', text: cmd },
        { type: 'system', text: `Comando no reconocido: ${cmd}` },
      ]);
    }
  };

  return (
    <div
      className="mt-16 w-full max-w-lg bg-terminal-surface border border-terminal-border rounded-lg p-4 text-xs text-terminal-muted animate-slide-up cursor-text"
      style={{ animationDelay: '0.3s' }}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex gap-1.5 mb-3">
        <div className="w-3 h-3 rounded-full bg-neon-red/70" />
        <div className="w-3 h-3 rounded-full bg-neon-yellow/70" />
        <div className="w-3 h-3 rounded-full bg-neon-green/70" />
      </div>
      <div className="space-y-1">
        <p><span className="text-neon-green">{username}@core</span>:<span className="text-neon-blue">~</span>$ status</p>
        <p>{'>'} Sistema operativo: <span className="text-neon-green">ACTIVO</span></p>
        <p>{'>'} Módulos cargados: <span className="text-neon-yellow">{chapters.length} capítulos</span>, <span className="text-neon-blue">{totalLevels} niveles</span></p>
        <p>{'>'} Agente: <span className="text-neon-purple">{username}</span> — <span className="text-neon-blue">{getPlayerRank()}</span></p>
        {cheatsUnlocked && <p>{'>'} Modo: <span className="text-neon-red">DESBLOQUEADO</span></p>}
        <p>{'>'} Estado: <span className="text-neon-green">Esperando comandos...</span></p>

        {/* Dynamic lines */}
        {lines.map((line, i) => (
          <p key={i} className={
            line.type === 'cmd' ? 'text-neon-green' :
            line.type === 'eva' ? 'text-neon-blue' :
            line.type === 'success' ? 'text-neon-green font-bold' :
            line.type === 'error' ? 'text-neon-red' :
            'text-terminal-muted'
          }>
            {line.type === 'cmd' ? `${username}@core:~$ ${line.text}` :
             line.type === 'eva' ? `EVA > ${line.text}` :
             `> ${line.text}`}
          </p>
        ))}

        {/* Input line */}
        {cheatPhase !== 'done' && (
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-neon-green">{username}@core</span>:<span className="text-neon-blue">~</span>$&nbsp;
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-neon-green text-xs focus:outline-none"
              spellCheck={false}
              autoComplete="off"
            />
            <span className="animate-blink">▊</span>
          </form>
        )}
        {cheatPhase === 'done' && (
          <p><span className="text-neon-green">{username}@core</span>:<span className="text-neon-blue">~</span>$ <span className="animate-blink">▊</span></p>
        )}
      </div>
    </div>
  );
}

function UsernameScreen({ dispatch }) {
  const [name, setName] = useState('');
  const [phase, setPhase] = useState('intro'); // 'intro' | 'input'
  const [evaText, setEvaText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const introMessage = 'Bienvenido al sistema CORE. Soy EVA, la inteligencia artificial que te guiará en tu camino como programador. Antes de empezar... necesito saber cómo llamarte.';

  // Typewriter para EVA
  useState(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < introMessage.length) {
        setEvaText(introMessage.slice(0, i + 1));
        if (i % 2 === 0 && introMessage[i] !== ' ') {
          playTypewriterKey(0.07 + Math.random() * 0.05);
        }
        i++;
      } else {
        setIsTyping(false);
        setTimeout(() => setPhase('input'), 500);
        clearInterval(timer);
      }
    }, 25);
    return () => clearInterval(timer);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length < 2) return;
    dispatch({ type: 'SET_USERNAME', payload: trimmed });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="text-center mb-10 animate-slide-up">
        <div className="inline-flex items-center gap-3 mb-2">
          <Terminal className="w-8 h-8 text-neon-green" />
          <h1 className="text-3xl md:text-5xl font-bold text-neon-green animate-glow">
            CodeQuest
          </h1>
        </div>
        <p className="text-terminal-muted text-sm">Aprende a programar salvando el sistema</p>
      </div>

      {/* EVA avatar */}
      <div className="mb-6 flex flex-col items-center animate-fade-in">
        <AriaAvatar isSpeaking={isTyping} size={112} />
        <span className="text-neon-blue text-xs mt-2 font-bold tracking-widest">E.V.A.</span>
      </div>

      {/* Terminal de diálogo */}
      <div className="w-full max-w-lg bg-terminal-surface border border-terminal-border rounded-lg p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex gap-1.5 mb-4">
          <div className="w-3 h-3 rounded-full bg-neon-red/70" />
          <div className="w-3 h-3 rounded-full bg-neon-yellow/70" />
          <div className="w-3 h-3 rounded-full bg-neon-green/70" />
        </div>

        {/* EVA message */}
        <div className="mb-6 min-h-[80px]">
          <p className="text-sm text-neon-blue">
            <span className="font-bold">EVA {'>'} </span>
            {evaText}
            {isTyping && <span className="animate-blink ml-0.5">▊</span>}
          </p>
        </div>

        {/* Input de nombre */}
        {phase === 'input' && (
          <form onSubmit={handleSubmit} className="animate-fade-in">
            <label className="block text-xs text-terminal-muted mb-2">
              <span className="text-neon-green">$</span> Ingresa tu nombre de usuario:
            </label>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-terminal-muted" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre..."
                  maxLength={20}
                  autoFocus
                  className="w-full bg-terminal-bg border border-terminal-border rounded-lg py-3 pl-10 pr-4 text-neon-green text-sm focus:outline-none focus:border-neon-green/50 placeholder:text-terminal-muted/30"
                />
              </div>
              <button
                type="submit"
                disabled={name.trim().length < 2}
                className="px-6 py-3 bg-neon-green/10 border border-neon-green text-neon-green rounded-lg font-bold text-sm hover:bg-neon-green/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                Entrar
              </button>
            </div>
            <p className="text-xs text-terminal-muted/50 mt-2">Mínimo 2 caracteres. Tu progreso se guardará con este nombre.</p>
          </form>
        )}
      </div>
    </div>
  );
}
