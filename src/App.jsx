import { HashRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Home from './pages/Home';
import LanguageSelect from './pages/LanguageSelect';
import LevelMap from './pages/LevelMap';
import Level from './pages/Level';
import Achievements from './pages/Achievements';
import Memory from './pages/Memory';
import MatrixRain from './components/MatrixRain';

function App() {
  return (
    <GameProvider>
      <MatrixRain opacity={0.06} />
      <div className="relative z-10">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lenguajes" element={<LanguageSelect />} />
            <Route path="/mapa/:lang" element={<LevelMap />} />
            <Route path="/nivel/:lang/:chapterId/:levelId" element={<Level />} />
            <Route path="/logros" element={<Achievements />} />
            <Route path="/memoria" element={<Memory />} />
            {/* Backward compatibility */}
            <Route path="/mapa" element={<LevelMap />} />
            <Route path="/nivel/:chapterId/:levelId" element={<Level />} />
          </Routes>
        </HashRouter>
      </div>
    </GameProvider>
  );
}

export default App;
