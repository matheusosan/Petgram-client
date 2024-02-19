"use client";

import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { MdOutlineLogout } from "react-icons/md";

const LogoutButton = () => {
  const { onLogout } = useAuth();

  return (
    <button className="flex lg:gap-2 text-white" onClick={() => onLogout()}>
      <MdOutlineLogout className="h-6 w-6" />
      <p className="hidden lg:block">Sair</p>
    </button>
  );
};

export default LogoutButton;
