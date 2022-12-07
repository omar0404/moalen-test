import styled from 'styled-components';

export const LogoImage = styled.div`
	width: ${props => props.width || 64}px;
	height: ${props => (props.width || 64)*0.7333}px;
	background-image: ${props => props.invert ? 'url(/assets/images/logo-invert.png)' : 'url(/assets/images/logo.png)'};
	background-size: contain;
	background-position: center center;
	background-repeat: no-repeat;
`