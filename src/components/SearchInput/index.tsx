"use client";

import React from "react";
import Link from "next/link";
import Skeleton from "../@skeletons";
import useSearchInput from "@/hooks/useSearchInput";
import { FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const SearchInput = () => {
  const {
    inputValue,
    error,
    isLoading,
    showUserList,
    users,
    setInputValue,
    handleInputChange,
    setShowUserList,
  } = useSearchInput();

  return (
    <div className="relative flex items-center lg:justify-start justify-center lg:h-auto w-full flex-col">
      <div className="flex relative justify-center w-auto h-auto items-center gap-2">
        <FaSearch className=" text-white h-4 w-4 lg:w-6 lg:h-6" />
        <input
          type="text"
          className="w-full text-left focus:outline-none lg:w-48 text-white bg-inherit placeholder:text-slate-300 lg:placeholder:text-white border-b border-transparent lg:focus:border-pet-contrast z-50"
          placeholder="Buscar usuários"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowUserList(true)}
        />
        {inputValue.length >= 1 && (
          <button
            className="absolute right-0 text-white z-50"
            onClick={() => setInputValue("")}
          >
            x
          </button>
        )}
      </div>
      {error && (
        <div className="absolute lg:static top-full w-full py-4 px-4 text-center bg-[#000000] text-slate-300">
          {error}
        </div>
      )}
      {isLoading && <Skeleton.SearchInput />}
      {showUserList && (
        <div className="absolute top-full lg:static flex flex-col justify-center items-start w-full bg-[#000000] min-h-0 h-auto gap-2 shadow-md z-40">
          {users?.map((user) => (
            <Link
              href={`/${user.id}`}
              key={user.id}
              className="flex w-full py-4 px-3 gap-2 cursor-pointer border-b border-gray-700/50 z-50"
            >
              <BsFillPersonFill className="h-6 w-6 text-white" />
              <h2 className="text-white text-sm">{user.username}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
