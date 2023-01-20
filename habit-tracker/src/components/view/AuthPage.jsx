import React from "react";

import * as Styled from "../styled/Auth.style";

function LoginPage(props) {
    return  (
        <Styled.AuthPage>
            <Styled.AuthMainForm>
            <p>This is Login Page.</p>
            </Styled.AuthMainForm>
        </Styled.AuthPage>
    );
}

function RegisterPage(props) {
    return (
        <Styled.AuthPage>
            <Styled.AuthMainForm>
            <h1>Register</h1>
            <input type="text"></input>
            <input type="password"></input>
            </Styled.AuthMainForm>
        </Styled.AuthPage>
    );
}

export {LoginPage, RegisterPage}