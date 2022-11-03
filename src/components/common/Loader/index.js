import React from 'react';
import { Container, Loader } from './styles';

import configs from '../../../configs'

export default function LoaderComponent(props) {

	return <Container>
		<Loader>
			<div></div><div></div><div></div><div></div>
		</Loader>
	</Container>
};