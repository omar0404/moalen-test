import styled from 'styled-components';

import configs from '../../../configs';
import colors from '../../../configs/colors'

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
    text-align: center;
`
export const StyledIcon = styled.div`
    vertical-align: sub;
	color: #49D39E;
	height: 20px;
    display : inline-block;
    text-align: center;    
	svg {
		font-size: 20px;
		color: #49D39E;
		transition: all ease 0.4s;
	}
    margin-left: 4px;
`
export const ErrorIcon = styled.div`
vertical-align: sub;
	color: #49D39E;
	height: 20px;
    display : inline-block;
    text-align: center;    
	svg {
		font-size: 20px;
		color: red;
		transition: all ease 0.4s;
	}
    margin-left: 4px;
`

export const SubTitle = styled.div`
    color: ${configs.colors.negative};
    font-size: 16px;
    font-weight: 800;
    text-align: center;
    margin: 15px 0 0px;
`

export const SubTitle2 = styled.div`
    color: #cdcdcd;
    font-size: 24px;
    font-weight: 800;
    font-family: 'MediumFont';
    text-align: center;
    margin: 24px 0 16px;
`

export const Content = styled.div`
	margin: 16px 0 0;
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
export const ButtonLink = styled.div`
    display: block;
    padding: 5px 5px 8px;
    box-sizing: border-box;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,0.05), 0 2px 2px 0 rgba(0,0,0,0.05), 0 1px 5px 0 rgba(0,0,0,0.05);
    border-radius: 8px;
    width: 180px;
    margin: 25px auto;
    background: #0e256b;
    color: #fff ;
    font-size: 14px;
    font-weight: 600;
    transition: all 1s ease-in-out;
    border: solid 1px rgba(0, 0, 0, 0);
    &:focus {
        outline: none;
    }
    &:hover {
        box-shadow: 4px 4px 16px rgba(0,0,0,0.3);
    }
    cursor: pointer;
    text-align:center;
    
`

