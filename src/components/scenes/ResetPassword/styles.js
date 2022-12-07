import styled from 'styled-components';
import configs from '../../../configs';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 16px;
`



export const Links = styled.div`
    color: ${configs.colors.primary};
    font-size: 14px;
    margin: 24px auto;
    text-align: center;
`

export const LinkLine = styled.div`
    color: ${configs.colors.primary};
    font-size: 14px;
    a {
        color: ${configs.colors.secondary};
    }
`