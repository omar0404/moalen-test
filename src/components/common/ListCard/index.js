import React, { useContext, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter} from 'next/router';


import * as api from '../../../utils/api';
import getImage from '../../../utils/getImage';

import { FaPlus, FaCheck, FaYoutube, FaSnapchatGhost, FaFacebookF, FaTwitter, FaInstagram, FaTiktok ,FaEllipsisH } from "react-icons/fa";

import Modal from '../Modal'
import Button from '../Button'
import Toggle from '../Toggle'
import Select from '../Select'
import DateInput from '../DateInput';
import moment from 'moment/min/moment-with-locales';
moment.locale('ar-sa');

import { UserContext, } from '../../../containers/User';
import { useSnackbar } from 'notistack';


import { StyledTag ,Card, ModalTitle, Row, ModalContent, CardContent, SectionRow, ModalStyledIcon, CardHeader, AddContainerPress, ProgressText, AddContainer, ProgressContainer, Progress, CardAvatar, CardDesc, Tags, Tag, Platforms, StyledIcon, PlatformsCount ,ModalButtons} from './styles';

const COLORS = ["#ff5f5f", "#5fafff", "#a95fff", "#ff5f8a", "#49d39e"];

const PLATFORM_ICONS = {
	youtube: <FaYoutube />,
	snapchat: <FaSnapchatGhost />,
	twitter: <FaTwitter />,
	instagram: <FaInstagram />,
	tiktok: <FaTiktok />,
	facebook: <FaFacebookF />
};

