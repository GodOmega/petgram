import React from "react";
import useInputValue from "../../hooks/useInputValue";
import { TitleForm, Form, Input, Error } from "./styles";
import SubmitButton from "../SubmitButton/SubmitButton";

const UserForm = ({ onSubmit, title, error, disabled }) => {
    const email = useInputValue("");
    const password = useInputValue("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            email: email.value,
            password: password.value,
        });
    };

    return (
        <>
            {error && <Error>{error}</Error>}
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <TitleForm>{title}</TitleForm>
                <Input
                    disabled={disabled}
                    type="text"
                    placeholder="Email"
                    {...email}
                />
                <Input
                    disabled={disabled}
                    type="password"
                    placeholder="Password"
                    {...password}
                />
                <SubmitButton disabled={disabled}>
                    {disabled ? "Cargando..." : title}
                </SubmitButton>
            </Form>
        </>
    );
};

export default UserForm;
