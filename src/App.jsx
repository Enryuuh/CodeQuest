import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Home from './pages/Home';
import LevelMap from './pages/LevelMap';
import Level from './pages/Level';
import Achievements from './pages/Achievements';
import Memory from './pages/Memory';
import MatrixRain from './components/MatrixRain';

function LevelWithKey() {
  const { chapterId, levelId } = useParams();
  return <Level key={`${chapterId}/${levelId}`} />;
}

function App() {
  return (
    <GameProvider>
      <MatrixRain opacity={0.06} />
      <div className="relative z-10">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mapa" element={<LevelMap />} />
            <Route path="/nivel/:chapterId/:levelId" element={<LevelWithKey />} />
            <Route path="/logros" element={<Achievements />} />
            <Route path="/memoria" element={<Memory />} />
          </Routes>
        </HashRouter>
      </div>
    </GameProvider>
  );
}

export default App;
