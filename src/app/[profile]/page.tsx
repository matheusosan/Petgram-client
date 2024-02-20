import React, { Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/@pages/home/Navigation";
import ProfileContent from "@/components/@pages/profile";
import Skeleton from "@/components/@skeletons";
import { getAuthenticatedUser, getUserPosts } from "@/actions";
import { IProfile } from "@/@types";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getAuthenticatedUser();
  return {
    title: "Perfil | " + meta.username,
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const profiles = await fetch("http://localhost:3000/user/all", {
    cache: "no-store",
  }).then((res) => res.json());

  return profiles.map((profile: IProfile) => ({
    id: String(profile.id),
  }));
}

const Profile = async ({ params }: { params: { profile: string } }) => {
  const user = await getUserPosts(params.profile);

  return (
    <main className="flex flex-col w-full min-h-screen h-auto">
      <Suspense fallback={<Skeleton.Header />}>
        <Header />
      </Suspense>
      <div className="flex w-full h-full lg:w-[85%] lg:ml-[15%] flex-col items-center justify-center gap-10 py-24 lg:py-20">
        <Suspense fallback={<Skeleton.ProfileBio />}>
          <ProfileContent.Bio id={String(user?.id)} />
        </Suspense>

        <Suspense fallback={<Skeleton.ProfilePosts arrayLength={3} />}>
          <ProfileContent.Posts id={String(user?.id)} />
        </Suspense>
      </div>
    </main>
  );
};

export default Profile;
