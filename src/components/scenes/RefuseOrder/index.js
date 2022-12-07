import React, {  useState } from 'react';
import { useRouter } from 'next/router'

import {FiCheckCircle } from "react-icons/fi";
import moment from 'moment/min/moment-with-locales'
moment.locale('ar-sa');

import * as api from '../../../utils/api';

import Layout from '../../common/Layout'
import Card from '../../common/Card'
import Loader from '../../common/Loader'
import Button from '../../common/Button'

import { Container, SentContent, SentSubTitle, SentIcon,  Title, SubTitle2} from './styles';


export default function Cart() {
	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);
	const router = useRouter();

	const submit = async () => {
		let res = await api.post(`/quotations/${router.query.id}/refuse`, {

		});
		setSent(true);
	};

	if (loading) {
		return <Layout title={"طلباتي"} backLink={"/"}>
			<Container>
				<SentContent>
					<Loader />
				</SentContent>
			</Container>
		</Layout>
	}

	if (sent) {
		return <Layout title={"طلباتي"} backLink={"/"}>
			<Container>
				<SentContent>
					<SentIcon><FiCheckCircle /></SentIcon>
					<Title>تم إستلام ردك</Title>
					<SentSubTitle>سنقوم بالتواصل معك قريبًا.</SentSubTitle>
				</SentContent>
			</Container>
		</Layout>
	}

	return <Layout title={"طلباتي"} backLink={"/"}>
		<Container>
			<Title>الرد على عرض السعر #{router.query.id}</Title>
			<Card>
				<SubTitle2>
					إن كنت لا توافق على عرض السعر إستخدم الخيار في الأسفل
				</SubTitle2>
				<Button primary={true} onClick={()=>{submit()}}>رفض عرض السعر</Button>
			</Card>
		</Container>
	</Layout>
};