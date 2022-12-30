import React, {useEffect, useState, useRef} from "react";
import {Container, Column, Context} from "./StyledComponents";

import "./styles.css";

function LogViewContent(props){
    return (
        <div>This is LogViewContent</div>
    );
} 

function CalendarViewContent(props){
    return (
        <div>This is CalendarViewContent</div>
    );
} 

function MainBody(props) {
    const [isLogView, setIsLogView ] = useState(true);
    const content_log = useRef(<LogViewContent />);
    const content_calendar = useRef(<CalendarViewContent />);
    let content_inside = useRef(content_log.current);

    useEffect(()=>{
        content_inside.current = isLogView? content_log.current:content_calendar.current;
    },[isLogView]); 
    
    function handleButton(){
        setIsLogView(!isLogView);
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
}

export default MainBody;
