import React from 'react';

import { Container, Input, Label, Error} from './styles';

export default function Checkbox (props) {

    return <Container>
        <Label value={!!props.value}><Input type="checkbox" placeholder={"أدخل " + props.label} {...props} checked={!!props.value} /> {props.label}</Label>
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
};