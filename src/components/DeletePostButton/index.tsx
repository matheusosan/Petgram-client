"use client";
import React from "react";
import { useCreatePost } from "@/hooks/useHandlePosts";

const DeletePostButton = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { deletePost } = useCreatePost();

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
