import React from "react";

import {Container, Column, Context} from "./StyledComponents";

function MainBody(props) {
    return (
        <Container>
            <Column>
            </Column>
            <Context>
                {props.object};
            </Context>
            <Column>
            </Column>
        </Container>
    );
}

export default MainBody;
