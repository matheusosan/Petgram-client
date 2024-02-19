import React from "react";
import Image from "next/image";
import FollowButton from "../FollowButton";
import profile from "../../../public/profile.png";
import { getAuthenticatedUser, getUserPosts } from "@/actions";

const ProfileBio = async ({ id }: { id: string }) => {
  const user = await getUserPosts(id);
  const authenticatedUser = await getAuthenticatedUser();

  return (
    <div className="flex justify-between lg:justify-center items-center border-b border-b-slate-300 w-full md:w-[940px] md:h-[270px] md:gap-24 py-4 px-4 md:px-12">
      <div className="flex flex-col items-center">
        <Image
          src={profile}
          height={500}
          width={500}
          className="rounded-full h-20 w-20 md:h-48 md:w-48"
          alt={`Imagem de perfil do usuário`}
        />
      </div>
      <div className="flex flex-col items-center gap-6 lg:gap-12">
        <div className="flex items-center gap-4">
          <h2 className="text-sm md:text-lg text-white">{user?.username}</h2>
          {authenticatedUser.id !== user?.id && (
            <>
              <FollowButton
                authenticatedUserId={authenticatedUser.id}
                profileUserId={user!.id}
              />
            </>
          )}
        </div>
        <div className="flex gap-2 lg:gap-4">
          <h2 className="text-white text-sm lg:text-base text-center">
            {user?.posts?.length || "0"} <br />
            Postagens
          </h2>
          <h2 className="text-white text-sm lg:text-base text-center">
            {user?.followedBy?.length || "0"} <br />
            Seguidores
          </h2>
          <h2 className="text-white text-sm lg:text-base text-center">
            {user?.following?.length || "0"} <br />
            Seguindo
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileBio;
