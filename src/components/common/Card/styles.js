import styled from 'styled-components';

import configs from '../../../configs'

export const Container = styled.div`
	width: 100%;
	box-sizing: border-size;
	padding: 0;
	border-radius: 24px;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
	background: white;
	box-sizing: border-box;
	outline: none;
	cursor: pointer;
`

export const Title = styled.h2`
	font-size: ${props => props.small ? '16px' : '24px'};
	margin: 0 0 0 0;
    color: ${configs.colors.primary};
	font-family: 'BoldFont';
    font-weight: 800;
	font-size: 16px;
	flex: 1;
`

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
    width: 100%;
    margin: 0 0 16px;
	padding: 16px 32px;
    font-size: 14px;
	box-sizing: border-box;
	border-bottom: ${configs.colors.negativeLight} 1px solid;
`

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
	padding: ${props => props.noPadding ? '0' : '16px'};
	box-sizing: border-box;
`
