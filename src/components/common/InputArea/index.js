import React from 'react';

import { Container, Input, Label, Error} from './styles';

export default function InputArea(props) {

    return <Container>
        {!!props.value && props.value !="" && <Label>{props.label}</Label>}
        <Input placeholder={props.label} {...props} placeholderColor="#a9a9a9" />
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
};