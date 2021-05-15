import React from "react";
import { useParams } from "react-router-dom";
import PhotoCardWithQuery from "../containers/PhotoCardWithQuery";
import SeoComponent from "../components/SeoComponent";
const Detail = () => {
    const { id } = useParams();
    return (
        <>
            <SeoComponent
                title={`Fotografia #${id}🌟`}
                subtitle="Encuentra en un segundo fotos de tus animales favoritos"
            />
            <PhotoCardWithQuery photoId={id} />
        </>
    );
};

export default Detail;
