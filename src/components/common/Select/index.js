import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

import { Container, Select, Label, Error} from './styles';

export default function SelectComponent(props) {

    return <Container {...props}>
        {!!props.label && <Label>{props.label}</Label>}
        <Select {...props}>
            {props.options.map((o,index) => (<option key={o.label+index} value={o.value}>{o.label}</option>))}
        </Select>
        <MdKeyboardArrowDown />
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
};