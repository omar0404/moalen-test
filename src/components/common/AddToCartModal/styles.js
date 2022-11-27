import styled from 'styled-components';
import configs from '../../../configs'



export const ModalRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 0 0 16px;
cursor: pointer;
&>div {
    margin: 0;
}
&>div {
    flex: 1;
    margin: 0 8px 0 0;
    max-width: 48%;
}

@media only screen and (max-width: 667px) {
    margin: 0 0 24px;
}
`

export const ModalTitle = styled.div`
	display: block;
	color: ${configs.colors.primary};
	font-family: 'MediumFont';
	font-size: 18px;
	line-height: 18px;
	margin: 0 0 8px;
`

export const ModalContent = styled.div`
	padding: 32px 0;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 24px 16px;
    @media only screen and (max-width: 667px) {
        margin: 0 10px 16px;
	}
`
export const ModalStyledIcon = styled.div`
	color: #edbb42;
	height: 24px;
	svg {
		font-size: 24px;
		color: ${props => props.active ? configs.colors.secondary : configs.colors.negativeLight};
		transition: all ease 0.4s;
	}
`

export const SectionRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 0 16px;
    @media only screen and (max-width: 667px) {
		flex-direction: column;

	}
`
export const ModalButtons = styled.div`
	@media only screen and (max-width: 667px) {
		padding-bottom : 50px;
	}
`