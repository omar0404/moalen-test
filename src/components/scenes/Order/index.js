import React, { useState } from 'react';
import { useRouter } from 'next/router'

import { FiCheckCircle } from "react-icons/fi";
import moment from 'moment/min/moment-with-locales'
moment.locale('ar-sa');

import * as api from '../../../utils/api';

import Layout from '../../common/Layout'
import Card from '../../common/Card'
import Loader from '../../common/Loader'
import Button from '../../common/Button'

import { Container, SentContent, SentSubTitle, SentIcon,Title, SubTitle2 } from './styles';


export default function Cart() {
	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);
	const router = useRouter();

	const submit = async () => {
		let res = await api.get(`/quotations/${router.query.id}/confirm`, {

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
					<Title>تم إرسال الفاتورة</Title>
					<SentSubTitle>تم إرسال الفاتورة إلى بريدك الإلكتروني</SentSubTitle>
				</SentContent>
			</Container>
		</Layout>
	}

	return <Layout title={"طلباتي"} backLink={"/"}>
		<Container>
			<Title>الرد على عرض السعر #{router.query.id}</Title>
			<Card>
				<SubTitle2>
					بطلب الفاتورة أنت توافق على عرض السعر وعلى <a href="/terms" target="_blank">إتفاقية وشروط الإستخدام</a>.
				</SubTitle2>
				<Button primary={true} onClick={()=>{submit()}}>طلب الفاتورة</Button>
			</Card>
		</Container>
	</Layout>
};