import React, { useContext, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router'

import Link from 'next/link';
import configs from '../../../configs';

import * as api from '../../../utils/api';

import { MdPerson } from "react-icons/md";
import { BsSliders, BsX } from "react-icons/bs";


import { UserContext, } from '../../../containers/User'

import { Container, StyledInput, StyledSelect, StyledRadio, FilterPanelContent, FilterPanelContainer, FilterPanel, FilterOpen, FilterClose, Content } from './styles';

export default function Filter(props) {
	const router = useRouter();
	const user = useContext(UserContext);
	const [query, setQuery] = useState({ text: "", });
	const [regions, setRegions] = useState([]);
	const [platforms, setPlatforms] = useState([]);
	const [tags, setTags] = useState([]);
	const [update, setUpdate] = useState(0);
	const [search, setSearch] = useState("");
	const timeOut = useRef(null);

	useEffect(() => {
		init();
	}, [props.open]);

	useEffect(() => {
		query["category_id"] = router.query.cat;
		if(router.query.cat) {
			setQuery(query);
			setUpdate(c => c + 1);
		}
	}, [router.query.cat]);

	const init = async () => {
		if(props.open && regions.length == 0) {
			let res = await api.get(`/regions`);
			regions.unshift({ name: "الكل" ,id: "" })
			setRegions(addStaticLAbel(res.data.data));
			let res2 = await api.get(`/platforms`);
			setPlatforms(addStaticLAbel(res2.data.data));
			let res3 = await api.get(`/tags`);
			setTags(addStaticLAbel(res3.data.data));
		}
	};
	const addStaticLAbel = (arr) => {
		arr[0].name !== "الكل" ?
		arr.unshift({ name: "الكل" ,id: "" }) : null;
		return arr;
	}

	const updateFilter = async (key, value) => {
		query[key] = value;
		setQuery(query);
		setUpdate(c => c + 1);
		user.changeQuery(query);
	};

	useEffect(() => {
		if(search){
			clearTimeout(timeOut);
			timeOut.current = null;
			timeOut.current = setTimeout(() => {
				updateFilter("text", search);
			}, 300);
		}
	}, [search]);

	return <Container>
		<FilterPanelContainer>
			<FilterPanel open={props.open}>
				<FilterOpen onClick={() => { props.setOpen(!props.open) }}><BsSliders /></FilterOpen>
				<FilterClose onClick={() => { props.setOpen(false) }}><BsX /></FilterClose>
				<FilterPanelContent>
					<StyledInput hideLabel={true} label="بحث" value={search} onChange={e => { setSearch(e.target.value) }} />
					<StyledRadio invert={true} vertical={true} onChange={value => { updateFilter('gender', value) }} value={query['gender'] || ""} options={[
						{ label: 'مؤثرة', value: 'female' },
						{ label: 'مؤثر', value: 'male' },
						{ label: 'الكل', value: '' }
					]} />
					<StyledSelect label="موقع التأثير" onChange={e => { updateFilter('region_id', e.target.value) }} value={query['region_id'] || "" } options={regions.map(item => ({ value: item.id, label: item.name }))} />
					<StyledSelect label="المتابعين" onChange={e => { updateFilter('followers_gender', e.target.value) }} value={query['followers_gender'] || 0} options={[
						{ label: 'بنات', value: 2 },
						{ label: 'شباب', value: 1 },
						{ label: 'الكل', value: 0 },
					]} />
					<StyledSelect label="التاج" 
						onChange={e => { updateFilter('tag_id', e.target.value) }} 
						value={query['tag_id'] || ""} 
						options={tags.map(item => ({ value: item.id, label: item.name }))} />
					<StyledSelect label="المنصات" 
						onChange={e => { updateFilter('platform_id', e.target.value) }} 
						value={query['platform_id'] || "all"} 
						options={platforms.map(item => ({ value: item.id, label: item.name }))} />
					<StyledSelect label="أعمار المتابعين" onChange={e => { updateFilter('followers_ages', e.target.value) }} value={query['followers_ages'] || 0} options={[
						{ label: 'الكل', value: 0 },
						{ label: '13-17', value: 1 },
						{ label: '18-24', value: 2 },
						{ label: '25-34', value: 3 },
						{ label: '35-44', value: 4 },
						{ label: '45-54', value: 5 },
						{ label: '55-64', value: 6 },
					]} />
					<StyledSelect label="عدد المتابعين" onChange={e => { updateFilter('followers_count', e.target.value) }} value={query['followers_count'] || 0} options={[
						{ label: 'الكل', value: 0 },
						{ label: '> 10k', value: 1 },
						{ label: '> 50k', value: 2 },
						{ label: '> 500k', value: 3 },
						{ label: '> 1M', value: 4 },
						{ label: '> 10M', value: 5 },
					]} />
				</FilterPanelContent>
			</FilterPanel>
		</FilterPanelContainer>
		<Content open={props.open}>
			{props.children}
		</Content>
	</Container>
};