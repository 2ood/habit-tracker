import React from "react";

import * as Styled from "../styled/MainBodyFrame.style";

import LogItem from "./LogItem";

function LogViewContent(props){
    const log_jsons=props.jsons;

    let list = [];

    for (let key in log_jsons) {
        list.push(key);
        log_jsons[key].map((json)=>{
            list.push(<LogItem key={json.key} content={json.content} datetime={json.datetime} hobby ={json.hobby}/>);
            return 0;
        });
    }

    return (
        <Styled.LogView>
            {list}
        </Styled.LogView>
    );
} 

function CalendarViewContent(props){
    return (
        <div>This is CalendarViewContent</div>
    );
} 

export {LogViewContent, CalendarViewContent}