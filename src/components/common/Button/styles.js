import styled from 'styled-components';

import colors from '../../../configs/colors'


export const ButtonLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px 48px;
    box-sizing: border-box;
    box-shadow: ${props => props.primary ? '0 3px 1px -2px rgba(0,0,0,0.05), 0 2px 2px 0 rgba(0,0,0,0.05), 0 1px 5px 0 rgba(0,0,0,0.05)' : 'none'};

    border-radius: 8px;
    width: auto;
    background: ${props => props.primary ? colors.primary : 'transparent'};
    color: ${props => props.primary ? '#fff' : colors.primary};
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    transition: all 1s ease-in-out;
    border: solid 1px ${props => props.primary ? colors.primary : 'rgba(0, 0, 0, 0)'};
    &:focus {
        outline: none;
    }
    &:hover {
        box-shadow: ${props => props.primary ? '4px 4px 16px rgba(0,0,0,0.3)' : 'none'};
    }
    cursor: pointer;
    svg {
        color: ${props => props.primary ? '#fff' : colors.negative};
        font-size: 24px;
    }
`

export const Container = styled.div`
    box-sizing: border-box;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 0px;
`

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px 48px;
    box-sizing: border-box;
    box-shadow: ${props => props.primary ? '0 3px 1px -2px rgba(0,0,0,0.05), 0 2px 2px 0 rgba(0,0,0,0.05), 0 1px 5px 0 rgba(0,0,0,0.05)' : 'none'};

    border-radius: 8px;
    width: auto;
    background: ${props => props.primary ? colors.primary : 'transparent'};
    color: ${props => props.primary ? '#fff' : colors.primary};
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    transition: all 1s ease-in-out;
    border: solid 1px ${props => props.primary ? colors.primary : 'rgba(0, 0, 0, 0)'};
    &:focus {
        outline: none;
    }
    &:hover {
        box-shadow: ${props => props.primary ? '4px 4px 16px rgba(0,0,0,0.3)' : 'none'};
    }
    cursor: pointer;
    svg {
        color: ${props => props.primary ? '#fff' : colors.negative};
        font-size: 24px;
    }
`