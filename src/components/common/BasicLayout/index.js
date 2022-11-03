import React, { useContext, useEffect, useState } from 'react';

import Head from '../Head';
import Logo from '../LogoIcon';
import Footer from '../Footer';

import { Container, Content } from './styles';

export default function Layout(props) {

	return <>
		<Head title={props.title} />
		<Container>
			<Logo />
			<Content>
				{props.children}
			</Content>
			<Footer />
		</Container>
	</>
};