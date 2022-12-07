import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

import { Container ,InputContainer, Select, Label, Error} from './styles';

export default function SelectWithLabel(props) {

    const [value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    return <Container {...props}>
        <InputContainer>
            {!!props.label && <Label>{props.label}</Label>}
            <Select {...props} >
                {props.options.map(o => (<option key={o.label} value={o.value} >{o.label}</option>))}
            </Select>
            <MdKeyboardArrowDown />
        </InputContainer>
        {!props.saveFlag && !!props.error && <Error className='errorMeddage'>{props.error}</Error>}
    </Container>
};