import styled from 'styled-components';

import configs from '../../../configs'

export const Card = styled.div`
	border-radius: 24px;
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 14px;
	position: relative;

	cursor: pointer;
	transition: all 0.5s ease;

	border: #fff 2px solid;
	.add-button {
		display: none;
	}
	&:hover {
		border: #edbb42 2px solid;
		.add-button {
			display: flex;
		}
	}
	overflow: hidden;
`
export const TermBox = styled.div `
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
`
export const Title = styled.div`
    color: ${configs.colors.primary};
    font-size: 20px;
    font-weight: 800;
    font-family: 'MediumFont';
    text-align: right;
    margin: 0 0 0px;
`

export const CardContent = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
`

export const ModalContent = styled.div`
    
    h5 , p ,ul  {
        margin : 2px 0;
    }
    h4 {
        margin : 4px 0 4px 12px;
        background-color : #eeeef2;
        padding: 2px 10px 6px;
    }
    h5{
        font-weifgt: bold:
        margin-left: 5px;
    }
    ul , p{
        font-size: 12px;
    }
    
`
export const ItemsBox = styled.div`
    ul , p{
        font-weifgt: bold:
        display: inline-block;
        margin-left: 5px;
    }
    span{
        font-size: 12px;
        display: inline-block;
    }
`

