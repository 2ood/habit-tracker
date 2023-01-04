import React from "react";

import {LogItemWrapper, LogEmoticonWrapper, LogDetailsWrapper} from "./StyledComponents";


function LogItem(props) {
    function handleLogClick(){

    }

    return (
        <LogItemWrapper onClick={handleLogClick}>
            <LogEmoticonWrapper>
            {props.hobby.emoji}
            </LogEmoticonWrapper>
            <LogDetailsWrapper>
                <h2>{props.content.title}</h2>
                <small>{props.content.desc}</small>
            </LogDetailsWrapper>
        </LogItemWrapper>
    );

}

export default LogItem;