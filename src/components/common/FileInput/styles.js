import styled from 'styled-components';
import configs from '../../../configs'

export const Input = styled.input`
    width: 0;
    height: 0;
    overflow: hidden;
`

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 0 24px;
`

export const LabelContainer = styled.label`
    padding: 16px 16px;
    box-sizing: border-box;
    border: none;
    font-size: 14px;

    ${props => !props.noBorder && `border-bottom: ${configs.colors.negativeLight} 1px solid;`}

    &:focus {
        outline: none;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    background: white;
    

    svg {
        margin: 0 0px 0 16px;
		font-size: 20px;
		color: #edbb42;
    }
`

export const FileName = styled.span`
    font-size: 12px;
    color: ${configs.colors.negative};
`


export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 8px 16px 0;
    white-space: pre;
`