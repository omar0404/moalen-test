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
import Button from '../../common/Button'

import { Container, Content, DeleteIcon, StatusText, SentContent, SentSubTitle, SentIcon, InfluencerContent, PlatformRow, PlatformRowContent, Title, SubTitle, SubTitle2, HeaderContent, InfluencerPlatform, Avatar, InfluencerName, StyledIcon } from './styles';

const PLATFORM_ICONS = {
	youtube: <FaYoutube />,
	snapchat: <FaSnapchatGhost />,
	twitter: <FaTwitter />,
	instagram: <FaInstagram />,
	tiktok: <FaTiktok />,
	facebook: <FaFacebookF />
};

const PLATFORM_NAMES = {
	youtube: "يوتيوب",
	snapchat: "سنابشات",
	twitter: "تويتر",
	instagram: "إنستاقرام",
	tiktok: "تيكتوك",
	facebook: "فيسبوك"
};


export default function Cart() {
	const user = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const router = useRouter();
	const [data, setData] = useState([]);

	useEffect(() => {
		init();
	}, []);


	const init = async () => {

	};

	const submit = async () => {
		let res = await api.post(`/quotations/${router.query.id}/refuse`, {

		});
		////console.log(res.data);
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