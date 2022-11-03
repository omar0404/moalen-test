import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

import configs from '../../../configs'

export const Container = styled.div`
	flex: 1;
	box-sizing: border-box;
	padding: 24px 72px 24px 24px;
	width: 100%;
	@media only screen and (max-width: 667px) {
		padding: 24px 24px 24px 24px;
	}
`

export const Title = styled.div`
    color: ${configs.colors.primary};
    font-size: 16px;
    font-weight: 800;
    font-family: 'MediumFont';
    text-align: right;
    margin: 0 0 32px;
	@media only screen and (max-width: 667px) {
		padding: 0 40px 0 0;
	}
`

export const Content = styled.div`
	flex: 3;
	display: grid;
	align-items: stretch;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 16px;
	column-gap: 16px;
	widyh:100%;

	@media only screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}

	@media only screen and (max-width: 667px) {
		width: 100%;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(6, 1fr);
	}
`

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: flex-start;
	gap: 16px;
	width: 100%;
	@media only screen and (max-width: 667px) {
		flex-direction: column;
	}
`

export const Featured = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
	gap: 8px;
`

export const FeaturedContent = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-start;
	gap: 8px;
`

export const StyledSkeleton = styled(Skeleton)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	box-sizing: border-box !important;
	overflow: hidden !important;
`

export const Pagination = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	margin: 32px 0 0;
`

export const PageButton = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: white;
	font-family: 'BoldFont';
	font-size: 14px;
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 0 0 0 16px;
	${props => props.active && `
		background: ${configs.colors.primary};
		color: white;
	`}
	cursor: pointer;

	@media only screen and (max-width: 667px) {
        width: 20px;
		height: 20px;
		margin: 6px 0 0 4px;
		font-size: 10px;
		padding: 0 3px 5px;
	}

`

export const PageOption = styled.a`
	font-family: 'MediumFont';
	color: ${configs.colors.primary};
	font-size: 14px;
	margin: 0 0 0 16px;
	opacity: ${props => props.active ? 1 : 0.5};
	cursor: pointer;
`

export const LastViewedTitle = styled.div`
    color: ${configs.colors.primary};
    font-size: 16px;
    line-height: 16px;
    font-weight: 800;
    font-family: 'MediumFont';
    text-align: right;
    margin: -32px 0 0px;
	height: 24px;
`

export const FeaturedTitle = styled.div`
    color: ${configs.colors.primary};
    font-size: 16px;
    line-height: 16px;
    font-weight: 800;
    font-family: 'MediumFont';
    text-align: right;
    margin: 16px 0 8px;
`

export const LoadingCard = styled.div`
    border-radius: 24px;
	background: #cdcdcd;
	opacity: 0.4;
	flex: 1;
	width: 100%;
	overflow: hidden;
	position: relative;
	min-height: 200px;
`