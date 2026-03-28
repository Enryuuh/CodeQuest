import { useEffect, useRef } from 'react';

// Common matrix characters: Katakana, basic latin, numerals, and some symbols
const KatakanaChars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン';
const LatinChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NumbersChars = '0123456789';
const CHARS = KatakanaChars + LatinChars + NumbersChars;

export default function MatrixRain({ opacity = 0.5 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);

    // Initial Y positions of the drops
    let drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // Start offscreen randomly
    }

    let lastTime = 0;
    const draw = (time) => {
      animId = requestAnimationFrame(draw);

      if (time - lastTime < 33) return; // ~30 fps
      lastTime = time;

      // Dark overlay with slight opacity creates the fading trail effect
      ctx.fillStyle = `rgba(13, 17, 23, 0.15)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      
      // Handle resize: sync drops array length with current column count
      const currentColumns = Math.floor(canvas.width / fontSize);
      while (drops.length < currentColumns) {
        drops.push(Math.random() * -100);
      }
      if (drops.length > currentColumns) {
        drops.length = currentColumns;
      }

      ctx.textAlign = 'left';

      for (let i = 0; i < drops.length; i++) {
        const text = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Draw character
        ctx.fillStyle = `rgba(57, 211, 83, ${opacity})`;
        
        // Randomly make some characters white/brighter (the drop heads)
        if (Math.random() > 0.9) {
          ctx.fillStyle = `rgba(200, 255, 200, ${opacity * 1.5})`; 
          ctx.shadowBlur = 5;
          ctx.shadowColor = `rgba(57, 211, 83, ${opacity})`;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, x, y);
        ctx.shadowBlur = 0;

        // Reset drop to top randomly when it hits bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment Y position
        drops[i]++;
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
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ opacity: 1 }}
    />
  );
}
