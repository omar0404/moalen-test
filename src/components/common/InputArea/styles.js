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
`

export const Input = styled.textarea`
    padding: 16px 16px;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
    border-bottom: ${configs.colors.negativeLight} 1px solid;
    &:focus {
        outline: none;
    }

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
    margin: 8px 16px 0;
    white-space: pre;
`