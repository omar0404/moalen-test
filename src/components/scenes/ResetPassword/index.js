import React, { useContext, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';

import { useRouter } from 'next/router'
import Link from 'next/link';

import * as api from '../../../utils/api';

import { UserContext, } from '../../../containers/User'

import Layout from '../../common/LoginLayout'
import Form from '../../common/Form'
import Loader from '../../common/Loader'

import fields from './fields'


import { Container, Grid, LinkLine, Links, Title, StyledIcon } from './styles';

export default function Flow() {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const router = useRouter()
	const [loading, setLoading] = useState(false);
	const user = useContext(UserContext);

	useEffect(() => {
		init();
	}, []);

	const init = async () => {

	};

	const submit = async (values) => {
		setLoading(true);
		try {
			let res = await api.post("/passwords/forgot", values);
			if(!res.data.error) {
				enqueueSnackbar('تم إرسال بريد إلكتروني بتفاصيل تغيير كلمة المرور', {
					variant: 'success',
				});
			} else {
				enqueueSnackbar('حصل خطأ أثناء الإتصال بالسيرفر!.', {
					variant: 'error',
				});
			}
		} catch (err) {
			enqueueSnackbar('حصل خطأ أثناء الإتصال بالسيرفر!.', {
				variant: 'error',
			});
		}
		setLoading(false);
	};

	if (loading) {
		return <Layout>
			<Container>
				<Loader />
			</Container>
		</Layout>
	}

	return <Layout
	title={"اعادة تعيين كلمة المرور"}
	backLink={"/"}
	mainLink={{
		label: "انضم معنا كمؤثر في اكبر منصه للتسويق عبر المؤثرين سجل الان",
		link: "/register_influencer"
	}}
	>
		<Form
			fields={fields}
			submit={submit}
			submitLabel={"ارسال"}
			title={"اعادة تعيين كلمة المرور"}
		/>
		<Links>
			<LinkLine>
				لديك حساب علامة تجارية؟ <Link href="/login">سجل دخول الآن</Link>
			</LinkLine>
		</Links>
	</Layout>;
};