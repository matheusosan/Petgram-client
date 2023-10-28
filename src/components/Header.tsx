import { cookies } from "next/headers";
import React from "react";
import * as I from "react-icons/bs";

const Header = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;

  const res = await fetch("http://localhost:3000/user", {
    credentials: "include",
    headers: {
      Authorization: "Bearer " + token,
      "x-auth-token": `${token}`,

      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);

  return (
    <header className="w-full h-[6vh] bg-pet-contrast flex items-center justify-center px-8">
      <h1>Olá {data.username}</h1>
      <I.BsFillPersonFill className="text-white text-3xl" />
    </header>
  );
};

export default Header;
