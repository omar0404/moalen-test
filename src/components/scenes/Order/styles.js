import styled from 'styled-components';

import configs from '../../../configs'

export const Container = styled.div`
    padding: 32px 24px 16px;


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
    color: ${configs.colors.negative};
    font-size: 16px;
    font-weight: 800;
    font-family: 'MediumFont';
    text-align: center;
    margin: 24px 0 16px;
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