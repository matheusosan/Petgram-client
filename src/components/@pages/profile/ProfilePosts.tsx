import React from "react";
import Image from "next/image";
import { getUserPosts } from "@/actions";
import { decode_token } from "@/utils/decodeToken";
import { FiTrash } from "react-icons/fi";

import DeletePostButton from "./DeletePostButton";

const ProfilePosts = async ({ id }: { id: string }) => {
  const user = await getUserPosts(id);
  const { tokenUserId } = await decode_token();

  return (
    <>
      {!user?.posts.length && (
        <div className="flex items-center justify-center">
          <h1 className="text-2xl text-center text-white md:mt-12">
            Não possui postagens.
          </h1>
        </div>
      )}

      <div className="grid grid-cols-3 w-full lg:w-auto gap-[1px] md:gap-4">
        {user &&
          user.posts.map((post) => (
            <div
              key={post.id}
              className="relative w-[120px] md:w-[300px] aspect-square md:hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={post.photoUrl}
                alt={`Foto com a descrição ${post.description}`}
                className="aspect-square "
                fill
              />
              {tokenUserId === user.id && (
                <DeletePostButton id={String(post.id)}>
                  <FiTrash className="h-6 w-6 text-red-600" />
                </DeletePostButton>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default ProfilePosts;
