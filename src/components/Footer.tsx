import React from "react";
import * as I from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center fixed h-[6vh] bottom-0 w-full bg-[#121212]">
      <button>
        <I.BsPlus className="text-3xl text-white" />
      </button>
    </footer>
  );
};

export default Footer;
