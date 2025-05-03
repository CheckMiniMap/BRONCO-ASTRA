import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Home, Team, Drone, Timeline, Tips } from './components';
import { styles } from './styles.js';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full flex items-center">
        <div className={`${styles.paddingX} w-full max-w-[1920px] flex flex-col items-center relative z-0 bg-white text-black`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drone" element={<Drone />} />
            <Route path="/team" element={<Team />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
