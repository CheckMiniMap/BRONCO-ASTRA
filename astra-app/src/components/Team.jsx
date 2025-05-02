import { Hero, ProjectLead, SubteamLeads, AllTeamsSections, ProjectAdvisor, Sponsors } from './team_sections';
import { Footer } from '../components';

const Team = () => {
  return (
    <div className="relative w-full mt-31">
      <Hero />
      <ProjectLead />
      <SubteamLeads />
      <AllTeamsSections />
      <ProjectAdvisor />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default Team
