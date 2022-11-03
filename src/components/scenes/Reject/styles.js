import styled from 'styled-components';

import configs from '../../../configs'

export const Container = styled.div`
    padding: 32px 24px 16px;
    
    min-height: calc(100vh - 242px);
    @media (max-width: 500px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 667px) {
        padding: 32px 10px 16px;
        min-height: calc(100vh - 290px);
	}
`


export const Title = styled.div`
    color: ${configs.colors.primary};
    font-size: 20px;
    font-weight: 800;
    font-family: 'MediumFont';
    text-align: right;
    margin: 0 0 0px;
    text-align: right;
`
export const StyledIcon = styled.div`
    vertical-align: sub;
	color: #49D39E;
	height: 20px;
    display : inline-block;
    text-align: right;    
	svg {
		font-size: 20px;
		color: #49D39E;
		transition: all ease 0.4s;
	}
    margin-left: 4px;
`

export const SubTitle = styled.div`
    color: ${configs.colors.negative};
    font-size: 16px;
    font-weight: 800;
    text-align: right;
    margin: 15px 0 0px;
`

export const SubTitle2 = styled.div`
    color: #cdcdcd;
    font-size: 24px;
    font-weight: 800;
    font-family: 'MediumFont';
    text-align: right;
    margin: 24px 0 16px;
`

export const Content = styled.div`
	margin: 16px 0 0;
`
export const FormBox = styled.div`
    width: 60%;
    margin 0 auto;
    @media only screen and (max-width: 667px) {
        width: 95%
	}
`
export const SentIcon = styled.div`
    color: ${configs.colors.primary};
    font-size: 24px;
    font-weight: 800;
    font-family: 'BoldFont';
    text-align: right;
    margin: 0 0 24px;
    svg {
        color: ${configs.colors.primary};
        font-size: 52px;
    }
`

