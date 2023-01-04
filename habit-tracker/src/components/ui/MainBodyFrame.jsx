import React, {useState} from "react";
import {Container, Column, Context, LogViewWrapper, ControlPanelWrapper, ControllerWrapper} from "./StyledComponents";

import LogItem from "./LogItem";

const viewStyle = {
    log : "log",
    calendar : "calendar"
};

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
        <LogViewWrapper>
            {list}
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
    let log_jsons = {
        "2023-01-02" : [
            {   
                key: 1, 
                hobby : {
                    num : 1,
                    name : "guitar",
                    emoji : "🎸",
                },
                content :{
                    title : "Log1 Title",
                    desc : "Log1 desc",
                }
            },
            {
                key: 2, 
                hobby : {
                    num : 1,
                    name : "coffee",
                    emoji : "☕",
                },
                content :{
                    title : "Log2 Title",
                    desc : "Log2 desc",
                } 
            }
        ],
        "2023-01-01" :[
            {   
                key: 3, 
                hobby : {
                    num : 1,
                    name : "guitar",
                    emoji : "🎸",
                },
                content :{
                    title : "Log1 Title",
                    desc : "Log1 desc",
                }
            },
            {
                key: 4, 
                hobby : {
                    num : 1,
                    name : "coffee",
                    emoji : "☕",
                },
                content :{
                    title : "Log2 Title",
                    desc : "Log2 desc",
                }
            }
        ],
        "2022-12-31" : [{   
            key: 5, 
            hobby : {
                num : 1,
                name : "guitar",
                emoji : "🎸",
            },
            content :{
                title : "Log1 Title",
                desc : "Log1 desc",
            },
            datetime : '2023-01-02T14:51:00.000-07:00',
        },
        {
            key: 6, 
            hobby : {
                num : 1,
                name : "coffee",
                emoji : "☕",
            },
            content :{
                title : "Log2 Title",
                desc : "Log2 desc",
            },
            datetime : '2023-01-01T14:51:00.000-07:00',    
        },
        {
            key: 7, 
            hobby : {
                num : 3,
                name : "run",
                emoji : "🏃",
            },
            content :{
                title : "Log3 Title",
                desc : "Log3 desc",
            },
            datetime : '2023-01-01T14:51:00.000-07:00',    
        }]
    };

    function handleSelect(evt){
        console.log();
        setIsLogView(evt.target.value === viewStyle.log);
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
                            <option value={viewStyle.log}>{viewStyle.log} view</option>
                            <option value={viewStyle.calendar}>{viewStyle.calendar} view</option>
                        </select>
                        <button onClick={()=>{}}>New Log</button>
                    </ControllerWrapper>
                </ControlPanelWrapper>
                {isLogView?<LogViewContent jsons={log_jsons}/>:<CalendarViewContent jsons={log_jsons}/>}
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
