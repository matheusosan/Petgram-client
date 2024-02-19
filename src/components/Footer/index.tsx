"use client";

import React from "react";
import { BsPlus } from "react-icons/bs";
import { useModalStore } from "@/state/modal-state";

const Footer = () => {
  const { openModal } = useModalStore();

  return (
    <footer className="flex items-center justify-center fixed h-[5vh] bottom-0 w-full bg-pet-contrast opacity-75 hover:opacity-100 transition-opacity z-50">
      <button onClick={() => openModal()}>
        <BsPlus className="text-3xl text-white" />
      </button>
    </footer>
  );
};

export default Footer;
