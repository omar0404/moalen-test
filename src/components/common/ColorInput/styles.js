import styled from 'styled-components';

import configs from '../../../configs'
import { SketchPicker } from 'react-color';

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 0 24px;
`

export const Input = styled(SketchPicker)`
    box-sizing: border-box;
    border: none;
    border-radius: 24px;
    font-size: 12px;
    border: ${configs.colors.negativeLight} 1px solid;
    &:focus {
        outline: none;
    }
    margin: 24px 52px;
`

export const Label = styled.label`
    text-align: right;
    font-size: 12px;
    color: ${configs.colors.negative};
    margin: 0 24px 4px;
`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 8px 24px 0;
    white-space: pre;
`