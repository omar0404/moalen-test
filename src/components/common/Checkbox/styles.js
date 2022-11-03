import styled from 'styled-components';
import configs from '../../../configs'

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 0 24px;
    position: relative;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const Input = styled.input`
    border: none

    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: transparent;
    margin: 0 0 0 16px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: none;
`

export const Label = styled.label`
    text-align: right;
    font-size: 14px;
    color: ${configs.colors.negative};
    padding: 0 40px 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    &:before {
        content: ' ';
        border: 1px solid ${configs.colors.primary};
        width: 16px;
        height: 16px;
        border-radius: 5px;
        position: absolute;
        right: 4px;
    }

    &:after {
        content: ' ';
        display: ${props => props.value ? 'block' : 'none'};
        background: ${configs.colors.primary};
        width: 14px;
        height: 14px;
        border-radius: 4px;
        position: absolute;
        right: 6px;
    }
`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 0 16px 0;
    white-space: pre;
`