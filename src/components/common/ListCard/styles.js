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
	width: 100%;

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

export const CardContent = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
`

export const CardAvatar = styled.div`
	width: 52px;
	height: 52px;
	min-width: 52px;
	border-radius: 50%;
	background-color: #eee;
	background-position: center center;
	background-size: cover;
	background-image: url(${props => props.background});
`

export const CardHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	z-index: 10;

	& > .title {
		margin: 0 16px 0 0;
		& > strong {
			display: block;
			color: ${configs.colors.primary};
			font-family: 'BoldFont';
			font-size: 16px;
			line-height: 16px;
			margin: 0 0 8px;
		}
		& > span {
			font-family: 'MediumFont';
			display: block;
			color: #7c8ab4;
			font-size: 12px;
			line-height: 12px;
		}
	}

	${props => props.disable && `
		pointer-events: none !important;
		* {
			pointer-events: none !important;
		}
	`}
`

export const CardDesc = styled.div`
	display: block;
	color: #7c8ab4;
	font-size: 12px;
	line-height: 17px;
	padding: 4px 0;
`

export const Tags = styled.div`
	padding: 4px 0;
`
export const Tag = styled.div`
	display: inline-flex;
	font-size: 10px;
	padding: 0px 4px;
	margin: 0 0 4px 2px;
	border-radius: 4px;
	background: ${props => props.background};
	color: white;
	cursor: pointer;
	min-width: 50px;
`

export const Platforms = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 8px;
	padding: 4px 0;

`

export const StyledIcon = styled.div`
	color: #edbb42;
	height: 20px;
	svg {
		font-size: 20px;
		color: #edbb42;
	}
`
export const StyledTag = styled.div `
	color: white;
	background-color: rgb(95, 132, 255); 
	margin: 7px 0 4px 2px;
	height: 20px;
	display: inline-flex;
	cursor: pointer;
	min-width: 35px;
	border-radius: 4px;
	padding: 3px .7em 2px 2px;
    text-align: center;
	font-size: 13px;
`

export const PlatformsCount = styled.div`
	color: ${configs.colors.primary};
	font-size: 20px;
	line-height: 20px;
	margin: 0 0 0 8px;
	font-family: 'BoldFont';
`

export const ProgressContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	height: 20px;
	width: 100%;
`

export const Progress = styled.div`
	position: relative;
	flex: 1;
	height: 8px;
	border-radius: 16px;
	border: 1px ${props => props.background} solid;
	padding: 1px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;

	span {
		display: block;
		width: ${props => props.progress}%;
		height: 100%;
		border-radius: 16px;
		background: ${props => props.background};
	}
`

export const ProgressText = styled.div`
	color: ${props => props.background};
	font-size: 12px;
	font-family: 'BoldFont';
	margin: 0 0 0 8px;
`

export const AddContainer = styled.div`
	pointer-events: none;
	animation: fadeIn;
	animation-duration: 0.3s;
    box-sizing: border-box;
    padding: 0 8px 8px 0;
	width: 72px;
	height: 72px;
	background-color: #edbb42;
	position: absolute;
	top: -2px;
	left: -2px;
	border-radius: 24px 0 72px 0;
	border-right: 20px solid transparent;
	border-bottom: 20px solid transparent;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	svg {
		color: white;
		font-size: 24px;
	}
	z-index: 0;

	&:before {
		content: ' ';
		position: absolute;
		right: -29px;
		bottom: -54px;
		width: 0px;
		height: 0px;
		border-top: 52px solid transparent;
		border-bottom: 52px solid transparent;
		transform: rotate(45deg);
		border-radius: 0 0 0px 0;
		
		border-left: 52px solid rgba(255, 255, 255, 1);
	}
`

export const AddContainerPress = styled.div`
	position: absolute;
    top: 0px;
    left: 0px;
	width: 52px;
	height: 52px;
	background-color: transparent;
	overflow: hidden;
	cursor: pointer;
	
	z-index: 100;
`

/// modal

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 0 16px;
	cursor: pointer;
	&>div {
		margin: 0;
	}
	&>div {
		flex: 1;
		margin: 0 8px 0 0;
		max-width: 48%;
	}

    @media only screen and (max-width: 667px) {
		margin: 0 0 24px;
	}

`

export const SectionRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 0 16px;
    @media only screen and (max-width: 667px) {
		flex-direction: column;

	}
`

export const ModalTitle = styled.div`
	display: block;
	color: ${configs.colors.primary};
	font-family: 'MediumFont';
	font-size: 18px;
	line-height: 18px;
	margin: 0 0 8px;
`

export const ModalContent = styled.div`
	padding: 32px 0;
`

export const ModalStyledIcon = styled.div`
	color: #edbb42;
	height: 24px;
	svg {
		font-size: 24px;
		color: ${props => props.active ? configs.colors.secondary : configs.colors.negativeLight};
		transition: all ease 0.4s;
	}
`

export const ModalButtons = styled.div`
	@media only screen and (max-width: 667px) {
		padding-bottom : 50px;
	}
`