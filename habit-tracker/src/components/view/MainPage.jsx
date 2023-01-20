import React from "react";

import Topbar from "../ui/Topbar";
import MainBodyFrame from "../ui/MainBodyFrame";
import * as Styled from "../styled/Common.style";

function MainPage(props) {
    return (
        <Styled.Page>
            <Topbar />
            <MainBodyFrame/>
        </Styled.Page>
    );
}

export default MainPage;