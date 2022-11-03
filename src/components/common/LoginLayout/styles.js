import styled from 'styled-components';
import configs from '../../../configs'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: flex-start;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: ${configs.colors.background2};
	@media only screen and ${configs.device.mobile} {
		display: block;
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
`

export const Content = styled.div`
	flex: 3;
	box-sizing: border-box;
	padding: 5vh 0 24px;
	overflow-x: hidden;
	position: relative;
	@media only screen and ${configs.device.mobile} {
		display: block;
	}
	overflow-y: scroll;
`

export const ContentCard = styled.div`
	background: white;
	margin: 32px 0 32px 0;
	border-radius: 32px 0 0px 32px;
	padding: 24px 24px;
	width: 100%;
	box-sizing: border-box;

	animation: slideInRight;
	animation-duration: 0.3s;

	@media only screen and ${configs.device.mobile} {
		border-radius: 32px;
	}
`

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 90%;
	max-width: 900px;
	margin: 24px 0 0;
	.mobile-logo, .mobile-only {
		display: none;
	}

	@media only screen and ${configs.device.mobile} {
		width: 90%;
		margin: 0 auto;
		.mobile-logo {
			display: block;
		}

		.mobile-only {
			display: block;
		}
	}
`

export const SideMenu = styled.div`
	flex: 2;
	background: ${configs.colors.primary};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media only screen and ${configs.device.mobile} {
		display: none;
	}
`

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const LogoHeader = styled.div`
	font-size: 20px;
	font-weight: 300;
	color: white;
`

export const AddedLink = styled.a`
	font-size: 16px;
	font-weight: 300;
	color: ${configs.colors.secondary};
	margin: 24px auto 0;
	width: 90%;
	text-align: center;
`

export const MenuSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 32px;
	width: 100%;
	min-height: 50px;
`

export const MenuItem = styled.div`
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