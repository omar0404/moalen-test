import React from 'react';

import { Container, Title, Content, Header } from './styles';

export default function Card(props) {

	return <Container {...props}>
		{!!props.title && <Header className="header">
			<Title className="title">{props.title}</Title>
			{props.extra}
		</Header>}
		<Content className="content">
			{props.children}
		</Content>
	</Container>
};