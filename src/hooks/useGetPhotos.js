import { useQuery, gql } from "@apollo/client";

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const useGetPhotos = (categoryId) => {
  return useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });
};

export default useGetPhotos;
