import styled from 'styled-components';

import colors from '../../../configs/colors'

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 0 24px;
`

export const SelectContainer = styled.div`
    margin: 0 0 0 52px;
    @media (max-width:480px)  {
        margin 0;
    }
`

export const SelectTag = styled.a`
    display: inline-block;
    font-size: 14px;
    color: white;
    background: ${props => props.active ? colors.secondary : 'rgba(0, 0, 0, 0.15)'};
    padding: 4px 8px;
    border-radius: 15px;
    cursor: pointer;
    margin: 0 8px 8px 0;
    transition: all 0.2s ease-in-out;
`

export const Label = styled.label`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
    margin: 0 16px 4px;
`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 0 16px 0;
    white-space: pre;
`