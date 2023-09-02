"use client";

import React from "react";
import { useModal } from "@/hooks/useModal";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const { isModalOpen } = useModal();

  return (
    <>
      {isModalOpen && (
        <div className="fixed flex flex-col items-center justify-between bg-[#121212] w-full h-full top-0 left-0 right-0">
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
