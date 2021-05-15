import React, { useState, useEffect } from "react";
import axios from "axios";

import { Category } from "../Category/Category";
import { List, Item } from "./styles";

function useCategorieData() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getCategories = async () => {
            setLoading(true);
            const { data } = await axios.get(
                "https://petgram-server-edsf8xpy2.now.sh/categories"
            );

            setCategories(data);
            setLoading(false);
        };

        getCategories();
    }, []);

    return { categories, loading };
}

const ListOfCategoriesComponent = () => {
    const { categories, loading } = useCategorieData();
    const [showFixed, setShowFixed] = useState(false);

    useEffect(() => {
        const onScroll = (e) => {
            const newShowFixed = window.scrollY > 100;
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        };

        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [showFixed]);

    const renderList = (fixed = false) => (
        <>
            <List className={fixed ? "fixed" : "not-fixed"}>
                {categories.map((category) => (
                    <Item key={category.id}>
                        <Category {...category} path={`/pet/${category.id}`} />
                    </Item>
                ))}
            </List>

            <List>
                {categories.map((category) => (
                    <Item key={category.id}>
                        <Category {...category} path={`/pet/${category.id}`} />
                    </Item>
                ))}
            </List>
        </>
    );
    if (loading) {
        return <div>Cargando...</div>;
    }
    return <>{renderList(showFixed)}</>;
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
