import React, { useContext, useState } from 'react';
import { useSnackbar } from 'notistack';

import { useRouter } from 'next/router'
import Link from 'next/link';

import * as api from '../../../utils/api';

import { UserContext, } from '../../../containers/User'

import Layout from '../../common/LoginLayout'
import Form from '../../common/Form'
import Loader from '../../common/Loader'

import fields from './fields';
import { Container, LinkLine, Links } from './styles';

export default function Flow() {
	const { enqueueSnackbar } = useSnackbar();
	const router = useRouter()
	const [loading, setLoading] = useState(false);
	const user = useContext(UserContext);

	const submit = async (values) => {
		setLoading(true);
		try {
			let res = await api.post("/login", values);
			if (!res.data.error) {
				user.login(res.data.data);
				if (router.query && router.query.from) {
					router.push({ pathname: router.query.from, query: router.query }, router.query.from);
				} else {
					router.push('./')
				}
			} else {
				if (!!res.data.message) {
					enqueueSnackbar(res.data.message, {
						variant: 'error',
					});
				} else {
					enqueueSnackbar('حصل خطأ أثناء تسجيل الدخول! الرجاء المحاولة مرة أخرى.', {
						variant: 'error',
					});
				}
				setLoading(false);
			}
		} catch (err) {
			if (!!err.message) {
				enqueueSnackbar(err.message, {
					variant: 'error',
				});
			} else {
				enqueueSnackbar('حصل خطأ أثناء تسجيل الدخول! الرجاء المحاولة مرة أخرى.', {
					variant: 'error',
				});
			}
			setLoading(false);
		}
	};

	if (loading) {
		return <Layout>
			<Container>
				<Loader />
			</Container>
		</Layout>
	}
	console.log("login-router", router.query.from)
	const onChangeHandling = () => { }
	return <Layout
		title={"تسجيل الدخول"}
		backLink={"/"}
		mainLink={{
			label: "انضم معنا كمؤثر في اكبر منصه للتسويق عبر المؤثرين سجل الان",
			link: "/register_influencer"
		}}
	>
		<Form
			fields={fields}
			submit={submit}
			submitLabel={"تسجيل الدخول"}
			title={"تسجيل الدخول "}
			onChangeHandling={onChangeHandling}
		/>
		<Links>
			<LinkLine>
				ليس لديك حساب علامة تجارية؟ <Link
					as={"/register"}
					href={{ pathname: "/register", query: router.query, }}>سجل حساب جديد</Link>
			</LinkLine>
			<LinkLine>
				نسيت كلمة المرور؟ <Link href="/reset_password">تغيير كلمة المرور</Link>
			</LinkLine>
		</Links>
	</Layout>;
};