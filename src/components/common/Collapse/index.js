import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaTimes, FaTrashAlt, FaUndoAlt } from "react-icons/fa";
import { Animated } from "react-animated-css";

import { Container, Header, DeleteContainer, HeaderContent, DeleteIcon, HeaderActions, Content, ContentContainer } from './styles';

export default function Collapse(props) {
	const [show, setShow] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(false);

	return <Container {...props}>
		<Header>
			<HeaderActions onClick={() => { setShow(!show) }}>{show ? <FaChevronUp /> : <FaChevronDown />}</HeaderActions>
			<HeaderContent onClick={() => { setShow(!show) }}>{props.head}</HeaderContent>
			{!props.hideDelete && <DeleteContainer>
				{
					confirmDelete
						?
						<>
							<DeleteIcon onClick={e =>{ e.preventDefault(); setConfirmDelete(false); }}><FaUndoAlt /></DeleteIcon>
							<DeleteIcon active={true} onClick={e =>{ e.preventDefault(); setConfirmDelete(false); props.delete(); }}><FaTrashAlt /></DeleteIcon>
						</>
						:
						<>
							<DeleteIcon onClick={e =>{ e.preventDefault(); setConfirmDelete(true); }}><FaTimes /></DeleteIcon>
						</>
				}
			</DeleteContainer>}
		</Header>
		{show && <ContentContainer>
			<Animated animationInDuration={300} animationOutDuration={300} animationIn="slideInDown" animationOut="slideInDown" isVisible={show}>
				<Content>
					{props.children}
				</Content>
			</Animated>
		</ContentContainer>}
	</Container>
};