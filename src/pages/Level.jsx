import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { getLevelById, getNextLevel } from '../data/levels';
import { runPython } from '../utils/pythonRunner';
import { ChevronLeft, Play, RotateCcw, Lightbulb, BookOpen, Zap, ArrowRight, Check, X, MessageSquare, Star } from 'lucide-react';
import AriaAvatar from '../components/AriaAvatar';
import { playTypewriterKey, playUserKey, playSuccess, playError } from '../utils/sounds';

const PHASES = ['story', 'lesson', 'challenge', 'decision', 'complete'];

export default function Level() {
  const { chapterId, levelId } = useParams();
  const navigate = useNavigate();
  const { isLevelCompleted, isLevelUnlocked, dispatch, decisions } = useGame();

  const levelData = useMemo(() => getLevelById(chapterId, levelId), [chapterId, levelId]);
  const [phase, setPhase] = useState('story');
  const [storyIndex, setStoryIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [challengeResult, setChallengeResult] = useState(null);
  const [selectedDecision, setSelectedDecision] = useState(null);
  const [bonusXp, setBonusXp] = useState(0);
  const [errors, setErrors] = useState(0);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (!levelData || !isLevelUnlocked(chapterId, levelId)) {
      navigate('/mapa');
    }
  }, [levelData, chapterId, levelId]);

  // Typewriter effect
  useEffect(() => {
    if (phase !== 'story' || !levelData) return;

    const message = levelData.story[storyIndex];
    if (!message) return;

    setIsTyping(true);
    setDisplayedText('');
    let i = 0;
    const text = message.text;
    const speed = message.speaker === 'system' ? 15 : 30;

    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        // Sonido de typewriter suave (no en cada carácter para no saturar)
        if (i % 2 === 0 && text[i] !== ' ') {
          playTypewriterKey(0.08 + Math.random() * 0.06);
        }
        i++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [phase, storyIndex, levelData]);

  // Initialize code when entering challenge
  useEffect(() => {
    if (phase === 'challenge' && levelData) {
      setCode(levelData.challenge.initialCode);
      setOutput(null);
      setChallengeResult(null);
      setShowHint(false);
    }
  }, [phase]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [code]);

  if (!levelData) return null;

  const handleStoryNext = () => {
    if (isTyping) {
      setDisplayedText(levelData.story[storyIndex].text);
      setIsTyping(false);
      return;
    }
    if (storyIndex < levelData.story.length - 1) {
      setStoryIndex(storyIndex + 1);
    } else {
      setPhase('lesson');
    }
  };

  const handleRunCode = () => {
    const result = runPython(code);
    setOutput(result);

    const isValid = levelData.challenge.validation(code, result.output);
    setChallengeResult(isValid ? 'success' : 'error');

    if (isValid) {
      playSuccess();
      setTimeout(() => {
        if (levelData.decision) {
          setPhase('decision');
        } else {
          completeLevel(0);
        }
      }, 1500);
    } else {
      playError();
      setErrors(prev => prev + 1);
    }
  };

  const handleDecision = (optionIndex) => {
    const option = levelData.decision.options[optionIndex];
    setSelectedDecision(optionIndex);

    dispatch({ type: 'MAKE_DECISION', payload: { chapterId, levelId, optionIndex } });

    const bonus = option.bonusXp || 0;
    setBonusXp(bonus);
    if (option.unlock) {
      dispatch({ type: 'ADD_UNLOCK', payload: option.unlock });
    }

    setTimeout(() => completeLevel(bonus), 2000);
  };

  const completeLevel = (bonus) => {
    const stars = Math.max(1, 5 - errors);
    dispatch({
      type: 'COMPLETE_LEVEL',
      payload: { chapterId, levelId, xp: levelData.xpReward + bonus, stars },
    });
    setPhase('complete');
  };

  const handleKeyDown = (e) => {
    // Sonido de teclado del usuario
    if (!e.repeat && e.key.length === 1 || e.key === 'Backspace' || e.key === 'Enter' || e.key === 'Tab') {
      playUserKey(e.key === 'Enter' || e.key === ' ' ? 0.2 : 0.12 + Math.random() * 0.06);
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      setCode(code.substring(0, start) + '    ' + code.substring(end));
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 4;
      }, 0);
    }
  };

  const getSpeakerStyle = (speaker) => {
    if (speaker === 'system') return 'text-neon-green font-mono text-sm';
    return 'text-neon-blue';
  };

  const getSpeakerLabel = (speaker) => {
    if (speaker === 'system') return '';
    if (speaker === 'mentor') return 'EVA > ';
    return '';
  };

  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => navigate('/mapa')} className="flex items-center gap-1 text-terminal-muted hover:text-neon-green transition-colors cursor-pointer">
          <ChevronLeft className="w-4 h-4" /> Mapa
        </button>
        <div className="text-center">
          <div className="text-xs text-terminal-muted">{levelData.chapter.title}</div>
          <div className="text-sm font-bold text-terminal-text">{levelData.title}</div>
        </div>
        <div className="flex items-center gap-1 text-neon-yellow text-sm">
          <Zap className="w-4 h-4" /> {levelData.xpReward} XP
        </div>
      </div>

      {/* Phase indicator */}
      <div className="flex items-center gap-2 mb-6 justify-center">
        {PHASES.filter(p => p !== 'decision' || levelData.decision).map((p, i) => (
          <div key={p} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full transition-all ${
              phase === p ? 'bg-neon-green scale-125' :
              PHASES.indexOf(phase) > PHASES.indexOf(p) ? 'bg-neon-green/50' : 'bg-terminal-border'
            }`} />
            {i < (levelData.decision ? PHASES.length - 1 : PHASES.length - 2) && (
              <div className={`w-6 h-0.5 ${PHASES.indexOf(phase) > PHASES.indexOf(p) ? 'bg-neon-green/30' : 'bg-terminal-border/30'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Content area */}
      <div className="flex-1">

        {/* STORY PHASE */}
        {phase === 'story' && (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            {/* EVA Avatar — visible when mentor speaks */}
            {levelData.story[storyIndex]?.speaker === 'mentor' && (
              <div className="mb-6 flex flex-col items-center animate-fade-in">
                <AriaAvatar isSpeaking={isTyping} size={96} />
                <span className="text-neon-blue text-xs mt-2 font-bold tracking-wider">E.V.A.</span>
              </div>
            )}

            <div className="w-full max-w-2xl bg-terminal-surface border border-terminal-border rounded-lg p-6">
              {/* Terminal header */}
              <div className="flex gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-neon-red/70" />
                <div className="w-3 h-3 rounded-full bg-neon-yellow/70" />
                <div className="w-3 h-3 rounded-full bg-neon-green/70" />
              </div>

              {/* Previous messages */}
              <div className="space-y-3 mb-4">
                {levelData.story.slice(0, storyIndex).map((msg, i) => (
                  <p key={i} className={`text-sm ${getSpeakerStyle(msg.speaker)} opacity-50`}>
                    {msg.speaker === 'mentor' && <span className="inline-block w-4 h-4 align-middle mr-1 rounded-full bg-neon-blue/20 border border-neon-blue/40 text-[8px] text-center leading-4">E</span>}
                    <span className="font-bold">{getSpeakerLabel(msg.speaker)}</span>
                    {msg.text}
                  </p>
                ))}
              </div>

              {/* Current message */}
              <div className="min-h-[60px]">
                <p className={`text-sm ${getSpeakerStyle(levelData.story[storyIndex]?.speaker)}`}>
                  {levelData.story[storyIndex]?.speaker === 'mentor' && <span className="inline-block w-4 h-4 align-middle mr-1 rounded-full bg-neon-blue/30 border border-neon-blue/50 text-[8px] text-center leading-4">E</span>}
                  <span className="font-bold">{getSpeakerLabel(levelData.story[storyIndex]?.speaker)}</span>
                  {displayedText}
                  {isTyping && <span className="animate-blink ml-0.5">▊</span>}
                </p>
              </div>

              <button
                onClick={handleStoryNext}
                className="mt-6 w-full py-2 text-sm text-terminal-muted hover:text-neon-green border border-terminal-border hover:border-neon-green/50 rounded transition-colors cursor-pointer"
              >
                {isTyping ? 'Saltar >' : storyIndex < levelData.story.length - 1 ? 'Continuar >' : 'Ir a la lección >'}
              </button>
            </div>
          </div>
        )}

        {/* LESSON PHASE */}
        {phase === 'lesson' && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="bg-terminal-surface border border-terminal-border rounded-lg p-6 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-neon-blue" />
                <h2 className="text-lg font-bold text-neon-blue">{levelData.lesson.concept}</h2>
              </div>
              <div className="text-sm text-terminal-text whitespace-pre-wrap leading-relaxed">
                {levelData.lesson.explanation}
              </div>
            </div>

            {/* Example */}
            <div className="bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden mb-4">
              <div className="px-4 py-2 border-b border-terminal-border text-xs text-terminal-muted flex items-center gap-2">
                <span className="text-neon-green">▶</span> Ejemplo
              </div>
              <pre className="p-4 text-sm text-neon-green overflow-x-auto">
                <code>{levelData.lesson.example}</code>
              </pre>
              <div className="border-t border-terminal-border px-4 py-2">
                <div className="text-xs text-terminal-muted mb-1">Salida:</div>
                <pre className="text-sm text-neon-yellow">{levelData.lesson.exampleOutput}</pre>
              </div>
            </div>

            <button
              onClick={() => setPhase('challenge')}
              className="w-full py-3 bg-neon-blue/10 border border-neon-blue text-neon-blue rounded-lg font-bold hover:bg-neon-blue/20 transition-all cursor-pointer"
            >
              ¡Estoy listo! Ir al desafío →
            </button>
          </div>
        )}

        {/* CHALLENGE PHASE */}
        {phase === 'challenge' && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            {/* Stars indicator */}
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className={`w-5 h-5 transition-all ${i <= Math.max(1, 5 - errors) ? 'text-neon-yellow fill-neon-yellow' : 'text-terminal-border'}`} />
              ))}
            </div>

            {/* Instruction */}
            <div className={`bg-terminal-surface border rounded-lg p-4 mb-4 ${
              challengeResult === 'success' ? 'border-neon-green' :
              challengeResult === 'error' ? 'border-neon-red' : 'border-terminal-border'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-neon-yellow" />
                <span className="text-sm font-bold text-neon-yellow">Desafío</span>
              </div>
              <p className="text-sm text-terminal-text">{levelData.challenge.instruction}</p>
            </div>

            {/* Code editor */}
            <div className="bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden mb-4">
              <div className="flex items-center justify-between px-4 py-2 border-b border-terminal-border">
                <div className="flex items-center gap-2 text-xs text-terminal-muted">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-neon-red/70" />
                    <div className="w-3 h-3 rounded-full bg-neon-yellow/70" />
                    <div className="w-3 h-3 rounded-full bg-neon-green/70" />
                  </div>
                  <span>editor.py</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="flex items-center gap-1 text-xs text-terminal-muted hover:text-neon-yellow transition-colors cursor-pointer"
                  >
                    <Lightbulb className="w-3 h-3" />
                    Pista
                  </button>
                  <button
                    onClick={() => {
                      setCode(levelData.challenge.initialCode);
                      setOutput(null);
                      setChallengeResult(null);
                    }}
                    className="flex items-center gap-1 text-xs text-terminal-muted hover:text-neon-orange transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </button>
                </div>
              </div>

              {showHint && (
                <div className="px-4 py-2 bg-neon-yellow/5 border-b border-terminal-border text-xs text-neon-yellow">
                  💡 {levelData.challenge.hint}
                </div>
              )}

              <div className="relative">
                {/* Line numbers */}
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-terminal-bg/50 border-r border-terminal-border/30 pt-4 text-right pr-2">
                  {code.split('\n').map((_, i) => (
                    <div key={i} className="text-xs text-terminal-muted/50 leading-[21px]">{i + 1}</div>
                  ))}
                </div>

                <textarea
                  ref={textareaRef}
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setChallengeResult(null);
                  }}
                  onKeyDown={handleKeyDown}
                  className="w-full bg-transparent text-neon-green p-4 pl-14 text-sm resize-none focus:outline-none min-h-[150px] leading-[21px]"
                  spellCheck={false}
                  autoCapitalize="off"
                  autoCorrect="off"
                />
              </div>

              {/* Run button */}
              <div className="border-t border-terminal-border p-3 flex justify-between items-center">
                <span className="text-xs text-terminal-muted">
                  Salida esperada: <code className="text-neon-yellow">{levelData.challenge.expectedOutput}</code>
                </span>
                <button
                  onClick={handleRunCode}
                  disabled={challengeResult === 'success'}
                  className="flex items-center gap-2 px-4 py-2 bg-neon-green/10 border border-neon-green text-neon-green rounded font-bold text-sm hover:bg-neon-green/20 transition-all disabled:opacity-50 cursor-pointer"
                >
                  <Play className="w-4 h-4" />
                  Ejecutar
                </button>
              </div>
            </div>

            {/* Output */}
            {output && (
              <div className={`bg-terminal-surface border rounded-lg p-4 animate-fade-in ${
                challengeResult === 'success' ? 'border-neon-green' : challengeResult === 'error' ? 'border-neon-red' : 'border-terminal-border'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {challengeResult === 'success' ? (
                    <Check className="w-4 h-4 text-neon-green" />
                  ) : challengeResult === 'error' ? (
                    <X className="w-4 h-4 text-neon-red" />
                  ) : null}
                  <span className={`text-sm font-bold ${
                    challengeResult === 'success' ? 'text-neon-green' : challengeResult === 'error' ? 'text-neon-red' : 'text-terminal-muted'
                  }`}>
                    {challengeResult === 'success' ? '¡Correcto!' : challengeResult === 'error' ? 'No es la respuesta esperada' : 'Salida:'}
                  </span>
                </div>
                <pre className="text-sm text-terminal-text whitespace-pre-wrap">{output.output}</pre>
                {output.error && (
                  <pre className="text-sm text-neon-red mt-2 whitespace-pre-wrap">Error: {output.error}</pre>
                )}
                {challengeResult === 'success' && (
                  <div className="mt-3 text-sm text-neon-green animate-slide-up">
                    ⚡ +{levelData.xpReward} XP — ¡Avanzando al siguiente paso!
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* DECISION PHASE */}
        {phase === 'decision' && levelData.decision && (
          <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[50vh] animate-fade-in">
            <div className="bg-terminal-surface border border-neon-purple/50 rounded-lg p-6 w-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-neon-purple text-lg">⚡</span>
                <h2 className="text-lg font-bold text-neon-purple">Decisión</h2>
              </div>
              <p className="text-sm text-terminal-text mb-6">{levelData.decision.text}</p>

              {selectedDecision === null ? (
                <div className="space-y-3">
                  {levelData.decision.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDecision(idx)}
                      className="w-full p-4 text-left bg-terminal-bg border border-terminal-border rounded-lg hover:border-neon-purple/50 hover:bg-neon-purple/5 transition-all text-sm text-terminal-text cursor-pointer"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="animate-fade-in">
                  <div className="p-4 bg-neon-purple/10 border border-neon-purple/30 rounded-lg">
                    <p className="text-sm text-neon-purple font-bold mb-1">
                      {levelData.decision.options[selectedDecision].text}
                    </p>
                    <p className="text-sm text-terminal-text">
                      {levelData.decision.options[selectedDecision].consequence}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* COMPLETE PHASE */}
        {phase === 'complete' && (() => {
          const earnedStars = Math.max(1, 5 - errors);
          return (
          <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[50vh] animate-fade-in">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-neon-green mb-2">¡Nivel Completado!</h2>
              <p className="text-terminal-muted">{levelData.title}</p>
              {/* Stars display */}
              <div className="flex justify-center gap-1 mt-3">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-6 h-6 ${i <= earnedStars ? 'text-neon-yellow fill-neon-yellow' : 'text-terminal-border'}`} />
                ))}
              </div>
            </div>

            <div className="bg-terminal-surface border border-neon-green/30 rounded-lg p-6 w-full max-w-sm mb-8">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-terminal-muted text-sm">XP ganado</span>
                  <span className="text-neon-yellow font-bold flex items-center gap-1">
                    <Zap className="w-4 h-4" /> +{levelData.xpReward}
                  </span>
                </div>
                {bonusXp > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-terminal-muted text-sm">XP bonus</span>
                    <span className="text-neon-purple font-bold">+{bonusXp}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-terminal-muted text-sm">Estrellas</span>
                  <span className="text-neon-yellow font-bold">{earnedStars}/5</span>
                </div>
                <div className="border-t border-terminal-border pt-2 flex justify-between items-center">
                  <span className="text-terminal-text text-sm font-bold">Total</span>
                  <span className="text-neon-green font-bold text-lg">+{levelData.xpReward + bonusXp}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate('/mapa')}
                className="px-6 py-3 border border-terminal-border text-terminal-muted rounded-lg hover:border-neon-blue hover:text-neon-blue transition-colors cursor-pointer"
              >
                Ver Mapa
              </button>
              {getNextLevel(chapterId, levelId) ? (
                <button
                  onClick={() => {
                    const next = getNextLevel(chapterId, levelId);
                    navigate(`/nivel/${next.chapterId}/${next.levelId}`);
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-neon-green/10 border border-neon-green text-neon-green rounded-lg font-bold hover:bg-neon-green/20 transition-all cursor-pointer"
                >
                  Siguiente Nivel <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 px-6 py-3 bg-neon-yellow/10 border border-neon-yellow text-neon-yellow rounded-lg font-bold cursor-pointer"
                >
                  🏆 ¡Juego Completado!
                </button>
              )}
            </div>
          </div>
          );
        })()}
      </div>
    </div>
  );
}
