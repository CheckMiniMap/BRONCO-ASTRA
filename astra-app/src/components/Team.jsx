import React from 'react';
import { Hero, ProjectLead, SubteamLeads, AllTeamsSections, ProjectAdvisor, Sponsors } from './team_sections';

const Team = () => {
  return (
    <div className="relative w-full mt-31">
      <Hero />
      <ProjectLead />
      <SubteamLeads />
      <AllTeamsSections />
      <ProjectAdvisor />
      <Sponsors />
    </div>
  )
}

export default Team
