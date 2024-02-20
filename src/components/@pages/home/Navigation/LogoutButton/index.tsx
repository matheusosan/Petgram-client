"use client";

import React from "react";
import { useLogout } from "./hooks/useLogout";
import { MdOutlineLogout } from "react-icons/md";

const LogoutButton = () => {
  const { onLogout } = useLogout();

  return (
    <button className="flex lg:gap-2 text-white" onClick={() => onLogout()}>
      <MdOutlineLogout className="h-6 w-6" />
      <p className="hidden lg:block">Sair</p>
    </button>
  );
};

export default LogoutButton;
