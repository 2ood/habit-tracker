import styled from "styled-components";

//common
const Page = styled.div`
    width : 100%;
    height : 100%;
    min-width : 100vw;
    min-height : 100vh;
    display : inline-block;
    position : flex;
    flex-direction : column;
`;
//Topbar
const Topbar = styled.div`
    display : inline-flex;
    height : 60px;
    background-color : var(--theme-primary-color);
    color : var(--theme-secondary-color);
    width : 100%;
    justify-content : center;
    align-items : center;
`;
export {Page, Topbar};