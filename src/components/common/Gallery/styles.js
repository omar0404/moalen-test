import React from 'react'
import styled from 'styled-components';
import configs from '../../../configs'

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 0 24px;
`
export const InputContainer = styled.div`
    width : 100%;
    display: flex;
    flex-direction: row;
`
export const Label = styled.label`
    font-size: 13px;
    font-weight: bold;
    color: ${configs.colors.primary};
    flex: 2;
    text-align: center;
    @media only screen and (max-width: 667px) {
        flex: 4;
    }
`

export const Input = styled.input`
    width: 0;
    height: 0;
    overflow: hidden;
    

`
export const ContainerBox = styled.div`
    flex: 16;

`
export const GalleryContainer = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	//grid-template-rows: repeat(3, 1fr);
	gap: 16px;
	column-gap: 16px;
	width:100%;
   // 

	@media only screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
		//grid-template-rows: repeat(3, 1fr);
	}

	@media only screen and (max-width: 667px) {
		width: 100%;
		grid-template-columns: repeat(1, 1fr);
		//grid-template-rows: repeat(6, 1fr);
	}
`

export const LabelContainer = styled.label`
    //flex: 4;
    padding: 16px 16px;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
    border-radius: 10px;
    position: relative;
    min-height : 200px;
    //margin-left : 10px;

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
        bottom: 23%;
        right: 48%
    }

    @media only screen and (max-width: 667px) {
        svg {
            right: 51%
        }
    }
`

export const ImageBox = styled.div`
    width: 90%;
    height: 90%;
    display : block;
    margin: auto ;
    //position: relative;
    img {
        border-radius: 10px;
        margin : 10px;
    }
`

export const FileName = styled.span`
    font-size: 13px;
    font-weight: bold;
    padding : 2px 15px 5px;
    color: #fff;
    background: ${configs.colors.primary};
    position : absolute;
    bottom: 5%;
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