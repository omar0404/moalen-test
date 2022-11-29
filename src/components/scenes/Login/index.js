import React, { useContext, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';

import { useRouter } from 'next/router'
import Link from 'next/link';

import * as api from '../../../utils/api';

import { UserContext, } from '../../../containers/User'

import Layout from '../../common/LoginLayout'
import Form from '../../common/Form'
import Loader from '../../common/Loader'

import fields from './fields';
//import NextSnapPixel from 'next-snapchat-pixel';


//import ReactPixel from 'react-snapchat-pixel';
///import NextSnapPixel from 'next-snapchat-pixel';


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
		const options = {
			debug: false, 		// enable logs
		};
		/* import('next-snapchat-pixel')
			.then((x) => x.default)
			.then((NextSnapPixel) => {
			NextSnapPixel.init('init', 'deb57985-3e44-4f32-9ed5-78d81bb859f7', options);			
			//ReactPixel.pageView(); 					// For tracking page view
			NextSnapPixel.track('PAGE_VIEW')
		}) */

		// import('react-snapchat-pixel')
		// .then((x) => x.default)
		// .then((ReactPixel) => {
		// ReactPixel.init('init', 'deb57985-3e44-4f32-9ed5-78d81bb859f7', options);			
		// //ReactPixel.pageView(); 					// For tracking page view
		// ReactPixel.track('PAGE_VIEW')
		// });

	};

	/**
	 * 
	 * <!-- Snap Pixel Code -->
		<script type='text/javascript'>
		(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
		{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
		a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
		r.src=n;var u=t.getElementsByTagName(s)[0];
		u.parentNode.insertBefore(r,u);})(window,document,
		'https://sc-static.net/scevent.min.js');

		snaptr('init', 'deb57985-3e44-4f32-9ed5-78d81bb859f7', {
		'user_email': '__INSERT_USER_EMAIL__'
		});

		snaptr('track', 'PAGE_VIEW');

		</script>
		<!-- End Snap Pixel Code -->
	 */



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