import React from "react";
import useGetPhotos from "../hooks/useGetPhotos";
import { ListOfPhotoCardsComponent } from "../components/ListOfPhotoCardsComponent/ListOfPhotoCards.jsx";

const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Server error</div>;
  }

  const { photos = [] } = data;

  return <ListOfPhotoCardsComponent photos={photos} />;
};

export default ListOfPhotoCards;
