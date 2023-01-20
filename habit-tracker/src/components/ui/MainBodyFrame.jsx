import React, {useState} from "react";

import * as Styled from "../styled/MainBodyFrame.style";
import * as ViewStyle from "./ViewStyle";

import log_jsons from "../test.json";


const viewStyle = {
    log : "log",
    calendar : "calendar"
};

function MainBody(props) {
    const [isLogView, setIsLogView ] = useState(true);

    function handleSelect(evt){
        console.log();
        setIsLogView(evt.target.value === viewStyle.log);
    }

    return (
        <Styled.Container>
            <Styled.Column>
            </Styled.Column>
            <Styled.Context>
                <Styled.ControlPanel>
                    <h1>Logs</h1>
                    <Styled.Controller>
                        <Styled.Select onClick={handleSelect}>
                            <option value={viewStyle.log}>{viewStyle.log} view</option>
                            <option value={viewStyle.calendar}>{viewStyle.calendar} view</option>
                        </Styled.Select> 
                        <Styled.Button onClick={()=>{}}>New Log</Styled.Button>
                    </Styled.Controller>
                </Styled.ControlPanel>
                {isLogView?<ViewStyle.LogViewContent jsons={log_jsons}/>:<ViewStyle.CalendarViewContent jsons={log_jsons}/>}
            </Styled.Context>
            <Styled.Column>
            </Styled.Column>
        </Styled.Container>
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
