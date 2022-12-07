import styled from 'styled-components';
import configs from '../../../configs'

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    &> a {
        margin: 24px 0 0;
    }
    form {
        width: 100%;
    }
`

export const Title = styled.div`
    color: ${configs.colors.primary};
    font-size: 24px;
    font-weight: 800;
    font-family: 'BoldFont';
    text-align: center;
    margin: 0 0 52px;

    @media (max-width: 667px) {
        font-size: 16px;
	}
`

export const ButtonContainer = styled.div`
    margin: .5em 0  .5em;
    display: flex;
    flex-direction: row;
    align-items: center;

    .saveBtn {
        margin-right: 0;
        button {
            background-color: #edbb42 !important;
        }
    }

    @media only screen and (max-width: 667px) {
        flex-direction: column;
        .saveBtn {
            margin-right: auto;
        }
    }

`
export const CompanyPlociesBox = styled.div`
    margin-top: -22px;
    margin-bottom: 10px;
    
    span:not(:first-child) {
        cursor: pointer !important;
        color: ${configs.colors.primary};
        margin: 5px;
    }
    span{
        font-size: .8em;
    }
`