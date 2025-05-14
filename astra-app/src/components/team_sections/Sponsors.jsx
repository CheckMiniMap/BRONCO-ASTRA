import { team } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { Highlight } from '../common';

const SponsorsSection = () => {
  return (
    <motion.div
      variants={fadeIn("", "spring", 0.5, 0.75)}
      className="flex flex-col items-center w-full max-w-[968px] gap-10 pt-15"
    >
      <h1 className="font-poppins font-semibold text-4xl sm:text-5xl"><Highlight text={team.sponsors.title} /></h1>
      <div className="relative grid sm:grid-cols-3 grid-cols-1 sm:items-start items-center justify-items-center w-full gap-5">
        <div className="bg-white rounded-lg drop-shadow-md/25 max-w-100">
          <img src={team.sponsors.img} alt={team.sponsors.alt} className="w-full object-fit rounded-lg" />
        </div>
        
        <p className="text-base md:text-lg w-auto sm:col-span-2 col-span-1"><span className="ml-5"/><Highlight text={team.sponsors.description} /></p>
      </div>
    </motion.div>
  )
}

const Sponsors = () => {
  const WrappedSponsorsSection = SectionWrapper(SponsorsSection, "project-advisor");

  return (
    <div className="flex justify-center w-full" id={team.sponsors.id}>
      <WrappedSponsorsSection />
    </div>
  )
}

export default Sponsors
