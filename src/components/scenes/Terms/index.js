import React from 'react';

import moment from 'moment/min/moment-with-locales'
moment.locale('ar-sa');

import Layout from '../../common/Layout'
import TermCard from '../../common/TermCard'

import { Container, Title} from './styles';
import configs from '../../../configs';

export default function Terms() {
	return <Layout title="شروط الإستخدام" backLink={"/"}>
		<Container>
			<Title>  شروط الإستخدام</Title>
			<TermCard items={configs.usabilityRoles}></TermCard>
		</Container>
	</Layout>
};