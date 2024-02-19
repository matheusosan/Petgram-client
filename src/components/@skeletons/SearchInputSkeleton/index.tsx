import React from "react";

const SearchInputSkeleton = () => {
  const skeletonUsers = Array.from({ length: 5 }).map((_, index) => ({
    id: index,
    username: "Username",
  }));

  return (
    <div className="absolute top-full lg:static flex flex-col justify-center items-start w-full min-h-0 h-auto bg-[#000000] gap-2 shadow-md z-50">
      <ul>
        {skeletonUsers.map((user) => (
          <li
            key={user.id}
            className="flex items-center w-full py-4 px-3 gap-2 cursor-pointer border-b border-gray-700/50"
          >
            <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            <div className="w-32 h-4 bg-gray-500 rounded-md"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInputSkeleton;
