import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { Header1 } from '../common';
import { drone } from '../../constants';

const ComponentSection = ({ component, index }) => {
  return (
    <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.5)}
        className="flex flex-col gap-5"
        key={index}
    >
      <h3 className="font-poppins text-2xl font-semibold">{component.title}</h3>
      <p className="text-xl">{component.description}</p>
      <img className="w-full h-60 object-cover rounded-lg" src={component.img} alt={component.alt} />
    </motion.div>
  )
}

const ComponentsSection = ({ components, index }) => {
  return (
    <>
      <Header1 text={components.header} />
      
    </>
  )
}

const AllDroneComponents = () => {
  const WrappedComponentsSection = SectionWrapper(ComponentsSection, '');

  return (
    <div className="w-full flex flex-col gap-10">
      {drone.allComponents.map((components, index) => (
        <WrappedComponentsSection key={index} components={components} index={index} />
      ))}
      
    </div>
  )
}

export default AllDroneComponents
