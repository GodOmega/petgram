import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FavButton from "../FavButton/FavButton";

import { ImgWrapper, Img, Article } from "./styles";

import useNearScreen from "../../hooks/useNearScreen";
import useToggleLike from "../../hooks/useToggleLike.js";

const DEFAULT_IMG =
    "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, liked, src = DEFAULT_IMG }) => {
    const [show, element] = useNearScreen();
    const key = `like-${id}`;
    const [toggleLike] = useToggleLike();

    const handleFavClick = () => {
        toggleLike({ variables: { input: { id: id } } });
    };

    return (
        <Article ref={element}>
            {show && (
                <>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} alt="Photo" />
                        </ImgWrapper>
                    </Link>
                    <FavButton
                        liked={liked}
                        likes={likes}
                        onClick={handleFavClick}
                    />
                </>
            )}
        </Article>
    );
};

PhotoCard.propTypes = {
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    likes: (props, propName, ComponentName) => {
        const propValue = props[propName];

        if (propValue === undefined) {
            return new Error(`${propName} value must be defined`);
        }

        if (propValue < 0) {
            return new Error(`${propName} value must be greater than 0`);
        }
    },
};
