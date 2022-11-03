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
    svg {
        position: absolute;
        left: 16px;
        top: 8px;
        bottom: 8px;
        font-size: 24px;
        color: ${props => props.active ? configs.colors.secondary : configs.colors.negativeLight} !important;
    }
    
`

export const Select = styled.select`
    padding: 16px 16px;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
    line-height: 22px;
    border-bottom: ${configs.colors.negativeLight} 1px solid;
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
    font-size: 9px;
    line-height: 14px;
    color: ${configs.colors.negative};
    margin: 0 16px 4px;
    position: absolute;
    top: 0;
    right: 0;
`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 0 24px 0;
    white-space: pre;
`