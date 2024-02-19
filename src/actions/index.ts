"use server";

import { IPosts, IProfile, IAuthenticatedUser, IFollowers } from "@/@types";
import { getJwt } from "@/utils/getJwt";

export const getPosts = async () => {
  const { token } = await getJwt();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch("http://localhost:3000/post", {
    cache: "no-store",
    credentials: "include",
    headers: {
      Cookie: `access_token=${token}`,
    },
  });

  const data: IPosts[] = await res.json();
  return data;
};

export const getUserPosts = async (id: string) => {
  const { token } = await getJwt();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const res = await fetch(`http://localhost:3000/user/posts/${id}`, {
      cache: "no-store",
      credentials: "include",

      headers: {
        Cookie: `access_token=${token}`,
      },
    });

    const data: IProfile = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAuthenticatedUser = async () => {
  const { token } = await getJwt();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch("http://localhost:3000/user/authenticated", {
    credentials: "include",
    cache: "no-store",
    headers: {
      Cookie: `access_token=${token}`,
    },
  });

  const data: IAuthenticatedUser = await response.json();

  return data;
};

export const getUserFollowers = async (id: string) => {
  const { token } = await getJwt();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const res = await fetch(`http://localhost:3000/followers/${id}`, {
      cache: "no-store",
      credentials: "include",

      headers: {
        Cookie: `access_token=${token}`,
      },
    });

    const data: IFollowers = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
