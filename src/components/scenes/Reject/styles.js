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
export const FormBox = styled.div`
    width: 60%;
    margin 0 auto;
    @media only screen and (max-width: 667px) {
        width: 95%
	}
`

