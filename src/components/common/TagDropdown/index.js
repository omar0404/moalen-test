import React, { useEffect, useState } from 'react';
import { FiX } from "react-icons/fi";

import { Container, SelectTag, SelectContainer, Label, Error } from './styles';

import Select from '../Select'

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

    const add = (v) => {
        let valueToAdd = props.options.find(e => (e.value == v));
        let values = value.slice();
        values.push(valueToAdd);
        if (props.onChange)
            props.onChange(values);
    };

    const remove = (i) => {
        let values = value.slice();
        values.splice(i, 1);
        if (props.onChange)
            props.onChange(values);
    };

    return <Container>
        <Label>{props.label}</Label>
        <SelectContainer>
            {!!value && value.map((option, i) => {
                if(!option || !option.label)
                    return;
                return <SelectTag active={true} >{option.label} <FiX onClick={()=>{remove(i)}} /></SelectTag>
            })}
            <Select value={""} onChange={e => {e.preventDefault(); add(e.target.value)}} options={props.options} />
        </SelectContainer>
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
};