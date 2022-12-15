import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const [isFooterStyle, setIsFooterStyle] = useState(false);
  useEffect(() => {
    if (location.pathname === "/direction") {
      setIsFooterStyle(true);
    }
  }, [location]);

  return (
    <footer className={`footer ${isFooterStyle ? "direction-footer" : null}`}>
      © MultiRates — 2022
    </footer>
  );
};

export default Footer;
