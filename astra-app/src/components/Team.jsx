import { Hero, ProjectLead, SubteamLeads, AllTeamsSections, ProjectAdvisor, Sponsors } from './team_sections';
import { Footer } from '../components';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollAndHighlight } from '../utils/scrollAndHighlight';

const Team = () => {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.hash.replace('#', '');
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    scrollAndHighlight({ query, targetId });
    window.history.replaceState({}, '', window.location.pathname + window.location.hash);
  }, [location]);

  return (
    <>
      <div id="team-hero" />
      <div className="relative w-full mt-31">
        <Hero />
        <ProjectLead />
        <SubteamLeads />
        <AllTeamsSections />
        <ProjectAdvisor />
        <Sponsors />
        <Footer />
      </div>
    </>
  )
}

export default Team
