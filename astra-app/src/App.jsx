import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Home, Team, Drone, Timeline } from './components';
import { styles } from './styles.js';

function App() {
  return (
    <BrowserRouter>
      <div className={`${styles.paddingX} w-full flex flex-col items-center relative z-0 bg-white text-black`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drone" element={<Drone />} />
          <Route path="/team" element={<Team />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
