import React from 'react'
import styled from 'styled-components';
import configs from '../../../configs'

export const Container = styled.div`
    box-sizing: border-box;
    width: 20%;
    border-radius: 50%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    /* margin: 0 0 24px;
    margin-top: -9%; */
    @media only screen and (max-width: 667px) {
        width: 100%;
        margin-top: -6%;
    }
`
export const InputContainer = styled.div`
    /* width : 100%;
    display: flex;
    flex-direction: row;
    align-items: center; */
    /* position: absolute;
    top: 15%;
    left: 6%; */
    display: flex;
    flex-direction: row;
    align-items: center; 
    @media only screen and (max-width: 667px) {  
        width: 100%;      
    }
`
export const Label = styled.label`
    font-size: 13px;
    line-height: 14px;
    font-weight: bold;
    color: ${configs.colors.primary};
    margin: auto;
    flex: 2;
    text-align: center;
    width: 100%;
    visibility: hidden;

    @media only screen and (max-width: 667px) {  
        flex: 4;  
        visibility: visible;
    }

`
export const ImageBox = styled.label `
    text-align : center;
    width: 150px;
    max-height: 125px !important;
    background: #fff;
    border-radius: 50%;
    img {
        border-radius: 50%; 
        margin: 25px auto 0;
        background: #fff;
    }
    .avatarImg {
        max-height: 100px;
    }

    @media only screen and (max-width: 667px) {
        width: 100%;

        img {
            border-radius: 15px;
            background: #fff;
            max-height: 125px !important;
        }
    }
`
export const Input = styled.input`
    width: 0;
    height: 0;
    overflow: hidden;
    

`

export const LabelContainer = styled.label`
    flex: 14;
    padding: 16px 16px;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
    border-radius: 50%;
    position:relative;
    min-height: 100px;
    margin-top: -40%;

    ${props => !props.noBorder && `border-bottom: ${configs.colors.negativeLight} 1px solid;`}

    &:focus {
        outline: none;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    //background: white;
    

    svg {
        margin: 0 0px 0 16px;
		font-size: 20px;
		color: ${configs.colors.primary};
        position : absolute;
        bottom: 10%;
        right: 37%;

    }
    /* span {
        position : absolute;
        top: 50%;
        right: 42%
    } */

    @media only screen and (max-width: 667px) {
        width: 100%;
        max-height: 125px;
        overflow: hidden;
        border-radius: 15px;
        margin-top: 20px !important;
        margin-bottom: 20px;
        padding: 0;
    

        svg {
            bottom: 25%;
            right:43%
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