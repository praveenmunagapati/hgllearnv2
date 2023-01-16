import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { IoIosArrowDropup } from "react-icons/io";
import Footer from "../footer/footer";
import TopBar from "../../components/Navigation/TopBar/TopBar";
import SideBar from "../../components/Navigation/Sidebar/SideBar";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const schema = yup.object().shape({
  FullName: yup.string().required("fullname is required"),
  email: yup.string().required("email is required"),
  phone: yup
    .string()
    .required("contact number is required")
    .max(10, "invalid number")
    .min(10, "invalid number"),
});

function Layout({ children }) {
  const FormFields = [
    {
      name: "FullName",
      type: "text",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "phone",
      type: "text",
    },
  ];

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
      {/* sender inquiry  */}
      <div>
        <div className="border-2 border-black ">
          <Formik
            initialValues={{
              FullName: "",
              email: "",
              phone: "",
            }}
            validationSchema={schema}
            onSubmit={(val) => {
              console.log(val);
            }}
          >
            {({ handleSubmit }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  {FormFields.map((val, i) => {
                    return (
                      <div key={i}>
                        <label htmlFor={val.name}>{val.name}</label>
                        <Field
                          type={val.type}
                          placeholder="enter your fullname"
                          name={val.name}
                        />
                        <ErrorMessage
                          name={val.name}
                          component={"div"}
                          classname="text-red-600"
                        />
                      </div>
                    );
                  })}
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
Layout.proptypes = {
  children: PropTypes.any,
};
export default Layout;
