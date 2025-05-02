import { team } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';

const LeadProfile = ({ size, index, profile }) => {
  return (
    <motion.div
      variants={fadeIn(index > size / 2 ? "right" : "left", "spring", index * 0.5, 0.75)}
      className="flex flex-col items-center gap-3 w-50"
    >
      <img src={profile.img} alt={profile.name} className="w-auto aspect-1-1 object-fit" />
      <h4 className="font-poppins text-[22px] font-semibold pt-2">{profile.name}</h4>
    </motion.div>
  );
}

const MemberProfile = ({ size, index, profile }) => {
  return (
    <motion.div
      variants={fadeIn(index > size / 2 ? "right" : "left", "spring", index * 0.5, 0.75)}
      className="flex flex-col items-center gap-3 w-50"
    >
      <img src={profile.img} alt={profile.name} className="w-auto aspect-1-1 object-fit" />
      <h4 className="font-poppins text-[22px] font-semibold pt-2">{profile.name}</h4>
    </motion.div>
  );
}

const TeamSection = ({ team }) => {
  const WrappedLeadProfile = SectionWrapper(LeadProfile, '');
  const WrappedMemberProfile = SectionWrapper(MemberProfile, '');

  return (
    <section className="flex flex-col items-center gap-5 w-full h-auto pt-10">
      <motion.h1 variants={fadeIn("up", "spring", 0.5, 0.75)}>
        {team.header}
      </motion.h1>
      <div className={`grid grid-cols-${team.leads.length} justify-items-center ${team.leads.length > 1 ? 'gap-5' : ''} w-full pt-5`}>
        {team.leads.map((lead, index) => (
          <WrappedLeadProfile key={index} size={team.leads.length} index={index} profile={lead} />
        ))}
      </div>
      <div className="">
        {team.members.map((member, index) => (
          <WrappedMemberProfile key={index} size={team.members.length} index={index} profile={member} />
        ))}
      </div>
      
    </section>
  )
}

const AllTeamsSections = () => {
  return (
    <section className="flex flex-col items-center gap-5 w-full h-auto pt-10">
      {team.map((team, index) => (
        <TeamSection key={index} team={team} />
      ))}
    </section>
  )
}

export default AllTeamsSections
