import React, { useContext, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router'
import getImage from '../../../utils/getImage';

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
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const router = useRouter();
	const [data, setData] = useState([]);

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		let res = await api.get(`/ads`);
		////console.log(JSON.stringify(res.data.data));
		setData(res.data.data);
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

	return <Layout title={"طلباتي"} backLink={"/"}>
		<Container>
			<Title>طلباتي</Title>
			{
				data.map((item, i) => {
					return <Collapse
						key={'order-item' + i}
						head={<HeaderContent>
							<InfluencerName>#{item.id}</InfluencerName>
							{item.influencers.map(influencer => (
								<Avatar background={getImage(influencer.avatar)} />
							))}
							<StatusText>{item.status}</StatusText>
						</HeaderContent>}
						delete={e => { }}
						hideDelete={true}
					>
						<InfluencerContent>
							{item.influencers.map((influencer, j) => (
								<PlatformRow>
									<Avatar background={getImage(influencer.avatar)} />
									<InfluencerName>{influencer.name}</InfluencerName>
									<InfluencerPlatform>
										{influencer.platforms.map(platform => (
											<StyledIcon>{!!PLATFORM_ICONS[platform.name.toLowerCase()] && PLATFORM_ICONS[platform.name.toLowerCase()]}</StyledIcon>
										))}
									</InfluencerPlatform>
									<PlatformRowContent>
									</PlatformRowContent>
								</PlatformRow>
							))}
						</InfluencerContent>
					</Collapse>
				})
			}
			{data.length <= 0 && <SubTitle2>ليس لديك طلبات حتى الآن</SubTitle2>}
		</Container>
	</Layout>
};