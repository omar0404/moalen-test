import styled from 'styled-components';

export const Container = styled.div`
	border-radius: 24px;
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 0;
	position: relative;
	margin: 0 0 16px;
	width: 100%;
`
export const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
    width: 100%;
	height: 72px;
	padding: 16px;
	box-sizing: border-box;
	cursor: pointer;
`

export const HeaderContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
    flex: 1;
	cursor: pointer;
`

export const HeaderActions = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-left: rgba(205, 205, 205, 0.4) 1px solid;
	padding: 0 16px 0 24px;
	margin: 0 0 0 16px;
	height: 40px;
	box-sizing: border-box;
	svg {
		color: #cdcdcd;
		font-size: 16px;
	}
`

export const DeleteContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	padding: 0 0px;
	margin: 0 16px 0 0;
	height: 40px;
	box-sizing: border-box;
`

export const DeleteIcon = styled.div`
	svg {
		color: ${props => props.active ? '#eb0000' : '#cdcdcd'};
		font-size: 16px;
	}
	cursor: pointer;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: center;
	padding: 16px;
	box-sizing: border-box;
`

export const ContentContainer = styled.div`
	width: 100%;
	overflow: hidden;
	border-top: rgba(205, 205, 205, 0.4) 1px solid;
`
