import styled from 'styled-components';

import configs from '../../../configs'

export const Container = styled.div`
    box-sizing: border-box;
    width: 80%;
    display: inline-flex;;
    flex-direction: column;
    align-items: stretch;
    margin: 0 0 24px;
    position: relative;
    @media only screen and (max-width: 667px) {
        width: 100%;
    }
`

export const Input = styled.input`
    padding: 16px 10px;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
    border-radius: 10px;
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
    flex: 11;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0;
    flex : 3;
    position: relative;
    svg {
        margin: 0 0px 0 16px;
		font-size: 20px;
		color: #edbb42;
    }
`

export const Label = styled.label`
    font-size: 13px;
    font-weight: bold;
    line-height: 14px;
    color: ${configs.colors.primary};
    margin: auto;
    flex: 2;
    text-align: center;
    @media only screen and (max-width: 667px) {
        flex: 4;
    }
`

export const Error = styled.p`
    flex: 4;
    color: red;
    font-size: 12px;
    margin: 8px 16px 0;
    white-space: pre;
    text-align: center;
    
    /* position: absolute;
    bottom : 1px ;
    right : 0; */
`