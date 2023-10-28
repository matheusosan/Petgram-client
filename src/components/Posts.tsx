import React from "react";
import Image from "next/image";
import * as I from "react-icons/bs";
import { ApiData } from "@/types/api.type";

const Posts = async () => {
  const response = await fetch("http://localhost:3000/post");
  const data = await response.json();

  return (
    <main className="flex h-full flex-col items-center justify-center md:my-6">
      {data.map((post: ApiData) => (
        <div key={post.id} className="w-full md:w-2/4 pb-6 flex flex-col">
          <div className="flex items-center bg-[#121212] py-2 pl-1">
            <I.BsFillPersonFill className="text-white h-[25px] w-[25px]" />
            <p className="text-white text-sm ml-2">matheusosan</p>
          </div>
          <Image
            width={1920}
            height={1080}
            src={post.photoUrl}
            alt={post.description}
            quality={100}
            className="aspect-video md:aspect-video object-fill bg-center"
            priority={true}
          />
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
