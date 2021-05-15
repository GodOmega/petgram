import React from "react";
import { Helmet } from "react-helmet";
function SeoComponent({ title, subtitle }) {
    return (
        <Helmet>
            {title && <title>Petgram 🐶 | {title}</title>}
            {subtitle && <meta name="description" content={subtitle} />}
        </Helmet>
    );
}

export default SeoComponent;
