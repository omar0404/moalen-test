import styled from 'styled-components';
import { Animated } from "react-animated-css";

import colors from '../../../configs/colors'
import configs from '../../../configs'

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
`

export const StyledAnimated = styled(Animated)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1001;
`

export const Card = styled.div`
    width: calc(100vw - 350px);
    min-height: 100px;
    background: white;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    position: relative;
    z-index: 1000000;
    box-sizing: border-box;
    padding: 24px 24px 16px;
    text-align: right;

    @media only screen and (max-width: 667px) {
        width: 100vw;
        border-radius: 0;
        height: 100vh ;
        padding-top: 3em
	}
`

export const CloseButton = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 16px;
    cursor: pointer;
    svg {
        font-size: 18px;
        color: #cdcdcd;
    }
    @media only screen and (max-width: 667px) {
        top: 3.5%;
	}
`
export const MainBox = styled.div`
    overflow-y: scroll;
    height: calc(100vh - 100px);
    @media only screen and (max-width: 667px) {
        height: calc(100vh - 50px);
    }
`
export const ModalContent = styled.div`
    
    h5 , p {
        margin : 2px 0;
    }
    h4 {
        margin : 4px 0 4px 12px;
        background-color : #eeeef2;
        padding: 2px 10px 6px;
    }
    h5{
        font-weifgt: bold:
        margin-left: 5px;
    }
    p{
        font-size: 12px;
    }
`
export const ItemsBox = styled.div`
    p{
        font-weifgt: bold:
        display: inline-block;
        margin-left: 5px;
    }
    span{
        font-size: 12px;
        display: inline-block;
    }
`
export const Title = styled.div`
    color: ${configs.colors.primary};
    font-size: 20px;
    font-weight: 800;
    font-family: 'MediumFont';
    text-align: right;
    margin: 0 0 0px;
    padding-left: 10px;
    margin-bottom: 10px;
`