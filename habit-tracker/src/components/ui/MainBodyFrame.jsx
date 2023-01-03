import React, {useState} from "react";
import {Container, Column, Context, LogViewWrapper, ControlPanelWrapper, ControllerWrapper} from "./StyledComponents";

import LogItem from "./LogItem";

function LogViewContent(props){
    const log_jsons =props.content;    

    return (
        <LogViewWrapper>
            {log_jsons.map(json =>(<LogItem key={json.key} content={json.content} />))}
        </LogViewWrapper>
    );
} 

function CalendarViewContent(props){
    return (
        <div>This is CalendarViewContent</div>
    );
} 

function MainBody(props) {
    const [isLogView, setIsLogView ] = useState(true);
    let log_jsons = [
        {key: 1, content :"log1"},
        {key: 2, content :"log2"}
    ];

    function handleSelect(evt){
        console.log();
        setIsLogView(evt.target.value === "logview");
    }

    return (
        <Container>
            <Column>
            </Column>
            <Context>
                <ControlPanelWrapper>
                    <h1>Logs</h1>
                    <ControllerWrapper>
                        <select onChange={handleSelect}>
                            <option value="logview">list</option>
                            <option value="calendar">calendar</option>
                        </select>
                        <button onClick={()=>{}}>New Log</button>
                    </ControllerWrapper>
                </ControlPanelWrapper>
                {isLogView?<LogViewContent content={log_jsons}/>:<CalendarViewContent content={log_jsons}/>}
            </Context>
            <Column>
            </Column>
        </Container>
    );
}

export default MainBody;

/*
//former legacy code of MainBody
const [isLogView, setIsLogView ] = useState(true);
    const content_log = useRef(<LogViewContent />);
    const content_calendar = useRef(<CalendarViewContent />);
    let content_inside = useRef(content_log.current);
    
    function handleButton(){
        console.log(`원래 islogview : ${isLogView}`)
        setIsLogView(!isLogView);
        content_inside.current = isLogView? content_log.current:content_calendar.current;
    }

    return (
        <Container>
            <Column>
            </Column>
            <Context>
                <button onClick={handleButton}>Click</button>
               {content_inside.current}
            </Context>
            <Column>
            </Column>
        </Container>
    );

*/
