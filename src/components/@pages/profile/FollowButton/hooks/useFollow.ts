import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Follower {
  id: number;
}

interface Props {
  profileUserId: number;
  authenticatedUserId: number;
}

const useFollow = ({ profileUserId, authenticatedUserId }: Props) => {
  const router = useRouter();
  const [isFollowing, setIsFollowing] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const checkFollowStatus = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/followers/${profileUserId}`,
          {
            credentials: "include",
          }
        );
        const data = await response.json();
        setIsFollowing(
          data.followedBy.some(
            (follower: Follower) => follower.id === authenticatedUserId
          )
        );
      } catch (error) {
        toast.error(`Ocorreu um erro: ${error}`);
      }
    };

    checkFollowStatus();
  }, [authenticatedUserId, profileUserId]);

  const toggleFollow = async () => {
    try {
      if (isFollowing) {
        await unfollowUser(profileUserId);
        setIsFollowing(false);
      } else {
        await followUser(profileUserId);
        setIsFollowing(true);
      }
    } catch (error) {
      toast.error(`Ocorreu um erro: ${error}`);
    }
  };

  const followUser = async (profileUserId: number) => {
    try {
      await fetch(`http://localhost:3000/follow/${profileUserId}`, {
        method: "PUT",
        credentials: "include",
      });
      router.refresh();
    } catch (error) {
      toast.error(`Ocorreu um erro: ${error}`);
    }
  };

  const unfollowUser = async (profileUserId: number) => {
    try {
      await fetch(`http://localhost:3000/unfollow/${profileUserId}`, {
        method: "PUT",
        credentials: "include",
      });
      router.refresh();
    } catch (error) {
      toast.error(`Ocorreu um erro: ${error}`);
    }
  };

  return {
    isFollowing,
    toggleFollow,
  };
};

export default useFollow;
