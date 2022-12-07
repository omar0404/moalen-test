import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import moment from 'moment/min/moment-with-locales'
moment.locale('ar-sa');
import fields from './fields'

import Form from '../../common/Form'
import * as api from '../../../utils/api';
import Layout from '../../common/Layout'

import { Container , FormBox} from './styles';

export default function Reject() {
	const [formFields, setFeilds] = useState([]);
	const [loading, setLoading] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	const router = useRouter();

	const init = async () => {
		setFeilds(fields);
		// let url = `/quotations/${13}/confirm?send_to=${''}`;
		// let res = await api.get(url);
		// //console.log('res',res);
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
			let res = await api.post(`/quotations/${router.query.id}/refuse`, values);
			if(!res.data.error) {
				enqueueSnackbar('تم ارسال رسالتك وسيتم الرد عليك باقرب وقت', {
					variant: 'success',
				});
				resetHandling();
				router.push("/dashboard");
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

	return <Layout title={"رفض العرض"} backLink={"/"}>
		<Container>
			<FormBox>
				<Form
						fields={formFields}
						submit={submit}
						submitLabel={"إرسال"}
						title={'يؤسفنا عدم موافقتك علي العرض '}
						onChangeHandling = {onChangeHandling}
					/>		
			</FormBox>
		</Container>
	</Layout>
};