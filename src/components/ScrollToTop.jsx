import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Postavi skrol na vrh
  }, [pathname]);

  return null; // Komponenta ne renderuje ništa
};

export default ScrollToTop;