import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';

import { Highlight } from '../common';

const Header1 = ({ text, id }) => {
  return (
    <motion.div
      variants={textVariant()}
      className="flex w-full justify-center"
    >
      <h1 className="font-poppins font-semibold md:text-6xl text-4xl" id={id ? id : ""}><Highlight text={text} /></h1>
    </motion.div>
    
  )
}

export default SectionWrapper(Header1, '');
