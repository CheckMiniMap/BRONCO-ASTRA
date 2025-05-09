import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);  

  // Scroll to top on initial load
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => {
      window.removeEventListener('beforeunload', () => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
    };
  }, []);

  return null;
};

export default ScrollToTop
