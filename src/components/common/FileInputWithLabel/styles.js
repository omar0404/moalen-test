import React from 'react'
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
    width : 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
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
        flex : 4;
    }
`

export const Input = styled.input`
    width: 0;
    height: 0;
    overflow: hidden;
    

`
export const ImageBox = styled.div`
    width: 100%;
    min-height : 220px;
    margin: auto;
    position: relative;
`

export const LabelContainer = styled.label`
    flex: 14;
    padding: 16px 16px;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
    border-radius: 10px;
    position:relative;
    min-height: 100px;

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
        position : absolute;
        top: 50%;
        right: 43%
    }
    /* span {
        position : absolute;
        top: 50%;
        right: 42%
    } */
    @media only screen and (max-width: 667px) {
        svg {
            right: 48%
        }
    }
`

export const FileName = styled.span`
    font-size: 13px;
    font-weight: bold;
    padding : 2px 15px 5px;
    color: #fff;
    background: ${configs.colors.primary};
    position : absolute;
    top: 60%;
    right: 40%
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

export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 8px 16px 0;
    white-space: pre;
    text-align: center;
`