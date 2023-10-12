import { useModalStore } from "@/state/modal-state";
import { useEffect } from "react";

export const useModal = () => {
  const { isModalOpen } = useModalStore();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return {
    isModalOpen,
  };
};
