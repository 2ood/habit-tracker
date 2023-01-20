import styled from "styled-components";

//AuthPage
const AuthPage = styled.div`
    top : 0;
    bottom : 0;
    right : 0;
    left : 0;
    display : flex;
    position : absolute;
    justify-content : center;
    align-items : center;
`;

const AuthMainForm = styled.div`
    width : 400px;
    height : 400px;
    background-color : var(--theme-secondary-color);
    color : var(--theme-primary-color);
    border-radius : 15px;
    padding : 30px;
`;

export {AuthPage, AuthMainForm}