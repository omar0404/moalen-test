import styled from 'styled-components';

export const LogoImage = styled.div`
	width: ${props => props.width || 40}px;
	height: ${props => (props.width || 40)}px;
	background-image: url(/assets/images/logo-icon.png);
	background-size: contain;
	background-position: center center;
	background-repeat: no-repeat;
`