export default function ListCard(props) {
	const user = useContext(UserContext);
	const router = useRouter()
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [tagProgress, setTagProgress] = useState({});
	const [followers, setFollowers] = useState(0);
	const [followersText, setFollowersText] = useState("");
	const [show, setShow] = useState(false);
	const [adOptions, setAdOptions] = useState([]);
	const [update, setUpdate] = useState(0);

	const ADS_TYPES = ["صورة", "تغطية"];
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();


	const fixNum = (replaceString) => {
		let string = '';
		string = '' + replaceString.toString();
		let find = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
		let replace = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
		for (var i = 0; i < find.length; i++) {
			string = string.replace(new RegExp(find[i], 'g'), replace[i]);
		}
		return string;
	};

	useEffect(() => {
		if (!!props.data)
			init();
	}, [props.data]);

	const init = async () => {
		setLoading(true);
		setData(props.data);
		let adOptions = [];
		let total = 0;
		if (!!props.data.platforms && props.data.platforms.length > 0) {
			props.data.platforms.forEach(p => {
				total += p.followers_count;
				adOptions.push({
					platform_id: p.id,
					ads_types_list: p.ads_types || [],
					ads_types: "",
					name: p.name,
					published_date: new Date(),
					active: true
				})
			});
		} else {
			/* let res = await api.get(`/influencers/${props.data.id}`);
			res.data.data.influencer.platforms.forEach(p => {
				total = + p.followers_count;
				adOptions.push({
					platform_id: p.id,
					ads_types_list: p.ads_types || [],
					ads_types: "",
					name: p.name,
					published_date: new Date(),
					active: true
				})
			}); */
		}
		setFollowers(total);
		if (total > 1000000) {
			let roundedNumber = Math.round(total / 100000) / 10;
			setFollowersText(roundedNumber + "m");
		} else if (total > 1000) {
			let roundedNumber = Math.round(total / 100) / 10;
			setFollowersText(roundedNumber + "k");
		} else {
			setFollowersText(total);
		}
		setAdOptions(adOptions);
		setLoading(false);
	};

	const add = () => {
		setShow(true);
	};

	const changeOptions = (i, key, value) => {
		adOptions[i][key] = value;
		setAdOptions(adOptions);
		setUpdate(c => c + 1);
	};

	const addToCart = async(e) => {
		e.preventDefault();
		e.stopPropagation();
		let savedData = JSON.parse(JSON.stringify(data));
		console.log("savedData",savedData,data)

		if(!user) router.push(`/login/?redirect=/dashboard`);
		savedData.adOptions = adOptions;
		user.addToCart(savedData);
		let itemData = savedData.adOptions.filter(i => i.active).map(item => ({
			publish_date: fixNum(moment(item.publish_date).format("YYYY-MM-Do")),
			ads_types: [item.ads_types],
			platform_id: item.platform_id
		}));
		let restemp = await api.post(`/influencers/${savedData.id}/add_to_cart`, { platforms: itemData });
		if(restemp.data.error){
			setShow(true);
			enqueueSnackbar(restemp.data.message, {
				variant: 'error',
			});
		}else {
			setShow(false);
		}
	};

	if (loading) {
		return <Card>
			<CardContent>
				<CardHeader>
					<CardAvatar />
					<div className="title">
						<strong> </strong>
						<span> </span>
					</div>
				</CardHeader>
			</CardContent>
		</Card>
	}

	return <>
		<Card>
			{
				!!user.cart[data.id]
					?
					<>
						<AddContainer className="add-button"><FaCheck /></AddContainer>
						<AddContainerPress onClick={(e) => { e.preventDefault(); }} />
					</>
					:
					<>
						<AddContainer className="add-button"><FaPlus /></AddContainer>
						<AddContainerPress onClick={(e) => { e.preventDefault(); add(data); }} />
					</>
			}
			<Link href={`/influencer/${data.id}`}>
				<CardContent>
					<CardHeader>
						<CardAvatar background={getImage(data.avatar)} />
						<div className="title">
							<strong>{data.name}</strong>
							<span>{data.specialization}</span>
						</div>
					</CardHeader>
					{!props.isLastSearched && !!data.tags && <>
						<CardDesc>
							{data.intro}
						</CardDesc>
						<ProgressContainer>
							{!!tagProgress && !!tagProgress.color && <>
								<ProgressText background={tagProgress.color}>{tagProgress.progress}%</ProgressText>
								<Progress progress={tagProgress.progress} background={tagProgress.color}><span></span></Progress>
							</>}
						</ProgressContainer>
						<Tags>
							{data.tags.map((tag, i) => (
								i <= 3 &&
								<Tag
									key={`${data.name}-tag-${i}`}
									background={COLORS[i % COLORS.length]}
									onMouseOver={() => {
										setTagProgress({
											name: tag.name,
											color: COLORS[i % COLORS.length],
											progress: tag.influence_percentage || 0
										});
									}}
									onMouseOut={() => {
										setTagProgress({});
									}}
								>{tag.name}</Tag>
							))}
							{data.tags.length > 3 &&  <StyledTag><FaEllipsisH></FaEllipsisH></StyledTag>}
						</Tags>
						<Platforms>
							<PlatformsCount>{followersText}</PlatformsCount>
							{data.platforms.map((platform ,i)=> (
								<StyledIcon key={i}>{!!PLATFORM_ICONS[platform.name.toLowerCase()] && PLATFORM_ICONS[platform.name.toLowerCase()]}</StyledIcon>
							))}
						</Platforms>
					</>}
				</CardContent>
			</Link>
		</Card>
		<Modal show={show} updateShow={(show) => { setShow(show) }}>
			<ModalTitle>إختر منصات الإعلان!</ModalTitle>
			<ModalContent>
				{
					adOptions.map((p, i) => (
						<SectionRow key={`row_`+i}>
							<Row style={{ flex: 1,  padding: 0, width: '100%' }}>
								<Toggle style={{ flex: 1 }} noMargin={true} value={p.active} onChange={value => { changeOptions(i, 'active', value) }} />
								<ModalStyledIcon style={{ flex: 1 }} active={p.active}>{!!PLATFORM_ICONS[p.name.toLowerCase()] && PLATFORM_ICONS[p.name.toLowerCase()]}</ModalStyledIcon>
							</Row>
							<Row disable={!p.active} style={{ flex: 2, margin: 0, padding: 0, width: '100%', opacity: p.active ? 1 : 0.5 }}>
								<Select onChange={e => { changeOptions(i, 'ads_types',  e.target.value); }} active={p.active} label="نوع الإعلان" options={[{label: "اختر من القائمة", value: ""}].concat(p.ads_types_list.map(item => ({label: item.type, value: item.type})))} value={p.ads_types} />
								<DateInput onChange={value => { changeOptions(i, 'published_date', value) }} label="تاريخ الإعلان" value={p.published_date} />
							</Row>
						</SectionRow>
					))
				}
			</ModalContent>
			<ModalButtons>
				{adOptions.filter(e => e.active).length > 0 && adOptions.filter(e => e.active).length == adOptions.filter(e => e.active).filter(e => e.ads_types != "").length ?
					<Button onClick={e =>addToCart(e)} primary={true}>اضغط هنا لعرض السعر</Button>
					:
					<Button disable="true" primary={true} style={{opacity: 0.5}}>اضغط هنا لعرض السعر</Button>
				}
			</ModalButtons>
		</Modal>
	</>
};