import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Home, Team, Drone, Timeline, Tips } from './components';
import { ScrollToTop } from './components/common'
import { styles } from './styles.js';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="relative w-full flex justify-center">
        <div className={`relative ${styles.paddingX} w-full max-w-[1920px] flex flex-col items-center z-0 bg-white text-black`}>
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
