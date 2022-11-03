import {useRouter} from 'next/router';
import {useState ,useEffect ,useContext } from 'react';
import { useSnackbar } from 'notistack';

import { FiCheckCircle } from "react-icons/fi";

import Layout from '../../common/Layout';
import Form from '../../common/Form';
import Loader from '../../common/Loader'

import * as api from '../../../utils/api';
import { UserContext } from '../../../containers/User'


import {Container , StyledIcon , Title} from './styles';

import fields from './fields';


export default function ProfileEdit() {
    const router = useRouter();
    const userId =  router.query.id;
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const [loading, setLoading] = useState(true);
    const [sent, setSent] = useState(false);
    const [message, setMessage] = useState('');
	const [defaultValue, setDefaultValue] = useState({});
	const [regions, setRegions] = useState([]);
	const [tags, setTags] = useState([]);
	const [categories, setCategories] = useState([]);
	const [requiredFields, setFields] = useState({});
	const {user, userType} = useContext(UserContext);

	useEffect(() => {
		userType !== 'influencer' && router.replace("/dashboard")
	},[])

    useEffect(() => {
		init();
		getInfluncerInfo();

		return () => {
			setDefaultValue({});
		  };
	}, []);


    const init = async () => {
		if(regions.length == 0) {
			let res = await api.get(`/regions`);
			setRegions(res.data.data);
			let res3 = await api.get(`/tags`);
			setTags(res3.data.data);
			if(user.categories && user.categories.length > 0 ) {
				setCategories(user.categories)
			}else {
				let catRes = await api.get(`/categories`);
				setCategories(catRes.data.data);
			}
            setLoading(false);
		}
	};

	const getInfluncerInfo = async () => {
		if(user.profileEditedData && Object.keys(user.profileEditedData).length !== 0) {
			setDefaultValue(user.profileEditedData)
		}
		else {
			setLoading(true);
				try {
				let res = await api.get(`/influencers/profile`); 
				// //let res = {"error":false,"data":{"id":260,"name":"eman","intro":"kjlkj","nationality":"","nickname":"","specialization":"kjlkj","followers_gender":1,"followers_ages":[],"followers_count_range":6,"cover":"","avatar":"","gallery":[],"tags":[{"id":12,"name":"\u0639\u0637\u0648\u0631","influence_percentage":null},{"id":20,"name":"\u0631\u064a\u0627\u062f\u0647 \u0627\u0644\u0627\u0639\u0645\u0627\u0644","influence_percentage":null}],"categories":[{"id":13,"name":"\u0633\u064a\u0627\u0631\u0627\u062a","icon":"https:\/\/www.moalen.sa\/backend\/publichttp:\/\/www.moalen.sa\/backend\/public\/storage\/46\/616704eb9a0ab_005-traffic-jam.png"},{"id":16,"name":"\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u062f\u0627\u062e\u0644\u064a \u0648\u0627\u0644\u062d\u062f\u0627\u0626\u0642","icon":"https:\/\/www.moalen.sa\/backend\/publichttp:\/\/www.moalen.sa\/backend\/public\/storage\/49\/61670544bdcc9_001-interior-design.png"}],"platforms":[],"stats":""},"message":"\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u0649"}
				// let res ={}
				//  res.data = 
				// {"error":false,"data":{"id":260,"name":"sssssss","intro":"ssssssss","nationality":"","nickname":"","specialization":"sssssssssss","followers_gender":1,"followers_ages":[""],"followers_count_range":1,"cover":"https:\/\/www.moalen.sa\/backend\/public\/storage\/455\/sun.png","avatar":"","gallery":["https:\/\/www.moalen.sa\/backend\/public\/storage\/456\/sun.png"],"tags":[{"id":10,"name":"\u062a\u0642\u0646\u064a\u0629","influence_percentage":null}],"categories":[{"id":21,"name":"\u0627\u0644\u0644\u064a\u0627\u0642\u0629 \u0627\u0644\u0628\u062f\u064a\u0629 \u0648\u0627\u0644\u0635\u062d\u0647","icon":""}],"platforms":[{"id":1,"name":"youtube","logo":"https:\/\/www.moalen.sa\/backend\/public\/storage\/69\/6167358cb9778_002-youtube.png","account":"ssssssssss","followers_count":5555555555,"males":50,"females":50,"followers_ages":[],"ads_types":[{"type":"\u0641\u064a\u062f\u064a\u0648 \u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0646\u062a\u062c\/\u062e\u062f\u0645\u0629","price":"10"},{"type":"\u0625\u0639\u0644\u0627\u0646 \u063a\u064a\u0631 \u0645\u0628\u0627\u0634\u0631","price":"20"},{"type":"\u0631\u0639\u0627\u064a\u0629","price":"30"},{"type":"\u0625\u0639\u0644\u0627\u0646 \u0645\u0628\u0627\u0634\u0631","price":"40"}]}],"stats":""},"message":"\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u0649"}				
				
				if(!res.data.error && res.data.data) {
					setDefaultValue(res.data.data);
				}
			}
			catch (err) {
			}
			setLoading(false);
		}
	}


    const submit = async (values) => {
		let imgArrTypes =['cover','avatar'];
		if(loading)
			return;
		setDefaultValue(values);
		let formData = {...values} //JSON.parse(JSON.stringify(values));
		if(!!formData.categories && formData.categories.length > 0 ) {
			formData.categories = formData.categories.map(item => item.value || item.id);
		}
		if(!!formData.tags && formData.tags.length > 0 ) {
			formData.tags = formData.tags.map(item => item.value || item.id);
		}
		if(!!formData.regions && formData.regions.length > 0 ) {
			formData.regions = formData.regions.map(item => item.value || item.id);
		}
		//api
		try {
			setLoading(true);
			formData.platforms = formData.platforms && formData.platforms.length>0 && formData.platforms.filter(item => (!!item.account && item.account != ""));
			var bodyFormData = new FormData();
			for (let key in formData) {
				let value = formData[key];
				if(value) {
					if(key == 'platforms') {
						//bodyFormData.append(`${key}`, JSON.stringify(value));
						value.map((platform , index) => {
							for(let itemKey in platform) {
								let itemVal = platform[itemKey];
								if(Array.isArray(itemVal))
								{
									itemVal.forEach((item,i) => {
										for(let subItemKey in item ) {
											bodyFormData.append(`${key}[${index}][${itemKey}][${i}][${subItemKey}]` , item[subItemKey])
										}
									})
								} else {
									bodyFormData.append(`${key}[${index}][${itemKey}]`, itemVal) ;
								}		
							}
						})
					}
					else if(Array.isArray(value) && key !== 'platforms'){
						value.forEach((item, i)=>{
							if (key === 'gallery' && typeof(item) == 'string') {
								///delete value[i];
							}
							else {
								bodyFormData.append(`${key}[${i}]`, item);
							}
						});
					} else {
						if(imgArrTypes.includes(key) && typeof(value) === 'string') {
							delete formData[key];
						} else {
							bodyFormData.append(key, value);
						}
					}
				}
			}
			for (var value of bodyFormData.values()) {
			}

			
			let res = await api.post("/influencers/profile", bodyFormData, "", { "Content-Type": "multipart/form-data" });
			console.log('res',res);
			if(!res.data.error) {
				setSent(true);
				setMessage(res.data.message)
			} else {
				setDefaultValue(values);
				enqueueSnackbar(res.data.message, {
					variant: 'error',
					duration: 1000
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

	const saveDataHandler = async (values) => {
		user.editProfile && user.editProfile(values);
		user.editProfile && enqueueSnackbar('تم حفظ البيانات', {
			variant: 'success',	
		});
	}

	if (sent) {
		return <Layout isInfluncer={true}>
			<Container>
				<StyledIcon><FiCheckCircle /></StyledIcon>
				<Title>{message}</Title>
			</Container>
		</Layout>
	}

	if (loading) {
		return <Layout isInfluncer={true}>
			<Container>
				<Loader />
			</Container>
		</Layout>
	}
	const onChangeHandling = (values) => {
		setDefaultValue(values);
	}

    return(
        <Layout title={"تعديل "} isInfluncer={true} backLink={"/"}>
		    <Container>
                <Form
                defaultValue={defaultValue}
                fields={fields(categories,tags,regions)}
                submit={submit}
				saveData= {saveDataHandler}
                onChangeHandling = {onChangeHandling}
                submitLabel={"حفظ التغيرات"}
				saveLabel={"حفظ ومتابعه لاحقا"}
		/>
            </Container>
        </Layout>
    );
}