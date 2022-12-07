import React, { useState, useEffect } from 'react';
import { RiAddCircleLine, } from "react-icons/ri";

import { Container, ItemContainer, DeleteIconAnchor, ActionsContainer, AnswerAddButton, InputContainer, AnswerInputContainer, Input, Label, Error, AddButton, DeleteIcon } from './styles';

export default function QuestionsInput(props) {
    let initialValue = [];
    for (let i = 0; i < props.min; i++) {
        initialValue.push({ label: '', answers: [{0: "", 1: ""}, {0: "", 1: ""}], type: 'multiple' });
    }
    const [data, setData] = useState(props.value || initialValue);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        setData(props.value || initialValue);
    }, [props.value]);

    const add = () => {
        if (props.max > data.length) {
            data.push({ label: '', answers: [{0: "", 1: ""}, {0: "", 1: ""}], type: 'multiple' });
            setData(data);
            setUpdate(c => c + 1);
        }
    };

    const remove = (i) => {
        if (props.min < data.length) {
            data.splice(i, 1);
            setData(data);
            setUpdate(c => c + 1);
        }
    };

    const onChange = (i, key, value) => {
        data[i][key] = value;
        setData(data);
        setUpdate(c => c + 1);
        if (props.onChange)
            props.onChange(data);
    };

    const addAnswer = (i) => {
        data[i].answers.push({0: "", 1: ""});
        setData(data);
        setUpdate(c => c + 1);
    };

    const removeAnswer = (i, j) => {
        data[i].answers.splice(j, 1);
        setData(data);
        setUpdate(c => c + 1);
    };

    const onAnswerChange = (i, j, z, value) => {
        data[i].answers[j][z] = value;
        setData(data);
        setUpdate(c => c + 1);
        if (props.onChange)
            props.onChange(data);
    };

    return <Container>
        <Label>{props.label}</Label>
        {data.map((item, i) => (
            <ItemContainer>
                <InputContainer><Input autoSuggest={true} onChange={e => { onChange(i, 'label', e.target.value) }} value={data[i].label} placeholder={"أدخل " + props.singleLabel} />{props.min - 1 < i && <DeleteIconAnchor><DeleteIcon onClick={() => { remove(i) }} /></DeleteIconAnchor>}</InputContainer>
                {
                    data[i].answers.map((answer, j) => (
                        <AnswerInputContainer>
                            <Input onChange={e => { onAnswerChange(i, j, 0, e.target.value) }} value={data[i].answers[j][0]} placeholder={"Enter Answer Value " + (j + 1)} />{1 < j && <DeleteIconAnchor><DeleteIcon onClick={() => { removeAnswer(i, j) }} /></DeleteIconAnchor>}
                            <Input onChange={e => { onAnswerChange(i, j, 1, e.target.value) }} value={data[i].answers[j][1]} placeholder={"Enter Answer Label " + (j + 1)} />{1 < j && <DeleteIconAnchor><DeleteIcon onClick={() => { removeAnswer(i, j) }} /></DeleteIconAnchor>}
                        </AnswerInputContainer>
                    ))
                }
                <ActionsContainer>
                    <div>
                        <AnswerAddButton onClick={() => { addAnswer(i) }}><RiAddCircleLine /> Add Option</AnswerAddButton>
                    </div>
                </ActionsContainer>
            </ItemContainer>
        ))}
        {!!props.error && <Error>{props.error}</Error>}
            <AddButton onClick={add}><RiAddCircleLine /> Add Question</AddButton>
    </Container>
};