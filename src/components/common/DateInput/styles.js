import styled from 'styled-components';
import DatePicker from "react-datepicker";

import configs from '../../../configs'

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 0 24px;
    position: relative;

    .react-datepicker__day--today {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }
`

export const Input = styled(DatePicker)`
    padding: 11px 16px 9px;
    height: 52px;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
    border-bottom: ${configs.colors.negativeLight} 1px solid;
    font-family: 'MediumFont';

    background: transparent;
    input {
        background: transparent;
    }
    z-index: 100000;
    &:focus {
        outline: none;
    }

    ::-webkit-input-placeholder {
        color: #a9a9a9;
    }

    :-ms-input-placeholder {
        color: #a9a9a9;
    }

    ::placeholder {
        color: #a9a9a9;
    }
    z-index: 100000000000000;

    &.react-datepicker__tab-loop .react-datepicker {
        width: 332px !important;

    }

    &.react-datepicker__tab-loop > .react-datepicker-popper {
        z-index: 100000000000000;
        width: 332px !important;
        right: auto;
    }
`

export const Label = styled.label`
    font-size: 9px;
    line-height: 14px;
    color: ${configs.colors.negative};
    margin: 0 16px 4px;
    position: absolute;
    top: 0;
    right: 0;

`

export const Error = styled.p`
    color: red;
    font-size: 12px;
    margin: 0 24px 0;
    white-space: pre;
`