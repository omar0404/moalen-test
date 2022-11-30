import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	box-sizing: border-box;
	padding: 24px 72px 24px 24px;
	width: 100%;
	@media only screen and (max-width: 667px) {
		padding: 24px 24px 24px 24px;
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