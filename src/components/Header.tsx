import React from "react";
import * as I from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full h-[6vh] bg-pet-contrast flex items-center justify-between px-8">
      <I.BsFillPersonFill className="text-white text-3xl" />
      <I.BsPlus className="text-white text-3xl" />
    </header>
  );
};

export default Header;
