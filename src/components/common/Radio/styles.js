import styled from 'styled-components';

import colors from '../../../configs/colors'
import configs from '../../../configs'

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 0 24px;
    position: relative;
`


export const Label = styled.label`
    font-size: 14px;
    line-height: 14px;
    color: ${configs.colors.negative};
    margin: 0 16px 16px;
`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 0 24px 0;
    white-space: pre;
`

export const SelectContainer = styled.div`
    margin: 0 0 0 0px;
    @media (max-width:480px)  {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const SelectTag = styled.div`
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    display: ${props => props.vertical ? 'flex' : 'inline-flex'};
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    position: relative;


    padding: 4px 16px;
    margin: 0 4px 4px;

    color: ${props => props.invert ? 'white' : 'black'}
`

export const RadioTag = styled.div`
    position: relative;
    display: block;
    border: 1px solid ${props => props.invert ? 'white' : configs.colors.primary};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin: 0 0 0 16px;
    box-sizing: border-box;
    padding: 2px;

    &:after {
        content: ' ';
        display: ${props => props.active ? 'block' : 'none'};
        background: ${props => props.invert ? 'white' : configs.colors.primary};
        width: 10px;
        height: 10px;
        border-radius: 50%;
        z-index: 10;
    }
`