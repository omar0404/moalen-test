import React from 'react';

import { Container, Input, Label, Error, InputContainer} from './styles';

export default function InputAreaWithLabel(props) {

    return <Container>
        <InputContainer>
            { props.label && <Label>{props.label}</Label>}
            <Input {...props}  />
        </InputContainer>
        {!!props.error && <Error className='errorMeddage'>{props.error}</Error>}
    </Container>
};