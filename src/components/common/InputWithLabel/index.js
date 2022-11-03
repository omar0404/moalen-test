import React, {useRef} from 'react';

import { Container, Input, Label, InputContainer, Error } from './styles';

export default function InputWithLabelComponent(props) {
    const inputRef = useRef();

    const onClick = () => {
        if(!!inputRef.current)
            inputRef.current.focus()
    }

    return <Container className="input-container">
        <InputContainer onClick={onClick}>
        { props.label && <Label>{props.label}</Label>}
            {props.icon}
            <Input type={props.type} ref={inputRef} {...props} variant="standard" pattern={false} />
        </InputContainer>
        {!!props.error && <Error className='errorMeddage'>{props.error}</Error>}
    </Container>
};