import React, { useState, useEffect } from 'react';
import { MdRadioButtonChecked, MdRadioButtonUnchecked, MdClose } from "react-icons/md";
import { BsX } from "react-icons/bs";
import { Animated } from "react-animated-css";
import TermCard from '../../common/TermCard';
import moment from 'moment/min/moment-with-locales';
moment.locale('ar-sa');

import { Container, StyledAnimated, Card, CloseButton, Overlay ,Title ,ModalContent, MainBox,ItemsBox} from './styles';

export default function ModalCompoent(props) {
    const setShow = (val) => {
        props.updateShow(val)
    }


    return <StyledAnimated animateOnMount={false} animationInDuration={300} animationOutDuration={300} animationIn="fadeIn" animationOut="fadeOut" isVisible={props.show}>
        <Container>
            <Overlay onClick={() => {setShow(false)}} />
            <Animated animateOnMount={false} animationInDuration={300} animationOutDuration={300} animationIn="slideInUp" animationOut="slideOutDown" isVisible={props.show}>
                <Card onClick={e => {e.preventDefault()}}>
                    <CloseButton onClick={() => { setShow(false) }}><MdClose /></CloseButton>
                    <MainBox>
                        <Title>{props.title}</Title>
                        {
                        props.type == 'register' ? 
                        <TermCard items={props.children}></TermCard> : props.children

                        }
                        {/* <TermCard items={props.children}></TermCard> */}
                    </MainBox>
                </Card>
            </Animated>
        </Container>
    </StyledAnimated>
};