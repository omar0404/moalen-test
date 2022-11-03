import React from 'react';

import { Container, Input, Label, Error} from './styles';

export default function InputComponent(props) {

    return <Container>
        <Label>{props.label}</Label>
        <Input {...props} color={props.value} onChangeComplete={e =>{props.onChange(e.hex)}} />
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
};