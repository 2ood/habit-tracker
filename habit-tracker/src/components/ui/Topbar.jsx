import React from "react";
import styled from "styled-components";

const TopbarWrapper = styled.div`
    display : inline-flex;
    height : 60px;
    background-color : var(--theme-primary-color);
    color : var(--theme-secondary-color);
    width : 100%;
    justify-content : center;
    align-items : center;
`;


function TopBar(props) {

    return (
        <TopbarWrapper>
            <p>This is Top Bar.</p>
        </TopbarWrapper>
    );
}

export default TopBar;