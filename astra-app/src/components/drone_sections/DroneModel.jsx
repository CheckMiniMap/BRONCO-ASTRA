import { DroneCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { slideIn, fadeIn, textVariant } from '../../utils/motion';

const DroneModel = () => {
  return (
    <div className="flex justify-center items-center w-full aspect-[2.3] max-h-[80vh]">
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="w-full h-full"
      >
        <DroneCanvas />
      </motion.div>
    </div>
  );
};

export default DroneModel
