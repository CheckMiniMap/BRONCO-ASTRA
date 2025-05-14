import { team } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { Highlight } from '../common';

const ProjectAdvisorSection = () => {
  return (
    <motion.div
      variants={fadeIn("", "spring", 0.5, 0.75)}
      className="flex flex-col items-center w-full max-w-[968px] gap-10 pt-15"
    >
      <h1 className="font-poppins font-semibold text-4xl sm:text-5xl"><Highlight text={team.advisor.title} /></h1>
      <div className="flex sm:flex-row flex-col sm:items-start items-center w-full gap-5">
        <img src={team.advisor.img} alt={team.advisor.name} className="w-65 h-70 object-cover rounded-lg aspect-1-1 object-[0%-0%] drop-shadow-md/25" />
        <p className="text-base md:text-lg"><span className="ml-5"/><Highlight text={team.advisor.description} /></p>
      </div>
    </motion.div>
  )
}

const ProjectAdvisor = () => {
  const WrappedProjectAdvisorSection = SectionWrapper(ProjectAdvisorSection, "project-advisor");

  return (
    <div className="flex justify-center w-full" id={team.advisor.id}>
      <WrappedProjectAdvisorSection />
    </div>
  )
}

export default ProjectAdvisor
