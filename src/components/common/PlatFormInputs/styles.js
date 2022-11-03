import styled from 'styled-components';

import configs from '../../../configs'

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    //align-items: center;
    margin: 0 0 24px;
    position: relative;
	@media only screen and (max-width: 667px) {
        flex-direction: column;
    }

    
`
export const Label = styled.label`
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
    color: ${configs.colors.primary};
    flex: 2;
    text-align: center;
    @media only screen and (max-width: 667px) {
        margin-bottom: 12px;
    }
`
export const ContainerBox = styled.div`
    flex: 16;

    @media only screen and (max-width: 667px) {
        flex: 18;
    }

`
export const PlatFormsContainer = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 16px;
	column-gap: 16px;
	width:100%;

	@media only screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}

	@media only screen and (max-width: 667px) {
		//width: 90%;
        margin-rght: 10px;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}
`

export const IconBox = styled.div`
    /* display: flex;
    flex-direction: row; */
    margin-bottom: 10px;
    align-items: center;
    padding : 5px 10px;
    text-align: center;
    
`
export const ImageBox = styled.div`
    display: inline-block;
    width: 20%;
    text-align: center;
    vertical-align: middle;
    
`
export const StyledIcon = styled.div`
    display: inline-block;
    width: 20%;
    text-align: center;
    svg {
		font-size: 52px;
        color: ${props => props.color};
        vertical-align: middle;
    }
`
export const IconInput = styled.input`
    padding: 2px 8px;
    box-sizing: border-box;
    border: 1px solid #a9a9a9;
    text-align: center;
    font-size: 10px;
    border-radius: 5px;
    display: inline-block;
    //width: 35%;
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

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    &[type=number] {
        -moz-appearance:textfield; /* Firefox */
}
    
`

export const Input = styled.input`
    padding: 2px 8px;
    box-sizing: border-box;
    border: 1px solid #a9a9a9;
    text-align: center;
    font-size: 10px;
    border-radius: 5px;
    /* display: inline-block;
    width: 35%; */
    margin: 10px 20px 20px;
    flex: 5;
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
export const  PlatFormBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    background: #fff;
    min-height: 240px;
    padding 30px 0;
    border: none;
    border-radius: 15px;
    height: 480px;
`
export const AddsTypesBox = styled.div`
    margin : 20px 10px;
    min-height: 200px;
`
export const AddBox = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
    padding : .5px 15px;
    margin-bottom: 5px;

    IconInput {
        flex: 5
    }
`
export const AddType = styled.div`
    min-width: 150px;
    background: #a9a9a9;
   // display: inline-block;
    margin-right: 10px;
    padding: 1px 5px;
    border-radius: 5px;
    text-align: center;
    flex: 5;
    
    p {
        font-size: 10px;
        color: ${configs.colors.primary};
        margin: 0;
        font-weight: 600;
        margin-bottom: 4px;
    }

    `

    export const PersentageContainer = styled.div`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding : 5px 2%;
        text-align: center;
    `
    export const InlineLabel = styled.div `
        font-size: 14px;
        line-height: 14px;
        font-weight: bold;
        color: ${configs.colors.primary};
        text-align: center;
    `
    export const PersentageBox = styled.div`
        flex: 5;

        input , span {
            width : 40px;
            height: 25px;
            border : 1 px solid #000;
            margin : 10px;
            text-align: center;
            padding : 0 2px 3px;

        }

        span {
            font-weight: 700;
            color : ${configs.colors.primary};
        }

    `
    export const PlatfomText = styled.p`
        text-align: center;
        font-weight: 600;
        color : ${configs.colors.primary};
    `