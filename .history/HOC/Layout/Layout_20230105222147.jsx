import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { IoIosArrowDropup } from "react-icons/io";
import Footer from "../footer/footer";
import TopBar from "../../components/Navigation/TopBar/TopBar";
import SideBar from "../../components/Navigation/Sidebar/SideBar";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Inquiry from "./Inquiry";

function Layout({ children }) {
  const [Show, setShow] = useState();
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
  const [iconClick, setIconClick] = useState(false);

  return (
    <div className="">
      <TopBar iconClick={iconClick} setIconClick={setIconClick} />
      {iconClick ? (
        <SideBar iconClick={iconClick} setIconClick={setIconClick} />
      ) : (
        ""
      )}

      <MessengerCustomerChat
        pageId="1872050236414372"
        appId="966538807569641"
      />

      <div className="">{children}</div>
      <div>
        <Footer />
      </div>
      {/* send us inquiry */}
      <div className="flex">
        <button
          onClick={() => {
            setShow(true);
          }}
          className="capitalize bg-main text-white fixed top-80 bottom-50 right-0 border-none rounded-lg p-2"
        >
          send us inquiry
        </button>
        <Inquiry Show={Show} setShow={setShow} />
      </div>
    </div>
  );
}
Layout.proptypes = {
  children: PropTypes.any,
};
export default Layout;
