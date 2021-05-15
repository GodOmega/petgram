import React, { useContext, useState } from "react";
import Context from "../context/Context";
import UserForm from "../components/UserForm/UserForm";
import useRegister from "../hooks/useRegister";
import useLogin from "../hooks/useLogin";
const NotRegisterUser = () => {
    const { userLogin } = useContext(Context);

    const [register, registerLoading, registererror] = useRegister();
    const [login, loginLoading, loginError] = useLogin();

    const onRegister = async ({ email, password }) => {
        const input = { email, password };
        const variables = { input };

        try {
            const {
                data: { signup },
            } = await register({ variables });

            userLogin(signup);
        } catch (error) {
            console.log(error);
        }
    };

    const onLogin = async ({ email, password }) => {
        const input = { email, password };
        const variables = { input };

        try {
            const {
                data: { login: token },
            } = await login({ variables });

            userLogin(token);
        } catch (error) {
            console.log(error);
        }
    };

    const errorRegisterMsg =
        registererror && "El usuario ya existe o credenciales erroneas";

    const errorLoginMsg =
        loginError && "El usuario no existe o credenciales incorrectas";

    return (
        <>
            <UserForm
                disabled={registerLoading}
                error={errorRegisterMsg}
                onSubmit={onRegister}
                title="Registrarse"
            />
            <UserForm
                disabled={loginLoading}
                error={errorLoginMsg}
                onSubmit={onLogin}
                title="Iniciar sesión"
            />
        </>
    );
};

export default NotRegisterUser;
