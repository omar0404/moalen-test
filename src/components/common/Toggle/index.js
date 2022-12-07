import React, { useEffect, useState } from 'react';

import { Container, Label, Error, ToggleContainer, Toggle } from './styles';

export default function ToggleComponent(props) {
    const [value, setValue] = useState(!!props.value);

    useEffect(() => {
        setValue(!!props.value);
    }, [props.value]);

    const onChange = (value) => {
        setValue(!!value);
        if(props.onChange) {
            props.onChange(!!value)
        }
    };

    return <Container noMargin={!!props.noMargin}>
        <Label noMargin={!!props.noMargin}>{props.label}</Label>
        <ToggleContainer noMargin={!!props.noMargin} onClick={()=>{onChange(!value)}} active={value}><Toggle active={value} /></ToggleContainer>
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
};