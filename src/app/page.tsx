import { Suspense } from "react";

import Navigation from "@/components/Navigation";
import Posts from "@/components/Posts";
import CreatePost from "@/components/CreatePost";
import Skeleton from "@/components/@skeletons";
import Footer from "@/components/Footer";

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
