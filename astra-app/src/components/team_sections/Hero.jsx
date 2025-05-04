import { Header1 } from '../common';
import { meettheteam } from '../../assets';

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-5 w-full h-auto">
      <Header1 text="Meet The Team" />
      <img 
        className="w-full md:h-160 sm:h-100 h-70 object-cover"
        src={meettheteam} 
        alt="Team Working" />
    </section>
  );
}

export default Hero
