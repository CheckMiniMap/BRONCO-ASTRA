import { AboutSection, DroneModel, AllDroneComponents } from './drone_sections';
import { Footer } from '../components';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollAndHighlight } from '../utils/scrollAndHighlight';

const Drone = () => {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.hash.replace('#', '');
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    scrollAndHighlight({ query, targetId });
    window.history.replaceState({}, '', window.location.pathname + window.location.hash);
  }, [location]);

  return (
    <div className="relative w-full mt-31">
      <DroneModel />
      <AboutSection />
      
      <AllDroneComponents />
      <Footer />
    </div>
  )
}

export default Drone
