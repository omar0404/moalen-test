import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { FaPlus, FaMale, FaCheck, FaFemale, FaYoutube, FaSnapchatGhost, FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import FsLightbox from "fslightbox-react";


import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);


import * as api from '../../../utils/api';
import getImage from '../../../utils/getImage';

import { UserContext, } from '../../../containers/User'

import Layout from '../../common/Layout'
import Loader from '../../common/Loader'

import moment from 'moment/min/moment-with-locales';
moment.locale('ar-sa');


import { Container, Grid, Card, GraphCard, GraphPercentage, ImageCard, GalleryRowGrid, SectionRow, AddContainer, BarGraphContainer, GraphContainer, Description, ChartIcons, GraphLabel, StyledIcon, GraphIcon, CardTitle, RowGrid2, FollowersCount, RowGrid, Row, PlatformsCount, Cover, Details, Avatar, TitleDetails, Tags, Tag, ModalRow, ModalContent, ModalStyledIcon, ModalTitle } from './styles';
import AddToCartModal from '../../common/AddToCartModal';
import useAddToCartModal from '../../../hooks/useAddToCartModal';

const COLORS = ["#ff5f5f", "#5fafff", "#a95fff", "#ff5f8a", "#49d39e"];

const PLATFORM_ICONS = {
	youtube: <FaYoutube />,
	snapchat: <FaSnapchatGhost />,
	twitter: <FaTwitter />,
	instagram: <FaInstagram />,
	tiktok: <FaTiktok />,
	facebook: <FaFacebookF />
};

