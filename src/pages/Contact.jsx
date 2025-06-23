import React from "react";
import ContactForm from "../components/ContactForm";
import GetInTouch from "../components/GetInTouch";
const Contact = () => {
  return (
    <>
      <div className="flex flex-col lg:top-[15rem] lg:flex-row gap-[5rem] justify-end w-full sm:h-[160vh] relative">
        <ContactForm/>
        <GetInTouch/>
      </div>
    </>
  );
};

export default Contact;
