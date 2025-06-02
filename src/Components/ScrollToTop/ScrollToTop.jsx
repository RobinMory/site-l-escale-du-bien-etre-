import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Remet le scroll en haut
    window.scrollTo(0, 0);
  }, [location]); // Lorsque location change (changement de route)

  return null;
};

export default ScrollToTop;
