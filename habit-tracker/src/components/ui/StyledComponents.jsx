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
    display :grid;
    grid-template : 1fr 3fr 1fr / 1fr;
    position : relative;
`;

const Column = styled.div`
    display : inline-flex;
`;

const Context = styled.div`
    display :inline-block;
`;

export {PageWrapper, Container, Column, Context }
