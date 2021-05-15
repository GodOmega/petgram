import React from "react";

import { GlobalStyle } from "../styles/GlobalStyles";
import { Logo } from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Logo />
            {children}
            <Navbar />
        </>
    );
};

export default Layout;
