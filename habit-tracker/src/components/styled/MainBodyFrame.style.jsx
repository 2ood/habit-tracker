import styled from "styled-components";

//MainBodyFWrapperrame
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
    background-color : var(--theme-white);
`;

const Context = styled.div`
    display :inline-block;
    background-color : var(--theme-back-color);
    padding : 40px;
`;
const Controller = styled.div`
    display : inline-flex;
    gap : 10px;
`;

const ControlPanel = styled.div`
    display : inline-flex;
    min-height : 20px;
    width : 100%;
    justify-content : space-between;
    margin-bottom : 20px;
`;

//LogView
const LogView = styled.div`
    display : flex;
    flex-direction : column;
    gap : 30px;
`;


const Select = styled.select`
        padding : 10px;
        border-radius : 10px;
    `;

const Button = styled.button`
    padding : 10px;
    color : var(--theme-secondary-color);
    background-color : var(--theme-primary-color);
    outline : none;
    border : none;
    border-radius : 10px;
`;



export { Container, Column, Context, LogView,Controller,ControlPanel}
export {Select, Button}