import { gql, useQuery } from "@apollo/client";
const useGetSinglePhoto = (id) => {
  const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
      photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `;

  return useQuery(GET_SINGLE_PHOTO, { variables: { id } });
};

export default useGetSinglePhoto;
