import React from 'react';

import configs from '../../../configs';

import { Container } from './styles';

export default function Footer(props) {

	return <Container>
		<span>© {new Date().getFullYear()} جميع الحقوق محفوظة. {configs.app.name}.</span>
		<a href="/privacy">إتفاقية الخصوصية</a>
		<a href="/terms">شروط الإستخدام</a>
	</Container>
};