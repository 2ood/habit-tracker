import styled from "styled-components";

const LogItem = styled.div`
    background-color : var(--theme-white);
    display : inline-flex;
    width : 100%;
    color : var(--theme-black);
    padding : 20px;
    min-height : 100px;
    border-radius : 10px;
    border : 1px solid var(--theme-secondary-color);
`;

const LogEmoticon = styled.div`
    font-size : 50px;
    text-align : center;
`;

const LogDetails = styled.div`
    display : inline-flex;
    flex-direction : column;
    margin-left : 10px;
`;

export {LogItem, LogEmoticon, LogDetails}
