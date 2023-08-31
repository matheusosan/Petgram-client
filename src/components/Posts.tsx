import React from "react";
import { mockData } from "@/mock/post";
import Image from "next/image";
import * as I from "react-icons/bs";

const Posts = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {mockData.map((post) => (
        <div key={post.id} className="mb-4">
          <div className="flex items-center gap-2 bg-[#121212] py-2 pl-1">
            <I.BsFillPersonFill className="text-white h-[25px] w-[25px]" />
            <p className="text-white text-sm">matheusosan</p>
          </div>
          <div className="h-auto w-full">
            <Image
              width={480}
              height={920}
              src={post.imageUrl}
              alt={post.description}
              className="w-full aspect-auto bg-center"
            />
          </div>
          <div className="flex flex-col pl-1 py-3 gap-2">
            <button>
              <I.BsFillHeartFill className="text-white" />
            </button>
            <p className="font-bold text-sm text-white">matheusosan</p>
            <h2 className="text-sm text-white">{post.description}</h2>
            <p className="text-xs text-gray-400">Há 2 dias</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Posts;
