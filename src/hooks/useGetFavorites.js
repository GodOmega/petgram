import { useQuery, gql } from "@apollo/client";

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

const useGetFavorites = () => {
  return useQuery(GET_FAVS, {
    fetchPolicy: "cache-and-network",
  });
};

export default useGetFavorites;
