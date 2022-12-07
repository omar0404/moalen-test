import React, {useEffect, useState } from 'react';
import getImage from '../../../utils/getImage';

import { FaYoutube, FaSnapchatGhost, FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import moment from 'moment/min/moment-with-locales'
moment.locale('ar-sa');

import * as api from '../../../utils/api';

import Layout from '../../common/Layout'

import Loader from '../../common/Loader'
import Collapse from '../../common/Collapse'

import { Container,StatusText, SentContent, InfluencerContent, PlatformRow, PlatformRowContent, Title, SubTitle2, HeaderContent, InfluencerPlatform, Avatar, InfluencerName, StyledIcon } from './styles';

const PLATFORM_ICONS = {
	youtube: <FaYoutube />,
	snapchat: <FaSnapchatGhost />,
	twitter: <FaTwitter />,
	instagram: <FaInstagram />,
	tiktok: <FaTiktok />,
	facebook: <FaFacebookF />
};



export default function Cart() {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		try{
			let res = await api.get(`/ads`);
			////console.log(JSON.stringify(res.data.data));
			setData(res.data.data);
		}catch(err){
			console.log(err)
		}
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