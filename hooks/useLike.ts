import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import useLoginModal from "./useLoginModal";

const useLike = ({ postId, userId }: { postId: string, userId?: string }) => {
  const currentUser: any = {};
  const fetchedPost: any = {};
  const mutateFetchedPost = {};
  const mutateFetchedPosts = {};

  const loginModal = useLoginModal();

  const hasLiked = useMemo(() => {
    const list = fetchedPost?.likedIds || [];

    return list.includes(currentUser?.id);
  }, [fetchedPost, currentUser]);

  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (hasLiked) {
        request = () => axios.delete('/api/like', { data: { postId } });
      } else {
        request = () => axios.post('/api/like', { postId });
      }

      await request();


      toast.success('Success');
    } catch (error) {
      toast.error('Something went wrong');
    }
  }, [currentUser, hasLiked, postId, mutateFetchedPosts, mutateFetchedPost, loginModal]);

  return {
    hasLiked,
    toggleLike,
  }
}

export default useLike;
