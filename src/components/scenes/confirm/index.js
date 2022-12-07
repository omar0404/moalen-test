import React, {useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

import { FiCheckCircle ,FiInfo } from "react-icons/fi";
import moment from 'moment/min/moment-with-locales'
moment.locale('ar-sa');

import * as api from '../../../utils/api';
import Layout from '../../common/Layout'

import { Container , ButtonLink , Title, SubTitle, SubTitle2, StyledIcon ,ErrorIcon } from './styles';

export default function Confirm({quotas}) {
	const [loading, setLoading] = useState(false);
	const [errorFlag, seterrorFlag] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	const router = useRouter();

	const init = async () => {
		let url = `/quotations/${router.query.id}/confirm`;
		try {
			let res = await api.get(url);
			if(!res.data.error) {
				seterrorFlag(false);
			} else {
				enqueueSnackbar(res.message, {
					variant: 'error',
				});
				seterrorFlag(true);
			}
			setLoading(false);
			
		} catch (err) {
			if(!!err.message) {
				enqueueSnackbar(err.message, {
					variant: 'error',
				});
				seterrorFlag(true);
			} else {
				enqueueSnackbar('حصل خطأ أثناء تسجيل الدخول! الرجاء المحاولة مرة أخرى.', {
					variant: 'error',
				});
				seterrorFlag(true);
			}
			setLoading(false);
		}
	}
	useEffect(() => {
		init();
	}, []);

	return <Layout title={"موافقه العرض"} backLink={"/"}>
		<Container>
			{!errorFlag && <div><Title><StyledIcon><FiCheckCircle /></StyledIcon> تم التاكيد </Title>
			<SubTitle> سيقوم فريقنا بارسال الفاتوره على الايميل </SubTitle>
			<SubTitle2>شكرا لك</SubTitle2></div>}
			{errorFlag && <div>
				<Title><ErrorIcon><FiInfo /></ErrorIcon>  خطأ </Title>
				<SubTitle>حصل خطأ ! الرجاء المحاولة مرة أخرى.</SubTitle>
				<ButtonLink onClick={() =>init()}>موافق علي العرض</ButtonLink>
				</div>}
		</Container>
	</Layout>
};
