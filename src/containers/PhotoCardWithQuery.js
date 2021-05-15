import React from "react";
import { PhotoCard } from "../components/PhotoCard/PhotoCard";
import useGetSinglePhoto from "../hooks/useGetSinglePhoto";

const PhotoCardWithQuery = ({ photoId }) => {
  const { loading, error, data } = useGetSinglePhoto(photoId);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Server Error</div>;
  }

  const { photo = {} } = data;
  return <PhotoCard {...photo} />;
};

export default PhotoCardWithQuery;
