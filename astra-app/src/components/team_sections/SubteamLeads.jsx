import React from 'react'
import { CommonTitle } from '../team_sections'
import { team } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import { getElementYPosition } from "../../utils/common";

import { Highlight } from '../common';

const SubteamProfileCard = ({ index, profile }) => {
  return (
    <motion.div
      variants={fadeIn(index % 2 == 1 ? "left" : "right", "spring", index % 2 == 0 ? 0.4 : 0.7, 0.75)}
      id={profile.id}
    >
      <img src={profile.img} alt={profile.name} className={`w-full object-cover ${profile.object ? profile.object : 'object-[100%_20%]'} aspect-1-1`} />
      <h4 className="font-poppins text-[22px] font-semibold pt-2"><Highlight text={profile.name} /></h4>
      <div className="w-full">
        <div className="grid grid-cols-2 gap-1 w-full pt-2">
          {profile.titles.map((title, index) => (
            <div 
              key={index} 
              className="w-auto h-10 flex justify-center items-center bg-blue-900 hover:bg-blue-700 text-white font-medium lg:text-[16px] md:text-[12px] sm:text-[14px] text-[3.2vw] duration-300 ease-in-out cursor-pointer"
              onClick={() => {
                const element = document.getElementById(title.id);
                const topPos = getElementYPosition(element, 60);
                //const topPos = element.offsetTop;
      
                window.scrollTo({
                    top: topPos,
                    behavior: 'smooth'
                });
                // if (element) {
                //   element.scrollIntoView({ behavior: 'smooth' });
                //   //window.location.hash = `#${about.id}`;
                // }
              }}
            >
              <Highlight text={title.title} />
            </div>
          ))}
        </div>

        {profile.description.map((desc, index) => (
          <p key={index} className="pt-2"><span className="ml-5"/><Highlight text={desc} /></p>
        ))}
      </div>
    </motion.div>
    
  );
}

const SubteamLeads = () => {
  const WrappedSubteamProfileCard = SectionWrapper(SubteamProfileCard, '');

  return (
    <section className="flex flex-col items-center gap-5 w-full h-auto pt-10">
      <CommonTitle title="Subteam Leads" />
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-15 gap-12 w-full h-auto pt-2">
        {team.profiles.map((profile, index) => (
          <WrappedSubteamProfileCard key={index} index={index} profile={profile} />
        ))}
      </div>
    </section>
  )
}

export default SubteamLeads;
