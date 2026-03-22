// Motor de sonidos de teclado sintetizados con Web Audio API
// No requiere archivos de audio — todo generado en tiempo real

let ctx = null;

function getCtx() {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
  }
  // Resume si está suspendido (política de autoplay)
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
  return ctx;
}

// Sonido suave de tecla — para el typewriter de EVA
export function playTypewriterKey(velocity = 0.12) {
  const audio = getCtx();
  const now = audio.currentTime;

  // Capa 1: Burst de ruido corto y suave (clic)
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

  // Capa 2: Tono bajo suave (thock)
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

// Sonido de teclado del usuario — un poco más fuerte y variado
export function playUserKey(velocity = 0.18) {
  const audio = getCtx();
  const now = audio.currentTime;

  // Capa 1: Noise click
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

  // Capa 2: Thock
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

  // Capa 3: Tick agudo sutil
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
