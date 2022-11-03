import React, { useContext, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

import { FiCheckCircle ,FiInfo } from "react-icons/fi";
import moment from 'moment/min/moment-with-locales'
moment.locale('ar-sa');

import * as api from '../../../utils/api';
import Layout from '../../common/Layout'

import { Container , ButtonLink , Title, SubTitle, SubTitle2, StyledIcon ,ErrorIcon } from './styles';

// export async function getStaticPaths() {
// 	const res = await api.fetch('/quotations')
// 	const quotas = res.data;
// 	//console.log('hii quotas from getStaticPaths' ,quotas )
// 	const paths = quotas.map((item) => ({
// 	  params: { id: item.id },
// 	}))
// 	return { paths, fallback: false }
// } 
// export async function getStaticProps(context) {
// 	//console.log('context',context);
// 	//console.log('router.query.id',router.query.id);
// 	const res = await api.fetch(`/quotations/${context.params.id}/confirm`)
// 	const quotas = res
// 	//console.log('hii quotas from getStaticProps' ,quotas )

// 	//console.log('res',res);
// 	return {
// 	  props: {
// 		quotas
// 	  },
// 	}
// }
export default function Confirm({quotas}) {
	//const [formFields, setFeilds] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorFlag, seterrorFlag] = useState(false);
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const router = useRouter();

	const init = async () => {
		let url = `/quotations/${router.query.id}/confirm`;
		try {
			let res = await api.get(url);
			if(!res.data.error) {
				// enqueueSnackbar('', {
				// 	variant: 'success',
				// });
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

	const onChangeHandling = ()=>{}

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


//   export async function getServerSideProps (context) {
// 	const id = context.params.id;
// 	return {
// 	  props: {
// 		id,
// 	  }
// 	};
//   };