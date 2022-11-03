import React, { useContext, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router'

import { FiCheck, FiCheckCircle } from "react-icons/fi";
import { FaYoutube, FaSnapchatGhost, FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaTimes } from "react-icons/fa";
import moment from 'moment/min/moment-with-locales'
moment.locale('ar-sa');

import * as api from '../../../utils/api';

import { UserContext, } from '../../../containers/User'

import Layout from '../../common/Layout'
import Card from '../../common/Card'
import Form from '../../common/Form'
import Loader from '../../common/Loader'
import Collapse from '../../common/Collapse'

const company_types = ["شركة", "وكالة"];

import { Container, Content, DeleteIcon, StatusText, SentContent, SentSubTitle, SentIcon, InfluencerContent, PlatformRow, PlatformRowContent, Title, SubTitle, SubTitle2, HeaderContent, InfluencerPlatform, Avatar, InfluencerName, StyledIcon } from './styles';

export default function Cart() {
	const user = useContext(UserContext);
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [companyFields, setCompanyFields] = useState([]);
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const router = useRouter();
	const [data, setData] = useState({});

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		setLoading(true);
		let res2 = await api.get("/fields");
		setCompanyFields(res2.data.data);
		let res = await api.get(`/profile`);
		setData(res.data.data);
		setLoading(false);
	};

	const submit = async (values) => {
		setLoading(true);
		let res = await api.post(`/profile`, values);
		user.updateUser(values)
		router.push("/dashboard")
		setLoading(false);
	}

	if (loading) {
		return <Layout title={"ملفي"} backLink={"/"}>
			<Container>
				<SentContent>
					<Loader />
				</SentContent>
			</Container>
		</Layout>
	}

	return <Layout title={"ملفي"} backLink={"/"}>
		<Container>
			<Card title="ملفي">
				<Form
					defaultValue={data}
					fields={{
						company_name: {
							label: 'إسم الشركة',
							type: 'text',
							required: true
						},
						company_type: {
							label: 'النوع',
							type: 'select',
							options: [{label: "الرجاء الإختيار", value: ""}].concat(company_types.map(item => ({label: item, value: item}))),
							required: true
						},
						company_field: {
							label: 'مجال الشركة',
							type: 'select',
							options: [{label: "الرجاء الإختيار", value: ""}].concat(companyFields.map(item => ({label: item, value: item}))),
							required: true
						},
						name: {
							label: 'الشخص المسؤول',
							type: 'text',
							required: true
						},
						website: {
							label: 'الموقع الإلكتروني',
							type: 'text',
							required: false
						},
					}}
					submitLabel="ارسال"
					submit={submit}
				/>
			</Card>
		</Container>
	</Layout>
};