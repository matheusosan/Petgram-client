"use client";
import React from "react";
import { useDeletePost } from "./hooks/useDeletePost";

interface Props {
  id: string;
  children: React.ReactNode;
}

const DeletePostButton = ({ id, children }: Props) => {
  const { deletePost } = useDeletePost();

  return (
    <button
      className="absolute bottom-2 right-2 z-40 bg-black/75 rounded-full p-2"
      onClick={() => deletePost(id)}
    >
      {children}
    </button>
  );
};

export default DeletePostButton;
