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
const ControllerWrapper = styled.div`
    display : inline-flex;
    gap : 10px;
`;

const ControlPanelWrapper = styled.div`
    display : inline-flex;
    min-height : 20px;
    width : 100%;
    justify-content : space-between;
    margin-bottom : 20px;
`;

//LogView
const LogViewWrapper = styled.div`
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

//AuthPage
const AuthPageWrapper = styled.div`
    width : 100%;
    height : 100%;
    display : inline-block;
`;

const AuthMainForm = styled.div`
    width : 300px;
    height : 300px;
`;

export {PageWrapper, Container, Column, Context, LogViewWrapper,ControllerWrapper,ControlPanelWrapper}
export {LogItemWrapper}
export {TopbarWrapper}
export {AuthPageWrapper, AuthMainForm}
