import React from "react";

const ProfileBioSkeleton = () => {
  return (
    <div className="flex justify-between lg:justify-center items-center border-b border-b-slate-300 w-full md:w-[940px] md:h-[270px] md:gap-24 py-4 px-4 md:px-12">
      <div className="flex flex-col items-center">
        <div className="skeleton rounded-full h-20 w-20 md:h-48 md:w-48" />
      </div>
      <div className="flex flex-col items-center gap-6 lg:gap-12">
        <div className="flex items-center gap-4">
          <div className="skeleton w-20 h-4" />
          <div className="skeleton w-20 h-4" />
        </div>
        <div className="flex gap-2 lg:gap-4">
          <div className="skeleton w-20 h-16" />
          <div className="skeleton w-20 h-16" />
          <div className="skeleton w-20 h-16" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBioSkeleton;
