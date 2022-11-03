import styled from 'styled-components';

import configs from '../../../configs'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 60px;
	box-sizing: border-box;
	padding: 16px 32px 16px;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	background: rgba(244,244,245,0.9);

	@media only screen and (max-width: 667px) {
		justify-content: center;
		padding: 8px 32px 8px;
		gap: 52px;
	}
	z-index: 1001;
`

export const MobileMenu = styled.div`
	position: fixed;
	top: 8px;
	right: 0px;
	bottom: 68px;
	width: 300px;
	pointer-events: none;
	overflow: hidden;
	z-index: 1000000000000;
	display: none;

	@media only screen and (max-width: 667px) {
		display: block;
	}
`

export const MobileMenuOpen = styled.div`
	background: white;
	position: absolute;
	top: 24px;
	left: -43px;
	width: 48px;
	height: 40px;
	border-radius: 16px 0 0px 16px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	svg {
		color: ${configs.colors.primary};
		font-size: 24px
	}
	pointer-events: all !important;
`

export const MobileMenuPanel = styled.div`
	background: white;
	position: absolute;
	top: 0;
	right: ${props => props.open ? '0px' : '-250px'};
	transition: all 0.5s ease;
	bottom: 0;
	width: 250px;
	border-radius: 32px 0 0px 32px;
	z-index: 10;
	padding: 60px 24px 24px;
	pointer-events: all !important;

`

export const MobileMenuClose = styled.div`
	position: absolute;
	top: 8px;
	right: 8px;
	cursor: pointer;
	svg {
		color: ${configs.colors.primary};
		font-size: 24px
	}
	pointer-events: all !important;
`

export const MobileMenuLink = styled.a`
	cursor: pointer;
	font-size: 16px;
	color: ${configs.colors.primary};

	svg {
		color: ${configs.colors.primary};
		font-size: 24px
	}
	pointer-events: all !important;
	gap: 16px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	margin: 0 0 16px;
`


export const Avatar = styled.div`
	width: 52px;
	height: 52px;
	border-radius: 50%;
	border: #edbb42 4px solid;
	background: #eee;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	svg {
		color: rgba(0, 0, 0, 0.3);
		font-size: 24px;
	}

	@media only screen and (max-width: 667px) {
		width: 24px;
		height: 24px;
		border: #edbb42 0px solid;
		background: transparent;
		border-radius: 0px;
		svg {
			font-size: 24px;
			color: #edbb42;
		}
	}
`

export const Title = styled.div`
    color: ${configs.colors.primary};
    font-size: 16px;
    font-weight: 600;
    font-family: 'MediumFont';
    text-align: center;
    margin: 0 0 0px;

	@media only screen and (max-width: 667px) {
		display: none;
	}
`

export const IconLogo = styled.div`
    height: 40px;
	width: 40px;
	background-image: url(/assets/images/logo-icon.png);
	background-size: contain;
	background-position: center center;
	display: none;
	@media only screen and (max-width: 667px) {
		display: block;
	}
`


export const Section = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;
	cursor: pointer;
`

export const MenuSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 32px;

	@media only screen and (max-width: 667px) {
		display: none;
	}

	@media only screen and (max-width: 1080px) {
		#tab-item-2 {
			display: none;
		}
	}

	@media only screen and (max-width: 790px) {
		#tab-item-1 {
			display: none;
		}
	}
`

export const StyledIcon = styled.div`
	color: #edbb42;
	height: 20px;
	svg {
		font-size: 20px;
		color: #edbb42;
	}
	position: relative;
	cursor: pointer;
`

export const Caret = styled.div`
	background: #02aa2f;
	min-height: 16px;
	min-width: 16px;
	border-radius: 8px;
	position: absolute;
	top: -8px;
	right: -4px;
	color: white;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-size: 9px;
`

export const MenuItem = styled.div`
	display: flex;
	flex-direction: row;
    align-items: center;
	justify-content: flex-start;
	gap: 16px;
	color: ${configs.colors.primary};
    font-family: 'BoldFont';
	font-size: 16px;
	cursor: pointer;
`

export const MenuItemDropDown = styled.div`
	display: flex;
	flex-direction: row;
    align-items: center;
	justify-content: flex-start;
	gap: 16px;
	color: ${configs.colors.primary};
    font-family: 'BoldFont';
	font-size: 16px;
	padding-right: 16px;
	position: relative;

	.dropdown-panel {
		display: none;
		min-width: 200px;
		max-height: 400px;
		overflow-y: scroll;
		background: white;
		border-radius: 16px;
		position: absolute;
		padding: 16px 16px;
		top: 100%;
		left: 0;
		* {
			font-size: 12px;
		}
		&>div {
			padding: 0 0 4px;
		}
	}

	&:hover {
		.dropdown-panel {
			display: block !important;
		}
	}
`
