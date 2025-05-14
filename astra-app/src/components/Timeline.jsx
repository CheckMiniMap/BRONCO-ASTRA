import { TimelineSection } from './timeline_sections';
import { Footer } from '../components';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollAndHighlight } from '../utils/scrollAndHighlight';

const Timeline = () => {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.hash.replace('#', '');
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    scrollAndHighlight({ query, targetId });
    window.history.replaceState({}, '', window.location.pathname + window.location.hash);
  }, [location]);
  
  return (
    <div className="relative w-full mt-31">
      <TimelineSection />
      <Footer />
    </div>
  )
}

export default Timeline
