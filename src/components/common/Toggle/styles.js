import styled from 'styled-components';
import configs from '../../../configs'

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 0 24px;
    margin: ${props => !!props.noMargin ? '0 0 0px' : '0 0 24px'};
`

export const Input = styled.input`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.07);
    border: none;
    border-radius: 24px;
    margin: 0 16px 0 0;

    &:focus {
        outline: 1px solid rgba(0, 0, 0, 0.05);
        outline-offset: 1px;
    }
`

export const Label = styled.label`
    font-size: 12px;
    color: ${configs.colors.negative};
    margin: ${props => !!props.noMargin ? '0 0px 4px' : '0 24px 4px'};
`

export const ToggleContainer = styled.div`
    width: 60px;
    height: 32px;
    background: ${props => !!props.active ? configs.colors.secondary : configs.colors.negativeLight};
    border-radius: 24px;
    margin: ${props => !!props.noMargin ? '0 0px' : '0 24px'};
    position: relative;
    transition: all 0.3s ease-in-out;
`

export const Toggle = styled.div`
    width: 24px;
    height: 24px;
    background: ${props => !!props.active ? configs.colors.negativeLight : 'white'};
    border-radius: 24px;
    position: absolute;
    top: 4px;
    right: 32px;
    transition: all 0.3s ease-in-out;

    ${props => !!props.active && (`
        right: 4px;
    `)}
`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 0 16px 0;
    white-space: pre;
`