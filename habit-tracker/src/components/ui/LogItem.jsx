import React from "react";

import {LogItemWrapper} from "./StyledComponents";


function LogItem(props) {

    function handleLogClick(){

    }

    return (
        <LogItemWrapper onClick={handleLogClick}>
            Hello {props.content}
        </LogItemWrapper>
    );

}

export default LogItem;