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
    display: grid;
    column-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
`