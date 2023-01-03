import React from "react";

import { AuthMainForm, AuthPageWrapper } from "../ui/StyledComponents";

function LoginPage(props) {
    return  (
        <AuthPageWrapper>
            <AuthMainForm>
                <p>This is Login Page.</p>
            </AuthMainForm>
        </AuthPageWrapper>
    );
}

function RegisterPage(props) {
    return (
        <AuthPageWrapper>
            <AuthMainForm>
                <p>This is Register Page.</p>
            </AuthMainForm>
        </AuthPageWrapper>
    );
}

export {LoginPage, RegisterPage}