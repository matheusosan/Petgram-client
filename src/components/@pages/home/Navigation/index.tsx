import React from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { getAuthenticatedUser } from "@/actions";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Navigation = async () => {
  const user = await getAuthenticatedUser();

  return (
    <header className="fixed flex items-center justify-evenly lg:justify-start lg:items-start w-full lg:w-[15%] gap-8 lg:flex-col h-[10vh] lg:h-screen px-6 lg:px-8 md:py-32 z-50 bg-[#000000] border-r border-gray-700/50">
      <Link className="flex items-center gap-2 text-white" href="/">
        <AiFillHome className="h-6 w-6" />
        <p className="hidden lg:block">Página Inicial</p>
      </Link>

      <SearchInput />

      <div className="flex lg:flex-col items-center justify-center gap-2 lg:gap-8 lg:items-start">
        <Link className="flex gap-2 text-white " href={`${String(user.id)}`}>
          <BsFillPersonFill className="h-6 w-6" />
          <p className="hidden lg:block">Perfil</p>
        </Link>
        {user && <LogoutButton />}
      </div>
    </header>
  );
};

export default Navigation;
