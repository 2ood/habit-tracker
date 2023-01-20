import styled from "styled-components";

//common
const PageWrapper = styled.div`
    width : 100%;
    height : 100%;
    min-width : 100vw;
    min-height : 100vh;
    display : inline-block;
    position : flex;
    flex-direction : column;
`;

//MainBodyFrame
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

//Topbar
const TopbarWrapper = styled.div`
    display : inline-flex;
    height : 60px;
    background-color : var(--theme-primary-color);
    color : var(--theme-secondary-color);
    width : 100%;
    justify-content : center;
    align-items : center;
`;

//LogItem 
const LogItemWrapper = styled.div`
    background-color : var(--theme-white);
    display : inline-flex;
    width : 100%;
    color : var(--theme-black);
    padding : 20px;
    min-height : 100px;
    border-radius : 10px;
    border : 1px solid var(--theme-secondary-color);
`;

const LogEmoticonWrapper = styled.div`
    font-size : 50px;
    text-align : center;
`;

const LogDetailsWrapper = styled.div`
    display : inline-flex;
    flex-direction : column;
    margin-left : 10px;
`;


//AuthPage
const AuthPageWrapper = styled.div`
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

export {PageWrapper, Container, Column, Context, LogView,Controller,ControlPanel}
export {LogItemWrapper, LogEmoticonWrapper, LogDetailsWrapper}
export {TopbarWrapper}
export {AuthPageWrapper, AuthMainForm}
