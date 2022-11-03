import styled from 'styled-components';

import ReactTelInput from 'react-telephone-input';

import configs from '../../../configs'
import colors from '../../../configs/colors'

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 0 24px;
    position: relative;
`

export const PhoneInput = styled(ReactTelInput)`
    width: 100% !important;
    padding: 16px 16px;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
    border-bottom: ${configs.colors.negativeLight} 1px solid;
    background-color: #fff;
    font-size: 14px;

    color: black;
    box-sizing: border-box;
    outline: none;
    input, button {
        height: 100% !important;
        border: 0 !important;
        outline: none;
        box-shadow: none !important;
        background: white;
    }
   .flag-dropdown {
        width: 52px !important;

    }
    .flag-dropdown, .selected-flag {
        margin: 0;
    }
`

export const Label = styled.label`
    font-size: 11px;
    line-height: 14px;
    color: ${configs.colors.negative};
    margin: 0 16px 4px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 8px 24px 0;
    white-space: pre;
`