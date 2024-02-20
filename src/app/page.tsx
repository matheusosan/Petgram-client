import { Suspense } from "react";

import Navigation from "@/components/@pages/home/Navigation";
import Posts from "@/components/@pages/home/Posts";
import CreatePost from "@/components/@pages/home/CreatePost";
import Skeleton from "@/components/@skeletons";
import Footer from "@/components/@pages/home/Footer";

export default async function Home() {
  return (
    <main className="flex flex-col w-full lg:flex-row">
      <Suspense fallback={<Skeleton.Header />}>
        <Navigation />
      </Suspense>

      <Suspense fallback={<Skeleton.HomePosts arrayLength={2} />}>
        <Posts />
      </Suspense>

      <Footer />

      <CreatePost />
    </main>
  );
}
