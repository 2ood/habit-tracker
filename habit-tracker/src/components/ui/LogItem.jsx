import React from "react";

import * as Styled from "../styled/LogItem.style";


function LogItem(props) {
    function handleLogClick(){

    }

    return (
        <Styled.LogItem onClick={handleLogClick}>
            <Styled.LogEmoticon>
            {props.hobby.emoji}
            </Styled.LogEmoticon>
            <Styled.LogDetails>
                <h2>{props.content.title}</h2>
                <small>{props.content.desc}</small>
            </Styled.LogDetails>
        </Styled.LogItem>
    );

}

export default LogItem;