import React from "react";
import useGetFavorites from "../hooks/useGetFavorites.js";
import ListOfFavs from "../components/ListOfFavs/ListOfFavs";

const GetFavorites = () => {
  const { loading, data, error } = useGetFavorites();

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  const { favs = [] } = data;

  return (
    <>
      <ListOfFavs favs={favs} />
    </>
  );
};

export default GetFavorites;
