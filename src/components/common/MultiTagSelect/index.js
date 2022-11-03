import React, { useEffect, useState } from 'react';

import { Container, SelectTag, SelectContainer, Label, Error } from './styles';

export default (props) => {
    const [value, setValue] = useState(props.value || []);

    useEffect(() => {
        setValue(props.value || []);
    }, [props.value]);

    const onChange = (v) => {
        let values = value.slice();
        if(values.indexOf(v) != -1) {
            values.splice(values.indexOf(v), 1);
        } else {
            values.push(v);
        }
        if (props.onChange)
            props.onChange(values);
    };

    return <Container>
        <Label>{props.label}</Label>
        <SelectContainer>
            {!!props.options && props.options.map((option, i) => {
                return <SelectTag active={value.indexOf(option.value) != -1} onClick={() => { onChange(option.value) }}>{option.label}</SelectTag>
            })}
        </SelectContainer>
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
};