const PLATFORM_COLORS = {
	youtube: "#ff0000",
	snapchat: "#f0ec00",
	twitter: "#1da1f2",
	instagram: "#c32aa3",
	tiktok: "#010101",
	facebook: "#4267B2"
};


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ payload, cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);
	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(payload.percentage * 100).toFixed(0)}%`}
		</text>
	);
};

function hexToRgbA(hex) {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split('');
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
	}
	throw new Error('Bad Hex');
}

export default function Flow() {
	const {user ,userType , setAdOptions} = useContext(UserContext);
	const router = useRouter()
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [followers, setFollowers] = useState(0);
	const [detailedFollowers, setDetailedFollowers] = useState([]);
	const [followersText, setFollowersText] = useState("");
	const [detailedGraphs, setDetailedGraphs] = useState([]);
	const [toggler, setToggler] = useState(false);


	const [slideNumber, setSlideNumber] = useState(1);


	const {addCart,setShowAddToCartModal,showAddToCartModal} = useAddToCartModal(data)



	useEffect(() => {
		if (!!router.query.id)
			init();
	}, [router.query.id]);

	const init = async () => {
		let res ={}
		if(userType === 'influencer' && user.id == router.query.id) {
			res = await api.get(`/influencers/profile`);
			setData(res.data.data)
		}else {
			res = await api.get(`/influencers/${router.query.id}`);
			setData(res.data.data.influencer);
		}
		
		let adOptions = [];

		if (!!res.data.data.influencer.platforms && res.data.data.influencer.platforms.length > 0) {
			let total = 0;
			let detailedFollowers = [];
			let detailedGraphs = [
				{
					label: "المتابعين في مواقع التواصل",
					data: [],
					graphData: {
						labels: [],
						datasets: [
							{
								label: '# of Votes',
								data: [],
								backgroundColor: [],
								borderColor: [],
								borderWidth: 2,
							},
						],
						options: {
							legend: {
								display: false
							},
							tooltips: {
								enabled: true
							}
						}
					},
					graphType: 'pie'
				},
				{
					label: "تقسيم المتابعين",
					data: [
						{
							name: "رجال",
							color: COLORS[0],
							icon: <FaMale />,
							value: 0,
						},
						{
							name: "نساء",
							color: COLORS[1],
							icon: <FaFemale />,
							value: 0,
						},
					],
					graphData: {
						labels: [""],
						datasets: [
							{
								label: 'رجال',
								data: [0],
								backgroundColor: [
									COLORS[0],
								],
								borderColor: [
									COLORS[0],
								],
								borderWidth: 2,
							},
							{
								label: 'نساء',
								data: [0],
								backgroundColor: [
									COLORS[1],
								],
								borderColor: [
									COLORS[1]
								],
								borderWidth: 2,
							},
						],

					},
					graphType: 'bar'
				}
			];
			let demoTotal = 0;
			res.data.data.influencer.platforms.forEach((p, i) => {
				total += p.followers_count;
				let formatedCount = p.followers_count;
				if (p.followers_count > 1000000) {
					formatedCount = (Math.round(p.followers_count / 100000) / 10) + "m";
				} else if (p.followers_count > 1000) {
					formatedCount = (Math.round(p.followers_count / 100) / 10) + "k";
				}
				p.formatedCount = formatedCount;

				if (!isNaN(parseInt(p.females)) && !isNaN(parseInt(p.males))) {
					detailedGraphs[1].data[0].value += parseInt(p.males) * p.followers_count / 100;
					detailedGraphs[1].data[1].value += parseInt(p.females) * p.followers_count / 100;
					detailedGraphs[1].graphData.datasets[0].data[0] += parseInt(p.males) * p.followers_count / 100;
					detailedGraphs[1].graphData.datasets[1].data[0] += parseInt(p.females) * p.followers_count / 100;
					demoTotal += p.followers_count;
				}

				detailedGraphs[0].data.push({
					name: p.name.toUpperCase(),
					color: PLATFORM_COLORS[p.name.toLowerCase()],
					value: p.followers_count,
				});
				detailedGraphs[0].graphData.labels.push(p.name.toUpperCase())
				detailedGraphs[0].graphData.datasets[0].backgroundColor.push(hexToRgbA(PLATFORM_COLORS[p.name.toLowerCase()]).replace(",1)", ",0.6)"))
				detailedGraphs[0].graphData.datasets[0].borderColor.push(PLATFORM_COLORS[p.name.toLowerCase()]);
				detailedGraphs[0].graphData.datasets[0].data.push(p.followers_count);

				detailedFollowers.push(p);
				var currentDate = new Date(+new Date() + 86400000);
				adOptions.push({
					platform_id: p.id,
					ads_types_list: p.ads_types || [],
					ads_types: "",
					name: p.name,
					published_date: currentDate,
					active: true
				});

			});
			setAdOptions(adOptions);

			detailedGraphs[0].data.forEach((p, i) => {
				detailedGraphs[0].data[i].percentage = p.value / total;
			})
			detailedGraphs[1].data.forEach((p, i) => {
				detailedGraphs[1].data[i].percentage = p.value / demoTotal;
			})
			setDetailedGraphs(detailedGraphs);
			setDetailedFollowers(detailedFollowers);
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
		}
		setLoading(false);
	};

	const add = () => {
		setShowAddToCartModal(true);
	};

	


	const onShowPricePress = (e) => {
		e.preventDefault();
		e.stopPropagation();
		addCart()
	}


	if (loading) {
		return <Container>
			<Layout title={"الرئيسية"} backLink={"/"}>
				<Loader />
			</Layout>
		</Container>;
	}

	const renderChart = (type, data) => {
		switch (type) {
			case "pie":
				return <GraphContainer>
					<Pie data={data} options={{ plugins: { legend: { display: false, }, }, }} />
				</GraphContainer>;
			case "bar":
				return <BarGraphContainer>
					<Bar data={data} options={{
						responsive: true, maintainAspectRatio: false,
						scales: {
							y: {
								display: false
							},
							x: {
								display: false
							}
						},
						scaleShowLabels: false,
						plugins: {
							legend: {
								display: false,
							},
						}
					}} />
				</BarGraphContainer>;
			default:
				return <></>;
		}
	};

	return <Layout title={"الرئيسية"} backLink={"/"}>
		<Container>
			<Cover cover={getImage(data.cover)}>
				<Details>
					<Avatar background={getImage(data.avatar)} />
					<TitleDetails>
						<strong>{data.name}
							{
								user.cart && !!user.cart[data.id]
									?
									<>
										<AddContainer onClick={(e) => { e.preventDefault(); }}><FaCheck /></AddContainer>
									</>
									:
									<>
										<AddContainer onClick={(e) => { e.preventDefault(); add(data); }}><FaPlus /></AddContainer>
									</>
							}
						</strong>
						<span>{data.specialization}</span>
						<Tags>
							{data.tags.map((tag, i) => (
								<Tag
									key={`${data.name}-tag-${i}`}
									background={COLORS[i % COLORS.length]}
								>{tag.name}</Tag>
							))}
						</Tags>
					</TitleDetails>
					<PlatformsCount>{followersText}</PlatformsCount>
				</Details>
			</Cover>
			<Description>
				{data.intro}
			</Description>
			<GalleryRowGrid>
				{data.gallery.map((item, i) => (
					<ImageCard key={'image_'+i} style={{ 'backgroundImage': `url(${getImage(item)})` }} onClick={() => { setSlideNumber(i + 1); setToggler(!toggler) }}>
						{item.indexOf("mp4") != -1 && <video paused={true} src={getImage(item)} muted={true} />}
					</ImageCard>
				))}
			</GalleryRowGrid>
			<FsLightbox
				toggler={toggler}
				slide={slideNumber}
				sources={data.gallery.map(e => getImage(e))} />
			<RowGrid>
				{detailedFollowers.map((platform, i) => (
					<Link key={'detailedFollower_'+i} href={platform.account}>
						<Card>
							<StyledIcon>{!!PLATFORM_ICONS[platform.name.toLowerCase()] && PLATFORM_ICONS[platform.name.toLowerCase()]}</StyledIcon>
							<FollowersCount>{platform.formatedCount}</FollowersCount>
						</Card>
					</Link>
				))}
			</RowGrid>
			<RowGrid2>
				{detailedGraphs.map((graph,i) => (
					<GraphCard key={'detailedGraph_'+i}>
						<CardTitle>{graph.label}</CardTitle>
						{renderChart(graph.graphType, graph.graphData)}
						<ChartIcons>
							{graph.data.map((entry, index) => (
								<>
									{
										!!entry.icon || !!PLATFORM_ICONS[entry.name.toLowerCase()]
											?
											<GraphIcon key={entry.name+index} color={entry.color}>{entry.icon || PLATFORM_ICONS[entry.name.toLowerCase()] || entry.title}</GraphIcon>
											:
											<GraphLabel key={entry.name+index} color={entry.color}>{entry.name}</GraphLabel>
									}
								</>
							))}
						</ChartIcons>
					</GraphCard>
				))}
			</RowGrid2>
		</Container>
		<AddToCartModal 
			show={showAddToCartModal}
			toggleInfluencerModal={setShowAddToCartModal}
			onShowPricePress={onShowPricePress}
		/>
	</Layout>;
};