import React from "react";

const ProfilePostsSkeleton = ({ arrayLength }: { arrayLength: number }) => {
  return (
    <>
      <div className="grid grid-cols-3 w-auto gap-1 md:gap-4">
        {[...Array(arrayLength)].map((_, index) => (
          <div
            key={index}
            className="skeleton !rounded-none w-[120px] h-[120px] md:w-[300px] md:h-[300px]"
          />
        ))}
      </div>
    </>
  );
};

export default ProfilePostsSkeleton;
