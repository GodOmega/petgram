import React from "react";
import { useParams } from "react-router-dom";

import ListOfPhotoCards from "../containers/ListOfPhotoCards.js";
import { ListOfCategories } from "../components/ListOfCategories/ListOfCategories";
import SeoComponent from "../components/SeoComponent";

const HomePage = () => {
    const { id: categoryId } = useParams();
    return (
        <>
            <SeoComponent
                title="Tu app de fotos favoritas"
                subtitle="Encuentra en un segundo fotos de tus animales favoritos"
            />
            <ListOfCategories />
            {categoryId ? (
                <ListOfPhotoCards categoryId={categoryId} />
            ) : (
                <ListOfPhotoCards categoryId={null} />
            )}
        </>
    );
};

const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.match.params.id === props.match.params.id;
});

export default Home;
