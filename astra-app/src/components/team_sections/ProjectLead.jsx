import { CommonTitle } from '../team_sections';
import { mattromero } from '../../assets';
import { team } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';

const ProjectLeadProfileCard = () => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", 0.4, 0.75)} 
      className="flex flex-col items-center gap-5 w-full h-auto"
    >
      <img src={mattromero} alt="Matthew Romero" className="w-full md:w-[600px] object-cover aspect-1-1" />
      <h4 className="text-xl font-semibold">Matthew Romero</h4>
      <div className="flex flex-col lg:w-7/10 md:w-8/10 w-full sm:text-[16px] text-sm">
        <p className=""><span className="ml-5"/>{team.projectLead.p1}</p>
        <p className="pt-2"><span className="ml-5"/>{team.projectLead.p2}</p>
        <p className="pt-2"><span className="ml-5"/>{team.projectLead.p3}</p>
        <p className="pt-2"><span className="ml-5"/>{team.projectLead.p4}</p>
        <p className="pt-2"><span className="ml-5"/>{team.projectLead.p5}</p>
      </div>
    </motion.div>

  )
}

const ProjectLead = () => {
  const WrappedProjectLeadProfileCard = SectionWrapper(ProjectLeadProfileCard, '');

  return (
    <section className="flex flex-col items-center gap-5 w-full h-auto pt-10">
      <CommonTitle title="Project Lead" />
      <WrappedProjectLeadProfileCard />
      {/* <img src={mattromero} alt="Matthew Romero" className="w-full md:w-[600px] object-cover aspect-1-1" />
      <h4 className="text-xl font-semibold">Matthew Romero</h4>
      <div className="flex flex-col lg:w-7/10 md:w-8/10 w-full sm:text-[16px] text-sm">
        <p className=""><span className="ml-5"/>{team.projectLead.p1}</p>
        <p className="pt-2"><span className="ml-5"/>{team.projectLead.p2}</p>
        <p className="pt-2"><span className="ml-5"/>{team.projectLead.p3}</p>
        <p className="pt-2"><span className="ml-5"/>{team.projectLead.p4}</p>
        <p className="pt-2"><span className="ml-5"/>{team.projectLead.p5}</p>
      </div> */}
    </section>
  );
}

export default ProjectLead;
