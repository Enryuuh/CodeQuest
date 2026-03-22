import { useEffect, useState, useRef } from 'react';

// Pixel art face grid (16x16) - 1=skin, 2=eye, 3=hair, 4=mouth, 5=glow accent
const FACE_GRID = [
  [0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0],
  [0,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0],
  [0,0,3,3,3,3,3,3,3,3,3,3,3,3,0,0],
  [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
  [0,3,1,1,1,1,1,1,1,1,1,1,1,1,3,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,2,2,1,1,1,1,2,2,1,1,1,0],
  [0,1,1,1,2,5,1,1,1,1,2,5,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,4,4,4,4,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,4,4,1,1,1,1,1,1,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
];

// Mouth frames for talking animation
const MOUTH_FRAMES = [
  // closed
  [[6,10],[7,10],[8,10],[9,10]],
  // open small
  [[6,10],[7,10],[8,10],[9,10],[6,11],[7,11],[8,11],[9,11]],
  // open wide
  [[5,10],[6,10],[7,10],[8,10],[9,10],[10,10],[5,11],[6,11],[7,11],[8,11],[9,11],[10,11]],
];

const COLORS = {
  0: 'transparent',
  1: '#1a1a2e', // skin (dark cyber)
  2: '#39d353', // eyes green
  3: '#0f3460', // hair dark blue
  4: '#39d353', // mouth green
  5: '#58a6ff', // eye glow blue
};

const SPEAKING_COLORS = {
  0: 'transparent',
  1: '#16213e',
  2: '#39d353',
  3: '#0a1628',
  4: '#58a6ff',
  5: '#bc8cff',
};

export default function AriaAvatar({ isSpeaking = false, size = 80 }) {
  const [mouthFrame, setMouthFrame] = useState(0);
  const [scanLine, setScanLine] = useState(0);
  const [glitchOffset, setGlitchOffset] = useState(0);
  const [matrixDrops, setMatrixDrops] = useState([]);
  const canvasRef = useRef(null);
  const pixelSize = size / 16;

  // Mouth animation when speaking
  useEffect(() => {
    if (!isSpeaking) {
      setMouthFrame(0);
      return;
    }
    const interval = setInterval(() => {
      setMouthFrame(f => (f + 1) % 3);
    }, 120);
    return () => clearInterval(interval);
  }, [isSpeaking]);

  // Scan line effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine(s => (s + 1) % 18);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Glitch effect when speaking
  useEffect(() => {
    if (!isSpeaking) {
      setGlitchOffset(0);
      return;
    }
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        setGlitchOffset(Math.random() > 0.5 ? (Math.random() * 3 - 1.5) : 0);
      } else {
        setGlitchOffset(0);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isSpeaking]);

  // Matrix rain drops
  useEffect(() => {
    if (!isSpeaking) {
      setMatrixDrops([]);
      return;
    }
    const interval = setInterval(() => {
      setMatrixDrops(prev => {
        const next = prev.filter(d => d.y < 20).map(d => ({ ...d, y: d.y + 1, char: Math.random() > 0.7 ? randomChar() : d.char }));
        if (Math.random() > 0.5) {
          next.push({ x: Math.floor(Math.random() * 16), y: 0, char: randomChar(), id: Date.now() + Math.random() });
        }
        return next.slice(-12);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isSpeaking]);

  const colors = isSpeaking ? SPEAKING_COLORS : COLORS;

  // Build pixel grid with mouth animation
  const getGrid = () => {
    const grid = FACE_GRID.map(row => [...row]);
    if (isSpeaking && mouthFrame > 0) {
      const frame = MOUTH_FRAMES[mouthFrame];
      // Clear default mouth
      for (let y = 10; y <= 11; y++) {
        for (let x = 5; x <= 10; x++) {
          if (grid[y] && grid[y][x] === 4) grid[y][x] = 1;
        }
      }
      // Draw current mouth frame
      frame.forEach(([x, y]) => {
        if (grid[y]) grid[y][x] = 4;
      });
    }
    return grid;
  };

  const grid = getGrid();

  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      {/* Glow behind avatar */}
      <div
        className="absolute inset-0 rounded-full blur-xl transition-opacity duration-300"
        style={{
          background: isSpeaking
            ? 'radial-gradient(circle, rgba(57,211,83,0.4) 0%, rgba(88,166,255,0.2) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(57,211,83,0.15) 0%, transparent 60%)',
          transform: `scale(1.5)`,
        }}
      />

      {/* Main pixel art */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="relative z-10"
        style={{ transform: `translateX(${glitchOffset}px)`, imageRendering: 'pixelated' }}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 1}
          fill="#0d1117"
          stroke={isSpeaking ? '#39d353' : '#30363d'}
          strokeWidth={isSpeaking ? 2 : 1}
          className="transition-all duration-300"
        />

        {/* Pixel face */}
        {grid.map((row, y) =>
          row.map((cell, x) => {
            if (cell === 0) return null;
            const color = colors[cell];
            // Eye pulse when speaking
            const isEye = cell === 2 || cell === 5;
            return (
              <rect
                key={`${x}-${y}`}
                x={x * pixelSize}
                y={y * pixelSize}
                width={pixelSize + 0.5}
                height={pixelSize + 0.5}
                fill={color}
                opacity={isEye && isSpeaking ? (0.7 + Math.sin(Date.now() / 200) * 0.3) : 1}
              />
            );
          })
        )}

        {/* Matrix rain characters */}
        {matrixDrops.map(drop => (
          <text
            key={drop.id}
            x={drop.x * pixelSize + pixelSize / 2}
            y={drop.y * pixelSize}
            fill="#39d353"
            fontSize={pixelSize * 0.8}
            textAnchor="middle"
            opacity={Math.max(0, 1 - drop.y / 18)}
            className="pointer-events-none"
          >
            {drop.char}
          </text>
        ))}

        {/* Scan line */}
        <rect
          x={0}
          y={scanLine * pixelSize}
          width={size}
          height={pixelSize * 0.5}
          fill="rgba(57, 211, 83, 0.08)"
          className="pointer-events-none"
        />

        {/* CRT overlay lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={`crt-${i}`}
            x={0}
            y={i * pixelSize * 2}
            width={size}
            height={1}
            fill="rgba(0,0,0,0.15)"
            className="pointer-events-none"
          />
        ))}
      </svg>

      {/* Speaking indicator */}
      {isSpeaking && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-1 bg-neon-green rounded-full"
              style={{
                height: `${4 + Math.sin((Date.now() / 150) + i * 2) * 4}px`,
                animation: `pulse 0.3s ease-in-out ${i * 0.1}s infinite alternate`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function randomChar() {
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモ';
  return chars[Math.floor(Math.random() * chars.length)];
}
