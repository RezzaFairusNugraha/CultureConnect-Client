import React from "react";
import HeaderContact from "./ComponentContact/HeaderContact";
import Help from "./ComponentContact/Help";
import FromContact from "./ComponentContact/FromContact";

const ContactPage = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-background to-[#EAE0C8]">
        <HeaderContact />
        <Help />
        <FromContact />
      </div>
    </>
  );
};

export default ContactPage;
