import styled from 'styled-components';

import configs from '../../../configs'

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 52px 0 24px;
    position: relative;
    svg {
        position: absolute;
        left: 16px;
        top: 14px;
        bottom: 14px;
        font-size: 16px;
        color: white;
        z-index: 10;
    }
    
`

export const Select = styled.select`
    padding: 16px 16px;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
    line-height: 24px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 32px;
    color: white;
    &:focus {
        outline: none;
    }
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';

    ::-webkit-input-placeholder {
        color: #a9a9a9;
    }
    
    :-ms-input-placeholder {
        color: #a9a9a9;
    }
    
    ::placeholder {
        color: #a9a9a9;
    }
`

export const Label = styled.label`
    font-size: 14px;
    line-height: 14px;
    margin: 8px 0 0;
    color: white;
    position: absolute;
    top: -32px;
    right: 0;
`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 0 24px 0;
    white-space: pre;
`