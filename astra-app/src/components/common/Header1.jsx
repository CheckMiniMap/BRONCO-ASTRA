import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';

const Header1 = ({ text, id }) => {
  return (
    <motion.div
      variants={textVariant()}
      className="flex w-full justify-center"
    >
      <h1 className="font-poppins font-semibold md:text-6xl text-4xl" id={id ? id : ""}>{text}</h1>
    </motion.div>
    
  )
}

export default SectionWrapper(Header1, '');
