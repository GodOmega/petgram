import React, { useContext } from "react";
import Context from "../context/Context";
import SubmitButton from "../components/SubmitButton/SubmitButton";
const User = () => {
    const { userLogout } = useContext(Context);
    return (
        <>
            <h1>User</h1>
            <SubmitButton disabled={false} onClick={userLogout}>
                Cerrar sesión
            </SubmitButton>
        </>
    );
};

export default User;
