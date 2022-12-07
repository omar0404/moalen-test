import React, {useRef} from 'react';

import { Container, Input, Label, InputContainer, Error } from './styles';

export default function InputComponent(props) {
    const inputRef = useRef();

    const onClick = () => {
        if(!!inputRef.current)
            inputRef.current.focus()
    }

    return <Container className="input-container">
        {!!props.value && !props.hideLabel && props.value != "" && !!props.label && <Label>{props.label}</Label>}
        <InputContainer onClick={onClick}>
            {props.icon}
            <Input type={props.type} ref={inputRef} placeholder={props.label} {...props} variant="standard" pattern={false} />
        </InputContainer>
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
};