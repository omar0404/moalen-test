import React, { useContext, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import fields from './fields'


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
import { FaMapMarker, FaMapMarkerAlt,FaPhoneAlt , FaEnvelope , FaClock} from "react-icons/fa";


import { Container , FormBox , ContactsBox,BoxItem , Content, DeleteIcon, SentContent, SentSubTitle, SentIcon, InfluencerContent, PlatformRow, PlatformRowContent, Title, SubTitle, SubTitle2, HeaderContent, InfluencerPlatform, Avatar, InfluencerName, StyledIcon } from './styles';

export default function Cart() {
	const [formFields, setFeilds] = useState([]);
	const [loading, setLoading] = useState(false);
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const router = useRouter();

	const init = async () => {
		setFeilds(fields);
	}
	useEffect(() => {
		init();
	}, []);

	const resetHandling = () => {
		Array.from(document.querySelectorAll("input")).forEach(
			input => {
				input.value = input.type == 'tel' ? +966 : "";
			}
		  );
		  document.querySelectorAll("textarea")[0].value = "";  
	}
	const submit = async (values) => {
		setLoading(true);
		try {
			let res = await api.post("/contact", values);
			if(!res.data.error) {
				enqueueSnackbar('تم ارسال رسالتك وسيتم الرد عليك باقرب وقت', {
					variant: 'success',
				});
				resetHandling();
			} else {
				if(!!res.data.message) {
					enqueueSnackbar(res.data.message, {
						variant: 'error',
					});
				} else {
					enqueueSnackbar('حصل خطأ! الرجاء المحاولة مرة أخرى.', {
						variant: 'error',
					});
				}
				setLoading(false);
			}
		} catch (err) {
			if(!!err.message) {
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
	const onChangeHandling = ()=>{}

	return <Layout title={"تواصل معنا"} backLink={"/"}>
		<Container>
			<FormBox>
				<Form
					fields={formFields}
					submit={submit}
					submitLabel={"إرسال"}
					title={"تواصل معنا"}
					onChangeHandling = {onChangeHandling}
				/>
			</FormBox>
			<ContactsBox>
				<BoxItem>
					<StyledIcon><FaMapMarkerAlt /></StyledIcon>
					<p>المملكه العربيه السعودية</p>
				</BoxItem>
				<BoxItem>
					<StyledIcon><FaPhoneAlt /></StyledIcon>
					{/* <p>666-22417522+</p>
					<p>666-94416670+</p> */}
					<p>6545 812 55 966+</p>
				</BoxItem>
				<BoxItem>
					<StyledIcon> <FaEnvelope /></StyledIcon>
					<p> support@moalen.sa</p>
				</BoxItem>
				{/* <BoxItem>
					<StyledIcon><FaClock /></StyledIcon>
					<p>الاحد-الخميس: 9-1 ظهرا ومن 4-7 مساءا</p>
					<p>الجمعة: الراحة الاسبوعية</p>
				</BoxItem> */}
			</ContactsBox>
			
		</Container>
	</Layout>
};