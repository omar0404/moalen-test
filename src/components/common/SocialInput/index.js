import React, { useState, useEffect } from 'react';
import * as api from '../../../utils/api'

import Input from '../Input';

import { Container, Label, Error, SelectContainer } from './styles';

export default function SocialInputsComponent(props) {
    const [value, setValue] = useState(props.value || []);
    const [loading, setLoading] = useState(true);
    const [social, setSocial] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);

    const init = async () => {
        try {
            let socialAccounts = await api.get("/platforms");
            setSocial(socialAccounts.data.data);
            setValue(socialAccounts.data.data.map(item => ({platform_id: item.id, name: item.name, followers_count: null, account: ""})));
            if (props.onChange)
                props.onChange(socialAccounts.data.data.map(item => ({platform_id: item.id, name: item.name, followers_count: null, account: ""})));
            setLoading(false);
        } catch (error) {
           // //console.log(error)
        }
    };

    const onChange = (value) => {
        if (props.onChange)
            props.onChange(value);
    };

    const onValueChange = (i,key, newValue) => {
        let data = value.slice()
        value[i][key] = newValue;
        setValue(value);
        setUpdate(c => c + 1);
        if (props.onChange)
            props.onChange(value);
    };

    if(loading) {
        return <></>;
    }

    return <Container>
        <Label>{props.label}</Label>
        <SelectContainer>
            {value.map((item, i) => (
                <>
                    <Input label={item.name.toUpperCase()} value={value[i].account} onChange={e => {onValueChange(i, "account", e.target.value)}} />
                    <Input label={"عدد المتابعين"} type="number" value={value[i].followers_count} onChange={e => {onValueChange(i, "followers_count", e.target.value)}} />
                </>
            ))}
        </SelectContainer>
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
};