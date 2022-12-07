import React, {useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { FiCheckCircle } from "react-icons/fi";


import * as api from '../../../utils/api';

import Layout from '../../common/LoginLayout'
import Form from '../../common/Form'
import Loader from '../../common/Loader'
import ModalCompoent from '../../common/Modal'


import fields from './fields';
import configs from '../../../configs'

import { Container, LinkLine, Links, Title, StyledIcon } from './styles';

export default function Register(props) {
	const { enqueueSnackbar } = useSnackbar();
	const router = useRouter()
	const [loading, setLoading] = useState(true);
	const [companyFields, setCompanyFields] = useState([]);
	const [sent, setSent] = useState(false);
	const [defaultValue, setDefaultValue] = useState({});
	const [modal, setModal] = useState(false);
	const [modalVal, setModalVal] = useState([]);
	const [modalTitle, setModalTitle] = useState([]);
	const routerQuery = router.query
	const companyRules = [
		{ key: 'mainScript', title: 'بمجرد تسجيلك انت توافق علي ' },
		{ key: 'companyPolices', title: ' سيايه الخصوصيه' },
		{ key: 'usabilityRoles', title: '  شروط الاستخدام ' }
	]

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		let res = await api.get("/fields");
		setCompanyFields(res.data.data);
		setLoading(false);
	};
	const submit = async (values) => {
		if (values.password != values.password_confirmation) {
			enqueueSnackbar('تأكيد كلمة المرور لا يتطابق مع كلمة المرور.', {
				variant: 'error',
			});
			return;
		}

		setLoading(true);
		//api
		setDefaultValue(values);
		try {
			values.registerd_from = "web";
			let res = await api.post("/register", values)
			if (!res.data.error) {
				setSent(true);
				setTimeout(() => {
					router.push({
						pathname: '/login',
						query: routerQuery
					}, '/login')

				}, 800);
			} else {
				setDefaultValue(values);
				enqueueSnackbar(res.data.message, {
					variant: 'error',
				});
			}
		} catch (err) {
			setDefaultValue(values);
			enqueueSnackbar('حصل خطأ أثناء التسجيل! الرجاء المحاولة مرة أخرى.', {
				variant: 'error',
			});
		}
		setLoading(false);
	};

	if (sent) {
		return <Layout>
			<Container>
				<StyledIcon><FiCheckCircle /></StyledIcon>
				<Title>تم التسجيل، سيتم تحويلك لتسجيل الدخول.</Title>
			</Container>
		</Layout>
	}

	if (loading) {
		return <Layout>
			<Container>
				<Loader />
			</Container>
		</Layout>
	}
	const onChangeHandling = (values) => {
		setDefaultValue(values);
	}

	const modalHandling = (value) => {
		if (value.key !== 'mainScript') {
			setModalVal(configs[value.key])
			setModal(true);
			setModalTitle(value.title)
		}
	}
	const updateShow = (status) => {
		setModal(status)
	}
	if (modal) {
		return <ModalCompoent type={"register"} children={modalVal} show={modal} title={modalTitle} updateShow={updateShow}></ModalCompoent>
	}

	return <Layout
		title={"انضم كمعلن"}
		mainLink={{
			label: "انضم معنا كمؤثر في اكبر منصه للتسويق عبر المؤثرين سجل الان",
			link: "/register_influencer"
		}}
		backLink={"/"}>
		<Form
			defaultValue={defaultValue}
			fields={fields(companyFields)}
			companyPolices={companyRules}
			submit={submit}
			onChangeHandling={onChangeHandling}
			openModal={modalHandling}
			submitLabel={"تسجيل"}
			title={""}
		/>
		<Links>
			<LinkLine>
				لديك حساب علامة تجارية؟ <Link href="/login">سجل دخول الآن</Link>
			</LinkLine>
		</Links>
	</Layout>;
};