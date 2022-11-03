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
export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
`
export const Input = styled.textarea`
    padding: 16px 16px;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
    border-radius: 10px;
    //border-bottom: ${configs.colors.negativeLight} 1px solid;
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
    flex: 16;
`

export const Label = styled.label`
    font-size: 13px;
    line-height: 14px;
    font-weight: bold;
    color: ${configs.colors.primary};
    margin: auto;
    flex: 2;
    text-align: center;
    @media only screen and (max-width: 667px) {
        flex: 4;
    }
`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 8px 16px 0;
    white-space: pre;
    text-align: center;
`