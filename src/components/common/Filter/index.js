import React, { useContext, useEffect, useState, useRef, createRef } from 'react';
import { useRouter } from 'next/router'

import * as api from '../../../utils/api';
import { BsSliders } from "react-icons/bs";
import { IoIosRefresh } from "react-icons/io";



import { UserContext, } from '../../../containers/User'

import { Container, StyledInput, StyledSelect, StyledRadio, FilterPanelContent, FilterPanelContainer, FilterPanel, FilterOpen, FilterClose, Content } from './styles';

export default function Filter(props) {
	const router = useRouter();
	const user = useContext(UserContext);
	const [query, setQuery] = useState({ text: "", });
	const [regions, setRegions] = useState([]);
	const [platforms, setPlatforms] = useState([]);
	const [tags, setTags] = useState([]);
	const [search, setSearch] = useState("");
	const timeOut = useRef(null);
	const selectRef = useRef(["followers","tag","platforms","ages","agesNo","followersNO"].map(x => createRef()))
	useEffect(() => {
		init();
	}, [props.open]);
	useEffect(() => {
		clearTimeout(timeOut);
		timeOut.current = null;
		timeOut.current = setTimeout(() => {
			updateFilter("text", search);
		}, 300);
}, [search]);
	useEffect(() => {
		query["category_id"] = router.query.cat;
		if(router.query.cat) {
			setQuery({...query});
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
		
		setQuery(q => {
			const newQuery = {...q}
			newQuery[key] = value;
			user.changeQuery(newQuery);
			return newQuery
		});
		
	};


	const resetForm = () => {
		setQuery({text:""})
		setSearch("")
		user.changeQuery({text:""});
		selectRef.current.forEach(ref => {
			ref.current?.clearValue()
		})
	}
	return <Container>
		<FilterPanelContainer>
			<FilterPanel open={props.open}>
				<FilterOpen onClick={() => { props.setOpen(!props.open) }}><BsSliders /></FilterOpen>
				<FilterPanelContent>
					<div style={{display:'flex'}}>
					<StyledInput hideLabel={true} label="بحث" value={search} onChange={e => { setSearch(e.target.value) }} />
					<FilterClose onClick={resetForm}><IoIosRefresh  /></FilterClose>
					</div>
					<StyledRadio invert={true} vertical={true} onChange={value => { updateFilter('gender', value) }} value={query['gender'] || ""} options={[
						{ label: 'مؤثرة', value: 'female' },
						{ label: 'مؤثر', value: 'male' },
						{ label: 'الكل', value: '' }
					]} />
					<StyledSelect ref={selectRef.current[0]} label="موقع التأثير" onChange={e => { updateFilter('region_id', e.value) }} value={query['region_id'] || "" } options={regions.map(item => ({ value: item.id, label: item.name }))} />
					<StyledSelect ref={selectRef.current[1]} label="المتابعين" onChange={e => { updateFilter('followers_gender', e.value) }} value={query['followers_gender'] || 0} options={[
						{ label: 'الكل', value: 0 },
						{ label: 'بنات', value: 2 },
						{ label: 'شباب', value: 1 },
					]} />
					<StyledSelect ref={selectRef.current[2]} label="التاج" 
						onChange={e => updateFilter('tag_id',e.map(e => e.value))} 
						value={query['tag_id'] || ""} 
						options={tags.map(item => ({ value: item.id, label: item.name }))}
						isMultiple />
					<StyledSelect  ref={selectRef.current[3]} label="المنصات" 
						onChange={e => { updateFilter('platform_id', e.value) }} 
						value={query['platform_id'] || "all"} 
						options={platforms.map(item => ({ value: item.id, label: item.name }))} />
					<StyledSelect  ref={selectRef.current[4]} label="أعمار المتابعين" onChange={e => { updateFilter('followers_ages', e.value) }} value={query['followers_ages'] || 0} options={[
						{ label: 'الكل', value: 0 },
						{ label: '13-17', value: 1 },
						{ label: '18-24', value: 2 },
						{ label: '25-34', value: 3 },
						{ label: '35-44', value: 4 },
						{ label: '45-54', value: 5 },
						{ label: '55-64', value: 6 },
					]} />
					<StyledSelect ref={selectRef.current[5]} label="عدد المتابعين" onChange={e => { updateFilter('followers_count', e.value) }} value={query['followers_count'] || 0} options={[
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