"use client";

import React from "react";
import useFollow from "@/hooks/useFollow";

interface Props {
  profileUserId: number;
  authenticatedUserId: number;
}

const FollowButton = ({ profileUserId, authenticatedUserId }: Props) => {
  const { isFollowing, toggleFollow } = useFollow({
    profileUserId,
    authenticatedUserId,
  });

  return (
    <button
      onClick={() => toggleFollow()}
      className="text-sm lg:text-lg text-white"
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
