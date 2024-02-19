import React from "react";

const HomePostsSkeleton = ({ arrayLength }: { arrayLength: number }) => {
  return (
    <>
      <div className="flex w-full h-full lg:w-[85%] lg:ml-[15%] flex-col items-center justify-center my-24 gap-4">
        {[...Array(arrayLength)].map((_, index) => (
          <div key={index} className="flex flex-col gap-4 w-full md:w-2/4 pb-6">
            <div className="flex items-center pl-1 ">
              <div className="skeleton !rounded-full h-8 w-8 md:h-[25px] md:w-[25px]" />
              <div className="ml-2 skeleton rounded-xl h-4 w-24" />
            </div>
            <div className="skeleton !rounded-none w-full h-[400px] md:h-[540px] md:w-[960px] " />
            <div className="skeleton h-2 w-32 " />

            <div className="skeleton h-2 w-64 " />

            <div className="skeleton h-2 w-20 " />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePostsSkeleton;
