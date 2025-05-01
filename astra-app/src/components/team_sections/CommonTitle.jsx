import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';

const CommonTitle = ({ title }) => {
  return (
    <motion.div 
      variants={textVariant(0.3)}
      className="flex flex-col items-center gap-5 w-full h-auto"
    >
      <h1 className="font-poppins text-black text-4xl font-semibold">{title}</h1>
      <div className="w-16 h-[3px] bg-black" />
    </motion.div>
  );
}

export default SectionWrapper(CommonTitle, '');
