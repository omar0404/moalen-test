import React, { useContext, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router'

import { FiCheck, FiCheckCircle } from "react-icons/fi";
import { FaYoutube, FaLink, FaSnapchatGhost, FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaTimes } from "react-icons/fa";
import moment from 'moment/min/moment-with-locales'
moment.locale('ar-sa');

import * as api from '../../../utils/api';
import timeoutPromise from '../../../utils/timeoutPromise'
import getImage from '../../../utils/getImage';

import { UserContext, } from '../../../containers/User'

import Layout from '../../common/Layout'
import Card from '../../common/Card'
import Form from '../../common/Form'
import Input from '../../common/Input'
import Loader from '../../common/Loader'
import Collapse from '../../common/Collapse'

import { Container, Content, DeleteIcon, TotalLabel, SentContent, TitleContainer, SentSubTitle, SentIcon, InfluencerContent, PlatformRow, PlatformRowContent, Title, SubTitle, SubTitle2, HeaderContent, InfluencerPlatform, Avatar, InfluencerName, StyledIcon } from './styles';

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
	instagram: "انستقرام",
	tiktok: "تيكتوك",
	facebook: "فيسبوك"
};

export default function Cart() {
	const user = useContext(UserContext);
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [total, setTotal] = useState("");
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const [message, setMessage] = useState('تم إستلام طلب السعر، وسنقوم بالتواصل معك قريبًا');
	const [defaultValues , setDefaultValue] = useState({
		company_name: user.user.company_name,
		company_email: user.user.email,
		company_mobile: user.user.mobile,
		company_field: user.user.company_field,
		name: user.user.name
	})
	const router = useRouter()

	useEffect(() => {
		let total = 0;
		Object.keys(user.cart).map((key, i) => {
			let influencer = user.cart[key];
			influencer.platforms && influencer.platforms.length>0 && 
			influencer.platforms.forEach(item => {
				item.followers_count? total += item.followers_count : null;
			}); 
		});
		if (total > 1000000) {
			total = (Math.round(total / 100000) / 10) + "m";
		} else if (total > 1000) {
			total = (Math.round(total / 100) / 10) + "k";
		}
		setTotal(total);
	}, [user.cart]);

	useEffect(() => {
		// setDefaultValue({
		// 	company_name: user.user.company_name,
		// 	company_email: user.user.email,
		// 	company_mobile: user.user.mobile,
		// 	company_field: user.user.company_field,
		// 	name: user.user.name
		// });
		// console.log('defaultValues',defaultValues)
	},[])

	const deleteSubItem = async (id, i) => {
		let cartObject = JSON.parse(JSON.stringify(user.cart));
		cartObject[id].adOptions.splice(i, 1);
		user.changeCart(cartObject);
	};

	const changeSubItem = async (id, key, value) => {
		let cartObject = JSON.parse(JSON.stringify(user.cart));
		cartObject[id][key] = value;
		user.changeCart(cartObject);
	};

	const submit = async (values) => {
		
		setLoading(true);
		values['company_field'] = user.user.company_field;
		
		//clear cart
		/* let cart = await api.get("/cart");
		for (let i in cart.data.data) {
			let item = cart.data.data[i];
			await api.get(`/influencers/${item.id}/remove_from_cart`);
			await timeoutPromise(100);
		} */
		/* let newCart = Object.keys(user.cart).map(key => ({ ...user.cart[key] }));
		for (let i in newCart) {
			let item = newCart[i];
			let itemData = item.adOptions.filter(i => i.active).map(item => ({
				publish_date: fixNum(moment(item.publish_date).format("YYYY-MM-Do")),
				ads_types: [item.ads_types],
				platform_id: item.platform_id
			}))

			let restemp = await api.post(`/influencers/${item.id}/add_to_cart`, { platforms: itemData });
			await timeoutPromise(100);
		} */

		var bodyFormData = new FormData();
		for (let key in values) {
			let value = values[key];
			if (key != "attachement") {
				bodyFormData.append(key, value);
			}
		}
		if (!!values["attachement"]) {
			bodyFormData.append('attachments[]', values["attachement"]);
		}
		setDefaultValue(values)
		await timeoutPromise(400);
		let res3 = await api.post(`/ads`, bodyFormData, "", { "Content-Type": "multipart/form-data" });
		if (!!res3.data.error) {
			setLoading(false);
			enqueueSnackbar(res3.data.message, {
				variant: 'error',
			});
			setSent(false);
		}else {
			user.clearCart();
			setSent(true);
			setMessage(res3.data.message);
		}
		/* let cart2 = await api.get("/cart");
		for (let i in cart2.data.data) {
			let item = cart2.data.data[i];
			let res2 = await api.get(`/influencers/${item.id}/remove_from_cart`);
			////console.log(res2.data);
			await timeoutPromise(100);
		} */
		setLoading(false);
	};
	const onChangeHandling = () => {}
	if (loading) {
		return <Layout title={"طلب عرض سعر"} backLink={"/"}>
			<Container>
				<SentContent>
					<Loader />
				</SentContent>
			</Container>
		</Layout>
	}

	if (sent) {
		return <Layout title={"طلب عرض سعر"} backLink={"/"}>
			<Container>
				<SentContent>
					<SentIcon><FiCheckCircle /></SentIcon>
					<Title>طلب عرض سعر</Title>
					<SentSubTitle>{message}</SentSubTitle>
				</SentContent>
			</Container>
		</Layout>
	}

	return <Layout title={"طلب عرض سعر"} backLink={"/"}>
		<Container>
			<TitleContainer>
				<Title>طلب عرض سعر</Title>
				{total != '' && <TotalLabel>مجموع المتابعين {total}</TotalLabel>}
			</TitleContainer>
			{
				Object.keys(user.cart).length > 0
					?
					<>
						{Object.keys(user.cart).length < 2 && <SubTitle>أقل عدد لإتمام الطلب مؤثران</SubTitle>}
						<Content>
							{
								Object.keys(user.cart).map((key, i) => {
									let influencer = user.cart[key];
									return <Collapse
										key={'cart-item' + i + key}
										head={<HeaderContent>
											<Avatar background={getImage(influencer.avatar)} />
											<InfluencerName>{influencer.name}</InfluencerName>
											<InfluencerPlatform>
												{influencer.adOptions.filter(i => i.active).map(platform => (
													<StyledIcon key={platform.name}>{!!PLATFORM_ICONS[platform.name.toLowerCase()] && PLATFORM_ICONS[platform.name.toLowerCase()]}</StyledIcon>
												))}
											</InfluencerPlatform>
										</HeaderContent>}
										delete={e => { user.removeFromCart(key) }}
									>
										<InfluencerContent>
											{influencer.adOptions.filter(i => i.active).map((platform, j) => (
												<PlatformRow key={platform+j}>
													<StyledIcon active={true}>{!!PLATFORM_ICONS[platform.name.toLowerCase()] && PLATFORM_ICONS[platform.name.toLowerCase()]}</StyledIcon>
													<PlatformRowContent style={{ flex: 2 }}>
														إعلان مباشر على منصة {PLATFORM_NAMES[platform.name.toLowerCase()]}، {!!platform.ads_types && platform.ads_types}
													</PlatformRowContent>
													<PlatformRowContent>
														{moment(platform.published_date).format('Do MMMM YYYY')}
													</PlatformRowContent>
													{influencer.adOptions.length > 1 ?
														<DeleteIcon onClick={() => { deleteSubItem(key, j) }}><FaTimes /></DeleteIcon>
														:
														<DeleteIcon></DeleteIcon>
													}
												</PlatformRow>
											))}
											<PlatformRow>
												<Input
													className="link"
													label={' اضف رابط فيديو للإعلان'}
													noBorder={true}
													icon={<FaLink />}
													onBlur={e => { changeSubItem(key, "link", e.target.value) }}
												/>
											</PlatformRow>
										</InfluencerContent>
									</Collapse>
								})
							}
						</Content>
					</>
					:
					<>
						<SubTitle2>أضف مؤثرين أولا</SubTitle2>
					</>
			}
			{Object.keys(user.cart).length >= 2 && <Card title="بيانات عرض السعر">
				<Form
					defaultValue={defaultValues}
					fields={{
						campaign_name: {
							type: 'text',
							require: true,
							label: "إسم الحملة"
						},
						company_name: {
							type: 'text',
							require: true,
							label: "إسم الشركة"
						},
						company_email: {
							type: 'text',
							require: true,
							label: "البريد الإلكتروني"
						},
						name: {
							type: 'text',
							require: true,
							label: "الشخص المسؤول"
						},
						company_mobile: {
							type: 'phone',
							require: true,
							label: "رقم التواصل"
						},
						notes: {
							type: 'textarea',
							require: true,
							label: "ملاحظات خاصة بالإعلان"
						},
						attachement: {
							type: 'file',
							require: false,
							noBorder: true,
							label: "ملفات داعمة"
						},
						link: {
							type: 'text',
							require: false,
							label: " اضف رابط فيديو للاعلان ان وجد",
							noBorder: true,
							icon: <FaLink />
						},
					}}
					submitLabel="ارسال"
					submit={submit}
					onChangeHandling = {onChangeHandling}
				/>
			</Card>}
		</Container>
	</Layout>
};