import styled from "styled-components";

const PageWrapper = styled.div`
    width : 100%;
    height : 100%;
    min-width : 100vw;
    min-height : 100vh;
    display : inline-block;
    position : flex;
    flex-direction : column;
`;

const Container = styled.div`
    display :inline-grid;
    grid-template : 1fr / 1fr 3fr 1fr;
    position : relative;
    min-height : 90vw;
    width : 100%;
`;

const Column = styled.div`
    display : inline-flex;
    padding : 40px;
`;

const Context = styled.div`
    display :inline-block;
    background-color : var(--theme-secondary-color);
    padding : 40px;
`;

export {PageWrapper, Container, Column, Context }
