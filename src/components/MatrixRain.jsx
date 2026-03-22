import { useEffect, useRef } from 'react';

// Katakana + números + símbolos — igual que la peli
const CHARS = 'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ012345789Z';

export default function MatrixRain({ opacity = 1 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;
    let lastTime = 0;
    const INTERVAL = 50; // ~20fps — velocidad cinematic

    const fontSize = 15;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Limpiar al redimensionar
      ctx.fillStyle = '#0d1117';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    let columns = Math.floor(canvas.width / fontSize);

    // Estado por columna
    let drops   = Array.from({ length: columns }, () => Math.random() * -(canvas.height / fontSize));
    let speeds  = Array.from({ length: columns }, () => 0.4 + Math.random() * 1.2);
    let lengths = Array.from({ length: columns }, () => 10 + Math.floor(Math.random() * 20)); // longitud del stream

    const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

    const draw = (timestamp) => {
      animId = requestAnimationFrame(draw);
      if (timestamp - lastTime < INTERVAL) return;
      lastTime = timestamp;

      // Overlay semitransparente — crea el efecto de cola que se desvanece
      ctx.fillStyle = 'rgba(13, 17, 23, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Courier New", monospace`;

      // Sincronizar columnas si cambia el ancho
      const newCols = Math.floor(canvas.width / fontSize);
      while (drops.length < newCols) {
        drops.push(Math.random() * -(canvas.height / fontSize));
        speeds.push(0.4 + Math.random() * 1.2);
        lengths.push(10 + Math.floor(Math.random() * 20));
      }
      columns = newCols;

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const headY = drops[i] * fontSize;

        // ── Carácter cabeza: BLANCO brillante
        ctx.fillStyle = '#e8ffe8';
        ctx.fillText(randomChar(), x, headY);

        // ── Segundo carácter: verde claro
        ctx.fillStyle = '#7fff7f';
        ctx.fillText(randomChar(), x, headY - fontSize);

        // ── Cola: verde medio
        ctx.fillStyle = '#39d353';
        ctx.fillText(randomChar(), x, headY - fontSize * 2);

        // ── Trail final: verde oscuro (ya se dibujó antes via fade)
        // El overlay semitransparente hace fade automáticamente

        // Resetear cuando sale de pantalla
        if (headY > canvas.height + lengths[i] * fontSize) {
          drops[i] = Math.random() * -30;
          speeds[i] = 0.4 + Math.random() * 1.2;
          lengths[i] = 10 + Math.floor(Math.random() * 20);
        }

        drops[i] += speeds[i];
      }
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity }}
    />
  );
}
