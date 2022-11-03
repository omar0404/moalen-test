import React, { useState, useEffect } from 'react';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

import { Container, Select, Label, Error, SelectTag, SelectContainer, RadioTag } from './styles';

export default function RadioComponent(props) {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    const onChange = (value) => {
        if (props.onChange)
            props.onChange(value);
    };

    return <Container invert={props.invert}>
        {!!props.label && <Label invert={props.invert}>{props.label}</Label>}
        <SelectContainer invert={props.invert}>
            {props.options.map(o => {
                return <SelectTag key={'select'+o.value} vertical={props.vertical} invert={props.invert} active={o.value == value} onClick={() => { onChange(o.value) }}>
                    <RadioTag key={'radio'+o.value} invert={props.invert} active={o.value == value} />
                    <div>{o.label}</div>
                </SelectTag>
            })}
        </SelectContainer>
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
};