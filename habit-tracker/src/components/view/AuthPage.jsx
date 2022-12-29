import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    display : inline-block;
`;

const MainForm = styled.div`
    width : 300px;
    height : 300px;
`;

function LoginPage(props) {
    return  (
        <Wrapper>
            <MainForm>
                <p>This is Login Page.</p>
            </MainForm>
        </Wrapper>
    );
}

function RegisterPage(props) {
    return (
        <Wrapper>
            <MainForm>
                <p>This is Register Page.</p>
            </MainForm>
        </Wrapper>
    );
}

export {LoginPage, RegisterPage}