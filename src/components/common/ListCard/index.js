import React, { useContext, useEffect, useState} from 'react';
import Link from 'next/link';


import getImage from '../../../utils/getImage';

import { FaPlus, FaCheck, FaYoutube, FaSnapchatGhost, FaFacebookF, FaTwitter, FaInstagram, FaTiktok ,FaEllipsisH } from "react-icons/fa";

import AddToCartModal from '../AddToCartModal'
import moment from 'moment/min/moment-with-locales';
moment.locale('ar-sa');
import useAddToCartModal from '../../../hooks/useAddToCartModal'
import { UserContext, } from '../../../containers/User';


import { StyledTag ,Card,CardContent,  CardHeader, 
	AddContainerPress, ProgressText, AddContainer, 
	ProgressContainer, Progress, CardAvatar, 
	CardDesc, Tags, Tag, Platforms, StyledIcon, PlatformsCount } from './styles';

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
	const {setAdOptions,...user} = useContext(UserContext);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [tagProgress, setTagProgress] = useState({});
	const [followers, setFollowers] = useState(0);
	const [followersText, setFollowersText] = useState("");


	const {addCart,setShowAddToCartModal,showAddToCartModal} =  useAddToCartModal(props.data)

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
		setShowAddToCartModal(true);
	};


	const onShowPricePress = e => {
		e.preventDefault();
		e.stopPropagation();
		addCart()
	}
	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	   }

	if (loading) {
		return <Card>
			<CardContent>
				<CardHeader>
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
						<CardAvatar 
						   sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
						   loader={myLoader} 
						   alt="influencer-avatar"
      					   width={52}
     					   height={52} 
						   src={getImage(data.avatar)} />
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
		<AddToCartModal
		show={showAddToCartModal}
		toggleInfluencerModal={setShowAddToCartModal}
		onShowPricePress={onShowPricePress}
		/>
	</>
};