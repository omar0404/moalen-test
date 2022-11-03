import styled from 'styled-components';

import colors from '../../../configs/colors';
import configs from '../../../configs';


export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0 0 15px;
    position: relative;
`

export const SelectContainer = styled.div`
    flex: 16;
    select {
        border-radius: 10px;
    }
`

export const SelectTag = styled.a`
    display: inline-flex;
    font-size: 14px;
    color: white;
    background: ${props => props.active ? colors.primary : 'rgba(0, 0, 0, 0.15)'};
    padding: 4px 8px;
    border-radius: 15px;
    cursor: pointer;
    margin: 0 8px 8px 0;
    transition: all 0.2s ease-in-out;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;

    svg {
        font-size: 14px;
        color: white;
    }
`

export const Label = styled.label`
    /* font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
    margin: 0 16px 4px;
    color: ${configs.colors.primary}; */
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
    color: ${configs.colors.primary};
    margin: auto;
    flex: 2;
    text-align: center;
    @media only screen and (max-width: 667px) {
        flex: 4;
    }

`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 0 16px 0;
    white-space: pre;
`