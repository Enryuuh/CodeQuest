import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Home from './pages/Home';
import LevelMap from './pages/LevelMap';
import Level from './pages/Level';
import Achievements from './pages/Achievements';
import Memory from './pages/Memory';
import MatrixRain from './components/MatrixRain';

// Rutas donde el Matrix se ve completo (solo home)
const MATRIX_FULL_ROUTES = ['/'];

function AppContent() {
  const location = useLocation();
  const isHome = MATRIX_FULL_ROUTES.includes(location.pathname);

  return (
    <>
      {/* Matrix: visible en home, casi invisible en otras páginas */}
      <MatrixRain opacity={isHome ? 0.9 : 0.07} />

      {/* Overlay oscuro detrás del contenido en páginas de lectura */}
      {!isHome && (
        <div className="fixed inset-0 z-[1] bg-terminal-bg/80 pointer-events-none" />
      )}

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapa" element={<LevelMap />} />
          <Route path="/nivel/:chapterId/:levelId" element={<Level />} />
          <Route path="/logros" element={<Achievements />} />
          <Route path="/memoria" element={<Memory />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <GameProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </GameProvider>
  );
}

export default App;
