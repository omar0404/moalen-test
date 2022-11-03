import React, { useContext, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import configs from '../../../configs';
import { useRouter } from 'next/router'

import * as api from '../../../utils/api';

import { MdPerson } from "react-icons/md";
import { FaFileContract, FaHeart, FaCarAlt } from "react-icons/fa";

import Filter from '../Filter'
import ListCard from '../ListCard';

import { UserContext, } from '../../../containers/User'

import { Container, Title, Content, ContentContainer, FeaturedContent, LoadingCard, Featured, FeaturedTitle, LastViewedTitle, StyledSkeleton, PageOption, PageButton, Pagination, } from './styles';

export default function Table(props) {
	const router = useRouter();
	const user = useContext(UserContext);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [featured, setFeatured] = useState({});
	const [lastViewed, setLastViewed] = useState([]);
	const [page, setPage] = useState(0);
	const [total, setTotal] = useState(0);
	const [count, setCount] = useState(0);
	const [limit, setLimit] = useState(9);
	const [scroll, setScroll] = useState(false);
	const [query, setQuery] = useState(props.query || {text: '', category_id: undefined});
	const influncersTitle = useRef()

	const [open, setOpen] = useState(false);


	//let limit = 6;

	useEffect(() => {
		loadPage(1);
	}, [user.query, user.updateQuery, router.query.cat]);

	useEffect(() => {
		//console.
		setTimeout(() => {scrollTop()},0)
	},[scroll]);

	const loadPage = async (page) => {
		setLoading(true);
		setPage(page);
		try {
			let res = await api.get("/influencers", Object.assign({}, (user.query || {}), {page: page, per_page: limit,category_id: router.query.cat|| '' }));
			setData(res.data.data.ifluencers);
			setLastViewed(res.data.data.last_views);
			setFeatured(res.data.data.featured);
			setTotal(res.data.meta.last_page);
			setCount(res.data.meta.total);
			res.data.meta.total < 9 ? setLimit(res.data.meta.total) : setLimit(9);
			setTimeout(() => {
				scrollTop()
			},0)
		} catch {

		}

		setLoading(false);
	};

	const goPrev = () => {
		if(page > 1) {
			loadPage(page-1)
		}
	};

	const goNext = () => {
		if(page < total) {
			loadPage(page+1)
		}
	};

	const goPage = (page) => {
		loadPage(page);
		// setScroll(true);
	};

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		  });
	}

	return <Filter open={open} setOpen={setOpen}>
		<Container id="f">
		{count > 0 && 
		<Title id='title' ref={influncersTitle}>{!loading && <>عرض {limit} مؤثر من {count}</>}</Title>}
			<ContentContainer>
				<Content>
					{
						loading ? <>
							{new Array(9).fill(1).map((e,i) => (
								<LoadingCard key={'loading_'+e+i} />
							))}
						</>
							:
							<>
								{count > 0  ?  <>{ data.map(item => (
									<ListCard key={item.id} data={item} />
								))} </>: 
								<Title>لا يوجد مؤثرين لهذا الاختيار ، ارجوا تجربة خيار آخر</Title>}
							</>
					}
				</Content>
				<Featured>
					{!open && lastViewed.length > 0 && <>
						{<LastViewedTitle>البحث السابق</LastViewedTitle> }
						<FeaturedContent>
						{lastViewed.map(item => (
							<ListCard isLastSearched= {true} key={item.id} data={item} />
						))}
						</FeaturedContent>
						{!!featured && Object.keys(featured).length > 0 &&
							<>
								<FeaturedTitle>مؤثر مشهور</FeaturedTitle>
								<ListCard key={featured.id} data={featured} />
							</>}
					</>}
				</Featured>
			</ContentContainer>

			{count > 0 && <Pagination>
				<PageOption onClick={goPrev} active={page > 1}>السابق</PageOption>
				{
					new Array(total).fill(null).map((_, i) => (
						<PageButton key={i} onClick={()=>{goPage(i+1)}} active={(i+1) == page}>{(i+1)}</PageButton>
					))
				}
				<PageOption onClick={goNext} active={page < total}>التالي</PageOption>
			</Pagination>}
		</Container>
	</Filter>
};