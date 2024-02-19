import React from "react";

const HeaderSkeleton = () => {
  return (
    <header className="fixed flex items-center justify-between lg:justify-start lg:items-start w-full lg:w-[15%] gap-8 lg:flex-col h-[10vh] lg:h-screen px-6 lg:px-8 md:py-32 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 text-transparent">
        <div className="w-6 lg:w-32 h-6 skeleton rounded-full"></div>
      </div>

      {/* Search Input Skeleton */}
      <div className="flex items-center gap-2">
        <div className="w-32 lg:w-32 h-6 skeleton rounded-lg"></div>
      </div>

      {/* Profile Link and Logout Button */}
      <div className="flex items-center justify-center lg:flex-col gap-2 lg:gap-8">
        <div className="w-6 lg:w-32 h-6 skeleton rounded-full"></div>
        <div className="w-6 lg:w-32 h-6 skeleton rounded-lg"></div>
      </div>
    </header>
  );
};

export default HeaderSkeleton;
