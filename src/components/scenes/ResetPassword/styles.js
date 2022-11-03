import styled from 'styled-components';
import configs from '../../../configs';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 16px;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    width: 100%;
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