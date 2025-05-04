import { AboutSection, DroneModel, AllDroneComponents } from './drone_sections';
import { Footer } from '../components';

const Drone = () => {
  return (
    <div className="relative w-full mt-31">
      <AboutSection />
      <DroneModel />
      <AllDroneComponents />
      <Footer />
    </div>
  )
}

export default Drone
