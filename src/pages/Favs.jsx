import React from "react";
import GetFavorites from "../containers/GetFavorites";
import SeoComponent from "../components/SeoComponent";
const Favs = () => {
    return (
        <>
            <SeoComponent
                title="Tus favoritos ❤"
                subtitle="Encuentra en un segundo fotos de tus animales favoritos"
            />
            <h1>Favoritos </h1>
            <GetFavorites />
        </>
    );
};

export default Favs;
