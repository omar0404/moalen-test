import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment/min/moment-with-locales';
import configs from '../../../configs';
import TermCard from '../../common/TermCard';
moment.locale('ar-sa');

import Layout from '../../common/Layout'

import { Container, Title} from './styles';

export default function Terms() {
	return <Layout title={"إتفاقية الخصوصية"} backLink={"/"}>
		<Container>
			<Title>إتفاقية الخصوصية</Title>
			<TermCard items={configs.companyPolices}></TermCard>
		</Container>
	</Layout>
};