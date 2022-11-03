import styled from 'styled-components';

import configs from '../../../configs'

export const Container = styled.div`
    padding: 32px 24px 16px;
    display: flex;

    @media (max-width: 500px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 667px) {
        padding: 32px 10px 16px;
	}
`
export const FormBox = styled.div`
    flex: 70%;
`

export const ContactsBox = styled.div`
    flex: 30%;
    padding: 5.5em 1.5em;
    @media (max-width: 500px) {
        padding: .5em 1em;
    }
`
export const BoxItem = styled.div `
    margin: 0 0 15px 0;
    p{
        margin: 5px 0;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    width: 100%;
`

export const Title = styled.div`
    color: ${configs.colors.primary};
    font-size: 20px;
    font-weight: 800;
    font-family: 'MediumFont';
    text-align: right;
    margin: 0 0 0px;
`

export const SubTitle = styled.div`
    color: ${configs.colors.negative};
    font-size: 16px;
    font-weight: 800;
    text-align: right;
    margin: 24px 0 0px;
`

export const SubTitle2 = styled.div`
    color: #cdcdcd;
    font-size: 24px;
    font-weight: 800;
    font-family: 'MediumFont';
    text-align: center;
    margin: 24px 0 16px;
`

export const HeaderContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
    flex: 1;
	cursor: pointer;
`

export const Avatar = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #eee;
	background-position: center center;
	background-size: cover;
	background-image: url(${props => props.background});
`

export const InfluencerName = styled.div`
    display: block;
    color: ${configs.colors.primary};
    font-family: 'BoldFont';
    font-size: 16px;
    line-height: 16px;
    margin: 0 16px 0px 0;
    flex: 1;
`

export const InfluencerPlatform = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
`

export const StyledIcon = styled.div`
	color: #000;
	height: 20px;
	svg {
		font-size: 20px;
		color: #252424;
		transition: all ease 0.4s;
	}
    margin-left: 16px;
`

export const Content = styled.div`
	margin: 16px 0 0;
`

export const InfluencerContent = styled.div`
	margin: 16px 10% 16px 0px;
    box-sizing: border-box;
`

export const PlatformRow = styled.div`
	margin: 0 0 16px;
    display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
    color: #cdcdcd;
    font-size: 14px;
    box-sizing: border-box;
`
export const PlatformRowContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    box-sizing: border-box;
`

export const DeleteIcon = styled.div`
	svg {
		color: ${props => props.active ? '#eb0000' : '#cdcdcd'};
		font-size: 16px;
	}
	cursor: pointer;
`

export const SentIcon = styled.div`
    color: ${configs.colors.primary};
    font-size: 24px;
    font-weight: 800;
    font-family: 'BoldFont';
    text-align: center;
    margin: 0 0 24px;
    svg {
        color: ${configs.colors.primary};
        font-size: 52px;
    }
`

export const SentContent = styled.div`
    margin: 24px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const SentSubTitle = styled.div`
    color: ${configs.colors.negative};
    font-size: 14px;
    font-weight: 800;
    text-align: right;
    margin: 0 0 0px;
`