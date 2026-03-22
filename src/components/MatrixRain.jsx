import { useEffect, useRef } from 'react';

const CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]<>=/\\|;:+-*&^%$#@!~';

export default function MatrixRain({ opacity = 0.06 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;
    let lastTime = 0;
    const FPS = 20; // frames per second — slower = more cinematic
    const INTERVAL = 1000 / FPS;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);

    // Each column has its own speed multiplier and trail length
    let drops = Array(columns).fill(0).map(() => Math.random() * -80);
    let speeds = Array(columns).fill(0).map(() => 0.5 + Math.random() * 1.5);
    let chars = Array(columns).fill('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]);

    const draw = (timestamp) => {
      animId = requestAnimationFrame(draw);
      if (timestamp - lastTime < INTERVAL) return;
      lastTime = timestamp;

      // Slow fade — lower alpha = longer, more visible trails
      ctx.fillStyle = 'rgba(13, 17, 23, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px monospace`;

      // Sync column count with canvas width
      const newCols = Math.floor(canvas.width / fontSize);
      if (newCols > columns) {
        for (let i = columns; i < newCols; i++) {
          drops.push(Math.random() * -80);
          speeds.push(0.5 + Math.random() * 1.5);
          chars.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
        }
      }
      columns = newCols;

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Randomly update the character in this column
        if (Math.random() > 0.85) {
          chars[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
        }

        // Head character: bright white-green (cinematic Matrix look)
        ctx.fillStyle = `rgba(220, 255, 220, ${Math.min(1, opacity * 10)})`;
        ctx.fillText(chars[i], x, y);

        // Second character: slightly dimmer green
        if (drops[i] > 1) {
          const char2 = CHARS[Math.floor(Math.random() * CHARS.length)];
          ctx.fillStyle = `rgba(57, 211, 83, ${opacity * 5})`;
          ctx.fillText(char2, x, y - fontSize);
        }

        // Reset column when it goes off screen
        if (y > canvas.height && Math.random() > 0.97) {
          drops[i] = -Math.random() * 20;
          speeds[i] = 0.5 + Math.random() * 1.5;
        }

        drops[i] += speeds[i];
      }
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
}
