import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/actions";
import { formatarData } from "@/utils/formatDate";
import * as I from "react-icons/bs";

const Posts = async () => {
  const posts = await getPosts();

  return (
    <main className="flex w-full h-full lg:w-[85%] lg:ml-[15%] flex-col items-center justify-center my-24 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-full lg:w-1/2 pb-6 flex flex-col items-center border-b border-gray-700/50"
        >
          <div className="flex w-full items-center py-2 pl-1">
            <I.BsFillPersonFill className="text-white h-[25px] w-[25px]" />
            <Link
              href={`/${post.author.id}`}
              className="text-white text-sm ml-2"
            >
              {post.author.username}
            </Link>
          </div>

          <div className="flex items-center justify-center w-full h-[400px] relative md:w-full md:h-[540px] ">
            <Image
              src={post.photoUrl}
              alt={post.description!}
              quality={100}
              fill
              className="aspect-auto object-fill bg-cover bg-center "
              blurDataURL={post.photoUrl}
            />
          </div>
          <div className="flex flex-col w-full pl-1 py-3 gap-2">
            <Link
              href={`/${post.author.id}`}
              className="font-bold text-sm text-white"
            >
              {post.author.username}
            </Link>
            <h2 className="text-sm text-white">{post.description}</h2>
            <p className="text-xs text-gray-400">
              {formatarData(post.createdAt)}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Posts;
