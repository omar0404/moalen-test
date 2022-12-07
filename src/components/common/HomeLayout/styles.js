import styled from 'styled-components';
import configs from '../../../configs'

export const Container = styled.div`
	background: white;

`

export const Content = styled.div`
	box-sizing: border-box;
	padding: 0 0 0;
	position: relative;
	max-width: 1000px;
	margin: 0 auto;
	background: white;
`

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 16px 16px;
	box-sizing: border-box;
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
	top: 19px;
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
export const MenuSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 32px;

	@media only screen and (max-width: 667px) {
		display: none;
	}
`

export const MenuItem = styled.a`
	display: flex;
	flex-direction: row;
    align-items: center;
	justify-content: flex-start;
	gap: 16px;
	color: ${configs.colors.primary};
    font-family: 'BoldFont';
	font-size: 14px;
	cursor: pointer;
`


	export const IconLogo = styled.div`
    height: 40px;
	width: 40px;
	background-image: url(/assets/images/logo-icon.png);
	background-size: contain;
	background-position: center center;
	display: none;
	text-align: center;
	margin:10px auto 0px;
	@media only screen and (max-width: 667px) {
		display: block;
	}
`
export const LogoBox = styled.a`
 	 background-color:transparent;
 	 border:none ;
     cursor: pointer;
	@media only screen and (max-width: 667px) {
		display: none;
	}
`