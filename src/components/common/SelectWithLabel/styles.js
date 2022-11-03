import styled from 'styled-components';

import configs from '../../../configs'

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: inline-flex;
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
export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
`

export const Select = styled.select`
    padding: 16px 16px;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
    line-height: 22px;
    border-radius: 10px;
    //border-bottom: ${configs.colors.negativeLight} 1px solid;
    &:focus {
        outline: none;
    }
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    color: ${configs.colors.primary};


    ::-webkit-input-placeholder {
        color: ${configs.colors.primary} ;
    }
    
    :-ms-input-placeholder {
        color: ${configs.colors.primary};
    }
    
    ::placeholder {
        color: ${configs.colors.primary};
    }
    flex: 16;
`

export const Label = styled.label`
    font-size: 14px;
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
    margin: 0 24px 0;
    white-space: pre;
    text-align: center
`