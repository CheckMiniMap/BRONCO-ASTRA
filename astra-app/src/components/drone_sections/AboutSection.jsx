import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { Header1 } from '../common';
import { drone } from '../../constants';
import { MdKeyboardArrowRight } from "react-icons/md";
import { getElementYPosition } from "../../utils/common";
import { Highlight } from '../common';

const AboutCard = ({ about, index }) => {
  return (
    <motion.div
      variants={fadeIn(index % 2 == 1 ? "left" : "right", "spring", index % 2 == 0 ? 0.3 : 0.6, 0.6)}
      className="flex flex-col gap-5"
      id={about.id}
    >
      <h3 className="font-poppins text-2xl font-semibold"><Highlight text={about.title} /></h3>
      <p className="text-xl"><Highlight text={about.description} /></p>

      <div 
        className="flex justify-center items-center w-60 h-12 bg-blue-900 text-white hover:bg-blue-700 cursor-pointer"
        onClick={() => {
          const element = document.getElementById(about.navId);
          const topPos = getElementYPosition(element, 140);
          //const topPos = element.offsetTop;

          window.scrollTo({
              top: topPos,
              behavior: 'smooth'
          });
          // if (element) {
          //   element.scrollIntoView({ behavior: 'smooth' });
          //   //window.location.hash = `#${about.id}`;
          // }
        }}
      >
        <h4 className="text-xl"><Highlight text={about.btnTitle} /></h4>
        <MdKeyboardArrowRight className="text-3xl ml-2" />
      </div>

      <img className={"w-full h-60 object-cover rounded-lg " + about.styles} src={about.img} alt={about.alt} />
    </motion.div>
  )
}

const AboutSection = () => {
  const WrappedAboutCard = SectionWrapper(AboutCard, '');

  return (
    <>
      <Header1 text="About Our Drone!" />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-15">
        {drone.about.map((about, index) => (
            <WrappedAboutCard key={index} about={about} index={index} />
        ))}
      </div>
      
    </>
  )
}

export default AboutSection
