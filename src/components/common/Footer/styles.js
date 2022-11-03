import styled from 'styled-components';

import configs from '../../../configs'

export const Container = styled.div`
	box-sizing: border-size;
	font-size: 12px;
	margin: 64px 0 0 0;
	padding: 0 52px;
	text-align: right;
	color: ${configs.colors.negative};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 16px;

	@media only screen and (max-width: 667px) {
		flex-direction: column-reverse;
		gap: 8px;
	}
`