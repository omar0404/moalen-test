import styled from 'styled-components';

import configs from '../../../configs'

export const Container = styled.div`
    padding: 32px 24px 16px;
    width: 100%;


    form {
        & > div:first-child, & > div:nth-child(2), & > div:nth-child(3), & > div:nth-child(4) {
            display: inline-flex;
            width: 22%;
            margin: 0 1.5%;
        }
        & > div:nth-child(5) {
            margin: 24px 0;
        }
    }
    @media only screen and (max-width: 667px) {
		padding: 32px 10px 16px;
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
    margin: 0 0 24px;
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
    gap: 8px;
    flex: 1;
	cursor: pointer;
`

export const Avatar = styled.div`
	width: 32px;
	height: 32px;
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
    margin: 0 16px 0px 16px;
`

export const StatusText = styled.div`
    display: block;
    color: #cdcdcd;
    text-align: left;
    font-size: 16px;
    line-height: 16px;
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
	color: #cdcdcd;
	height: 20px;
	svg {
		font-size: 20px;
		color: ${props => props.active ? configs.colors.secondary : '#cdcdcd'};
		transition: all ease 0.4s;
	}
    margin-left: 16px;
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

export const SentContent = styled.div`
    margin: 24px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
