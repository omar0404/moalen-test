import styled from 'styled-components';
import configs from '../../../configs'

export const Container = styled.div`
    padding: 16px 24px;

    .formBtns {
        button {
            margin-bottom : 20px
        }
        // :first-child {
        //     margin-left: 0;
        // }
    }
    @media only screen and (max-width: 667px) {
        padding: 32px 10px;
	}
`
export const Title = styled.div`
    color: ${configs.colors.primary};
    font-size: 24px;
    font-weight: 800;
    font-family: 'BoldFont';
    text-align: center;
    margin: 0 0 52px;
`

export const StyledIcon = styled.div`
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