import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import {FaCaretDown } from "react-icons/fa";

import { Container, Select, Label, Error} from './styles';

export default function SelectComponent(props) {

    return <Container>
        <Label>{props.label}</Label>
        <Select {...props}>
            {props.options.map((o ,i) => (<option key={i} value={o.value}>{o.label}</option>))}
        </Select>
        <FaCaretDown />
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
};