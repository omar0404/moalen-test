import styled from 'styled-components';
import configs from '../../../configs'

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: flex-start;
	box-sizing: border-box;
	background: ${configs.colors.background};
	padding: 40px 0 0;
	width: 100%;
	@media only screen and (max-width: 667px) {
		padding: 24px 0 0;
	}
`

export const Content = styled.div`
	flex: 1;
	box-sizing: border-size;
	padding: 0 0 0;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
	position: relative;
	width: 100%;
`

export const ContentUpperContainer = styled.div`
	overflow-y: scroll;
	overflow-x: hidden;
	width: 100%;
`

export const ContentContainer = styled.div`
	width:100%;
	flex: 1;
	box-sizing: border-size;
	padding: 88px 0 24px;
	//max-width: 1100px;
	width:100%

	@media only screen and (max-width: 667px) {
		padding: 60px 0 24px;
		width:100%
	}
`

export const SideMenu = styled.div`
	background: white;
	width: 100px;
	border-radius: 32px 0 0px 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 24px 0;
	margin: 0px 0 40px;
	animation: slideInRight;
	animation-duration: 0.3s;
	min-width: 100px;
	cursor: pointer;

	@media only screen and (max-width: 667px) {
		display: none;
	}

`

export const SideMenuList = styled.div`
	& > div {
		padding: 16px 8px;
		width: 100%;
		box-sizing: border-box;
		&:not(:last-child) {
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		}
	}
`

export const SideMenuButton = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: ${props => props.background};
		border-radius: 12px;
		height: 40px;
		width: 40px;
		margin: 0 0 2px;
		svg {
			color: white;
			font-size: 24px;
		}
	}
	& > span {
		color: ${configs.colors.primary};
		font-family: 'BoldFont';
		font-size: 12px;
		font-weight: bold;
		text-align: center;
	}
`