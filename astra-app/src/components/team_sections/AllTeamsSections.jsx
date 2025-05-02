import React, { useState, useEffect } from 'react';
import { team } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';

const LeadProfile = ({ size, index, profile }) => {
  return (
    <motion.div
      variants={fadeIn(index > size / 2 ? "left" : "right", "spring", index * 0.5, 0.75)}
      className="flex flex-col items-center "
    >
      <img src={profile.img} alt={profile.name} className={`w-65 rounded-full object-cover ${profile.object ? `object-${profile.object}` : 'object-[100%_20%]'} aspect-1-1`} />
      <h4 className="font-poppins text-[20px] font-semibold pt-2">{profile.name}</h4>
    </motion.div>
  );
}
const LeadsSection = ({ team }) => {
  const leadsStyle = "grid-cols-" + team.leads.length;

  return (
    <div className={`grid ${leadsStyle} justify-items-center ${team.leads.length > 1 ? 'gap-7 ' : ' '}w-auto`}>
      {team.leads.map((lead, index) => (
        <LeadProfile key={index} size={team.leads.length} index={index} profile={lead} />
      ))}
    </div>
  );
}

const MemberProfile = ({ size, index, profile }) => {
  const colSpan = 
    size == 5 ? "col-span-4" : 
    size == 3 ? "col-span-4 md:col-span-1" :
    "";
  const startCol =
    size == 5 && index == 3 ? "md:col-start-3" : 
    size == 5 && index == 4 ? "col-start-3 md:col-start-auto" :
    size == 3 && index == 2 ? "col-start-3 md:col-start-auto" :
    "";
  const colStyles = colSpan + " " + startCol;

  return (
    <motion.div
      variants={fadeIn(index >= size / 2 ? "left" : "right", "spring", index * 0.5, 0.75)}
      className={`flex flex-col items-center ${colStyles}`}
    >
      <img src={profile.img} alt={profile.name} className={`w-[45vw] h-[50vw] sm:w-55 sm:h-65 hexagon object-cover ${profile.object ? profile.object : 'object-[100%_20%]'}`} />
      <h4 className="text-[4vw] sm:text-[20px] pt-2">{profile.name}</h4>
    </motion.div>
  );
}
const MembersSection = ({ team }) => {
  const membersStyle = "grid-cols-" + team.members.length;
  const styles = 
    team.members.length == 5 ? 'grid-cols-8 md:grid-cols-12' : 
    team.members.length == 4 ? 'grid-cols-2 sm:grid-cols-2 xl:grid-cols-4' :
    team.members.length == 3 ? 'grid-cols-8 md:grid-cols-3' :
    membersStyle

  return (
    <div className={`grid ${styles} justify-items-center w-auto pt-5 ${team.members.length > 1 ? 'gap-3' : ''}`}>
      {team.members.map((member, index) => (
        <MemberProfile key={index} size={team.members.length} index={index} profile={member} />
      ))}
    </div>
  )
}

const ContentRow = ({ index, content }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Update viewportWidth on window resize
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  const isMobile = viewportWidth < 640; // Adjust the breakpoint as needed

  return (
    <motion.div
      variants={fadeIn(isMobile ? "left" : index % 2 === 0 ? "right" : "left", "spring", index * 0.5, 0.75)}
      className="grid grid-cols-1 sm:grid-cols-2 w-full gap-3 mt-5"
    >
      {isMobile ? (
        <>
          <motion.img src={content.img} alt={content.alt} className="w-full h-50 md:h-60 object-cover" />
          <motion.p key={index} className="text-base"><span className="ml-5"/>{content.text}</motion.p>
        </>
      ) : index % 2 === 0 ? (
        <>
          <motion.p key={index} className="text-base md:text-xl"><span className="ml-5"/>{content.text}</motion.p>
          <motion.img src={content.img} alt={content.alt} className="w-full h-50 object-cover" />
        </>
      ) : (
        <>
          <motion.img src={content.img} alt={content.alt} className="w-full h-50 object-cover" />
          <motion.p key={index} className="text-base md:text-xl"><span className="ml-5"/>{content.text}</motion.p>
        </>
      )}
    </motion.div>
  );
};
const ContentSection = ({ team }) => {
  return (
    <div className="w-full">
      {team.content.map((content, index) => (
        <ContentRow key={index} index={index} content={content} />
      ))}
    </div>
  )
}

const TeamSection = ({ team }) => {
  const WrappedLeadsSection = SectionWrapper(LeadsSection, '');
  const WrappedMembersSection = SectionWrapper(MembersSection, '');
  const WrappedContentSection = SectionWrapper(ContentSection, '');

  return (
    <section className="flex flex-col items-center w-full h-auto pt-10">
      <motion.h1 variants={fadeIn("up", "spring", 0.5, 0.75)} className="font-poppins text-5xl font-semibold">
        {team.header}
      </motion.h1>
      <WrappedLeadsSection team={team} />
      <WrappedMembersSection team={team} />
      <WrappedContentSection team={team} />
    </section>
  )
}

const AllTeamsSections = () => {
  return (
    <section className="flex flex-col items-center gap-5 w-full h-auto pt-10">
      {team.teams.map((team, index) => (
        <TeamSection key={index} team={team} />
      ))}
    </section>
  )
}

export default AllTeamsSections
