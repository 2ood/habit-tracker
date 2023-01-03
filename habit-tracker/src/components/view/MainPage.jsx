import React from "react";

import Topbar from "../ui/Topbar";
import MainBodyFrame from "../ui/MainBodyFrame";
import {PageWrapper} from "../ui/StyledComponents";

function MainPage(props) {
    return (
        <PageWrapper>
            <Topbar />
            <MainBodyFrame/>
        </PageWrapper>
    );
}

export default MainPage;