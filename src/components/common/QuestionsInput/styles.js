import styled from 'styled-components';
import { RiCloseLine } from "react-icons/ri";

import configs from '../../../configs'

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 0 24px;
`

export const Input = styled.input`
    flex: 1;
    font-size: 12px;
    border: none;
    padding: 16px 16px;
    background: transparent;
    height: 52px;
    box-sizing: border-box;
    &:focus {
        outline: 1px solid rgba(0, 0, 0, 0.05);
        outline-offset: 1px;
    }
`

export const DeleteIcon = styled(RiCloseLine)`
    font-size: 20px;
    color: rgba(0, 0, 0, 0.5);
`

export const DeleteIconAnchor = styled.a`
    margin: 0 8px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`

export const AnswerInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 0 0 24px;
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.02);
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-radius: 24px;
    font-size: 12px;
    border: ${configs.colors.negativeLight} 1px solid;
    margin-bottom: 8px;
    overflow: auto;
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

export const AddButton = styled.a`
    font-size: 14px;
    margin: 8px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    svg {
        font-size: 20px;
        margin: 0 16px 0 0;
    }
    cursor: pointer;
`

export const AnswerAddButton = styled.a`
    font-size: 14px;
    margin: 8px 16px 8px 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
    justify-content: flex-start;
    svg {
        font-size: 20px;
        margin: 0 16px 0 0;
    }
    cursor: pointer;
`

export const RadioButton = styled.a`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    svg {
        font-size: 20px;
        margin: 0 4px 0 0;
    }
    cursor: pointer;
`

export const ActionsContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 44px;
    & > div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
`

export const TypesContainer = styled.div`
    font-size: 12px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    a {
        font-size: 12px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 0 4px 0 8px;
    }
    svg {
        font-size: 16px;
    }
    .typeLabel {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
        margin: 0 8px 0 0;
    }
`