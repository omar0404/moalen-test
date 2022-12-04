import styled from 'styled-components';
import Input from '../Input'
import Radio from '../Radio'
import Select from '../FilterSelect'

import configs from '../../../configs'

export const Container = styled.div`
	position: relative;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 60px;
	box-sizing: border-box;
	padding: 0 0px;
`

export const StyledInput = styled(Input)`
	width: 100%;
	border-radius: 32px;
	overflow: hidden;
	border-bottom: none;
	height: 52px;
	margin: 0px 0 24px;
	input {
		padding: 8px 16px !important;
		height: 32px;
		font-size: 20px !important;
	}
`

export const StyledSelect = styled(Select)`
	background: #3b4b7c
`

export const StyledRadio = styled(Radio)`
	div > a {
		display: flex !important;
	}
`

export const Content = styled.div`
	position: relative;
	flex: 1;
	overflow-y: scroll;
	overflow-x: visible;
	width: 100%;
	margin-right: ${props => props.open ? '250px' : '0px'};
	transition: all 0.5s ease;
	pointer-events: all !important;

	@media only screen and (max-width: 667px) {
		margin-right: 0;
	}
`

export const FilterPanel = styled.div`
	background: ${configs.colors.primary};
	position: absolute;
	top: 0;
	right: ${props => props.open ? '0px' : '-250px'};
	transition: all 0.5s ease;
	bottom: 0;
	width: 250px;
	border-radius: 32px 0 0px 32px;
	z-index: 10;
	pointer-events: all !important;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
`

export const FilterPanelContent = styled.div`
	flex: 1;
	width: 100%;
	overflow-y: scroll;
	padding: 24px 16px;

`

export const FilterPanelContainer = styled.div`
	position: fixed;
	top: 128px;
	right: 101px;
	bottom: 68px;
	width: 300px;
	pointer-events: none;
	overflow: hidden;
	z-index: 1000;

	@media only screen and (max-width: 667px) {
		right: 0;
		top: 80px;
	}
`


export const FilterOpen = styled.div`
	background: ${configs.colors.primary};
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
		color: #edbb42;
		font-size: 24px
	}
	pointer-events: all !important;
`


export const FilterClose = styled.div`
	cursor: pointer;
	svg {
		color:#edbb42;
		font-size: 24px
	}
	pointer-events: all !important;
	margin-top:15px;
	margin-right:10px;
`
