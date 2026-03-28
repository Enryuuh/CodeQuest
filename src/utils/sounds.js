// Motor de sonidos de teclado sintetizados con Web Audio API
// No requiere archivos de audio — todo generado en tiempo real

let ctx = null;
let muted = (() => {
  try { return localStorage.getItem('codequest_muted') === 'true'; } catch { return false; }
})();
let ambientNodes = null;

function getCtx() {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
  return ctx;
}

export function isMuted() {
  return muted;
}

export function toggleMute() {
  muted = !muted;
  try { localStorage.setItem('codequest_muted', muted); } catch {}
  if (muted) {
    stopAmbient();
  }
  return muted;
}

// Sonido suave de tecla — para el typewriter de EVA
export function playTypewriterKey(velocity = 0.12) {
  if (muted) return;
  const audio = getCtx();
  const now = audio.currentTime;

  const bufferSize = Math.floor(audio.sampleRate * 0.015);
  const noiseBuffer = audio.createBuffer(1, bufferSize, audio.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 10);
  }

  const noise = audio.createBufferSource();
  noise.buffer = noiseBuffer;

  const filter = audio.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 4000 + Math.random() * 1500;
  filter.Q.value = 0.8;

  const noiseGain = audio.createGain();
  noiseGain.gain.setValueAtTime(velocity * 0.5, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

  noise.connect(filter).connect(noiseGain).connect(audio.destination);
  noise.start(now);
  noise.stop(now + 0.02);

  const osc = audio.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(350 + Math.random() * 80, now);
  osc.frequency.exponentialRampToValueAtTime(100, now + 0.012);

  const oscGain = audio.createGain();
  oscGain.gain.setValueAtTime(velocity * 0.25, now);
  oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.012);

  osc.connect(oscGain).connect(audio.destination);
  osc.start(now);
  osc.stop(now + 0.015);
}

// Sonido de teclado del usuario
export function playUserKey(velocity = 0.18) {
  if (muted) return;
  const audio = getCtx();
  const now = audio.currentTime;

  const bufferSize = Math.floor(audio.sampleRate * 0.02);
  const noiseBuffer = audio.createBuffer(1, bufferSize, audio.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 8);
  }

  const noise = audio.createBufferSource();
  noise.buffer = noiseBuffer;

  const filter = audio.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 3500 + Math.random() * 2000;
  filter.Q.value = 1.0;

  const noiseGain = audio.createGain();
  noiseGain.gain.setValueAtTime(velocity * 0.5, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

  noise.connect(filter).connect(noiseGain).connect(audio.destination);
  noise.start(now);
  noise.stop(now + 0.025);

  const osc = audio.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(400 + Math.random() * 100, now);
  osc.frequency.exponentialRampToValueAtTime(80, now + 0.015);

  const oscGain = audio.createGain();
  oscGain.gain.setValueAtTime(velocity * 0.35, now);
  oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

  osc.connect(oscGain).connect(audio.destination);
  osc.start(now);
  osc.stop(now + 0.018);

  const tick = audio.createOscillator();
  tick.type = 'square';
  tick.frequency.value = 6000 + Math.random() * 2000;

  const tickGain = audio.createGain();
  tickGain.gain.setValueAtTime(velocity * 0.06, now);
  tickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.004);

  tick.connect(tickGain).connect(audio.destination);
  tick.start(now);
  tick.stop(now + 0.005);
}

// Sonido de éxito
export function playSuccess() {
  if (muted) return;
  const audio = getCtx();
  const now = audio.currentTime;

  const notes = [523, 659, 784]; // C5, E5, G5
  notes.forEach((freq, i) => {
    const osc = audio.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;

    const gain = audio.createGain();
    gain.gain.setValueAtTime(0, now + i * 0.12);
    gain.gain.linearRampToValueAtTime(0.15, now + i * 0.12 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.3);

    osc.connect(gain).connect(audio.destination);
    osc.start(now + i * 0.12);
    osc.stop(now + i * 0.12 + 0.3);
  });
}

// Sonido de error
export function playError() {
  if (muted) return;
  const audio = getCtx();
  const now = audio.currentTime;

  const osc = audio.createOscillator();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(200, now);
  osc.frequency.linearRampToValueAtTime(100, now + 0.2);

  const gain = audio.createGain();
  gain.gain.setValueAtTime(0.1, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

  const filter = audio.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 800;

  osc.connect(filter).connect(gain).connect(audio.destination);
  osc.start(now);
  osc.stop(now + 0.25);
}

// Sonido de fondo ambiental — drone suave de servidor/sala de máquinas
export function startAmbient() {
  if (muted) return;
  if (ambientNodes) return; // ya activo

  const audio = getCtx();

  // Drone base (60 Hz — zumbido de corriente)
  const drone = audio.createOscillator();
  drone.type = 'sine';
  drone.frequency.value = 60;

  const droneGain = audio.createGain();
  droneGain.gain.setValueAtTime(0, audio.currentTime);
  droneGain.gain.linearRampToValueAtTime(0.025, audio.currentTime + 2);

  // Harmónico suave (120 Hz)
  const harmonic = audio.createOscillator();
  harmonic.type = 'sine';
  harmonic.frequency.value = 120;

  const harmonicGain = audio.createGain();
  harmonicGain.gain.setValueAtTime(0, audio.currentTime);
  harmonicGain.gain.linearRampToValueAtTime(0.008, audio.currentTime + 2);

  // Filtro para suavizar
  const filter = audio.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 200;

  drone.connect(droneGain).connect(filter).connect(audio.destination);
  harmonic.connect(harmonicGain).connect(filter);

  drone.start();
  harmonic.start();

  ambientNodes = { drone, harmonic, droneGain, harmonicGain };
}

export function stopAmbient() {
  if (!ambientNodes) return;
  const audio = getCtx();
  const now = audio.currentTime;
  ambientNodes.droneGain.gain.linearRampToValueAtTime(0, now + 1);
  ambientNodes.harmonicGain.gain.linearRampToValueAtTime(0, now + 1);
  const nodes = ambientNodes;
  ambientNodes = null;
  setTimeout(() => {
    try { nodes.drone.stop(); nodes.harmonic.stop(); } catch {}
  }, 1100);
}
