import { gql, useMutation } from "@apollo/client";

const useToggleLike = () => {
  const LIKE_PHOTO = gql`
    mutation likePhoto($input: LikePhoto!) {
      likePhoto(input: $input) {
        id
        liked
        likes
      }
    }
  `;

  const [toggleLike] = useMutation(LIKE_PHOTO);

  return [toggleLike];
};

export default useToggleLike;
