import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IoIosArrowDropup } from "react-icons/io";
import Footer from "./footer/footer";
function Layout({ children }) {
  const [showButton, setShowButton] = useState(false);
  // The back-to-top button is hidden at the beginning
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <IoIosArrowDropup />
        </button>
      )}
      <div className="">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
Layout.proptypes = {
  children: PropTypes.any,
};
export default Layout;
