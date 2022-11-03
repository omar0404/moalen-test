import React from 'react'
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

export const Img = styled.div`
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50px;
    margin: 24px 0;
    border-radius: 24px;
    width: 100px;
    border: ${configs.colors.negativeLight} 1px solid;
    border-radius: 24px;
    background-color: rgba(0, 0, 0, 0.1);
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