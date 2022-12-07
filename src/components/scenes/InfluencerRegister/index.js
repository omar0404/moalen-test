import React, { useContext, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router'
import { FiCheckCircle } from "react-icons/fi";
import ModalCompoent from '../../common/Modal'

import * as api from '../../../utils/api';

import { UserContext, } from '../../../containers/User'

import Layout from '../../common/LoginLayout'
import Form from '../../common/Form'
import Loader from '../../common/Loader'

import fields from './fields'
import configs from '../../../configs'



import { Container, Links, Title, StyledIcon } from './styles';

export default function InfluencerRegister() {
	const { enqueueSnackbar } = useSnackbar();
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);
	const [defaultValue, setDefaultValue] = useState({});
	const [tags, setTags] = useState([]);
	const [categories, setCategories] = useState([]);
	const [modal,setModal] = useState(false);
	const [modalVal,setModalVal] = useState([]);
	const [modalTitle,setModalTitle] = useState([]);
	const user = useContext(UserContext);


	const companyRules = [
		{key: 'mainScript' , title: 'بمجرد تسجيلك انت توافق علي '},
		{key: 'companyPolices' , title: ' سيايه الخصوصيه'},
		{key: 'usabilityRoles' , title: '  شروط الاستخدام '}
	]

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		let catRes = await api.get("/categories")
		setCategories(catRes.data.data);
		let tagsRes = await api.get("/tags")
		setTags(tagsRes.data.data);
	};

	const submit = async (values) => {
		if(loading)
			return;
		setLoading(true);
		setDefaultValue(values);
		if(!!values.categories && values.categories.length > 0 && !!values.categories[0].value) {
			values.categories = values.categories.map(item => item.value);
			values.tags = values.tags.map(item => item.value);
		}

		//api
		try {
			//values.platforms = values.platforms.filter(item => (!!item.account && item.account != ""));
			var bodyFormData = new FormData();
			for (let key in values) {
				let value = values[key];
				if (key != "avatar") {
					if(key == 'platforms') {
						//bodyFormData.append(`${key}`, JSON.stringify(value));
					}
					else if(Array.isArray(value) && key != 'platforms'){
						value.forEach((item, i)=>{
							bodyFormData.append(`${key}[${i}]`, item);
						});
					} else {
						bodyFormData.append(key, value);
					}
				}
			}
			if (!!values["avatar"]) {
				bodyFormData.append('avatar', values["avatar"]);
			}
			for (var value of bodyFormData.values()) {
			}
			
			let res = await api.post("/influencers", bodyFormData, "", { "Content-Type": "multipart/form-data" })			
			if(!res.data.error) {
				setSent(true);
				user.login(res.data.data);				
				router.push('/profileEdit')
			} else {
				enqueueSnackbar(res.data.message, {
					variant: 'error',
					duration: 1000
				});
			}
		} catch (err) {
			enqueueSnackbar('حصل خطأ أثناء التسجيل! الرجاء المحاولة مرة أخرى.', {
				variant: 'error',
				
			});
		}
		setLoading(false);
	};

	const onChangeHandling = (values) => {
		setDefaultValue(values);
	}

	const modalHandling = (value) => {
		if(value.key !== 'mainScript') {
			setModalVal(configs[value.key]);
			setModal(true);
			setModalTitle(value.title)
		}	 
	}
	const updateShow= (status)=> {
		setModal(status)
	}
	if(modal) {
		return <ModalCompoent children={modalVal} type={"register"} title={modalTitle} show={modal} updateShow={updateShow}></ModalCompoent> 
	}
	if (sent) {
		return <Layout>
			<Container>
				<StyledIcon><FiCheckCircle /></StyledIcon>
				<Title>سعيدين بإنضمامك معنا في معلن ، سيتم تحويلك الى ملفك الشخصي لاستكمال البيانات المطلوبه</Title>
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

	return <Layout
	title={"انضم كمؤثر"}
	mainLink={{
		label: "سجل كعلامة تجارية او وكالة",
		link: "/register"
	}}
	backLink={"/"}>
		<Form
			defaultValue={defaultValue}
			fields={fields(tags, categories)}
			companyPolices ={companyRules}
			submit={submit}
			onChangeHandling = {onChangeHandling}
			openModal={modalHandling}
			submitLabel={"إرسال"}
			title={"التسجيل كمؤثر في مواقع التواصل"}
		/>
		<Links>

		</Links>
	</Layout>;
};