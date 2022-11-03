import React, { useContext, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import configs from '../../../configs';
import { BsSliders, BsX, BsList } from "react-icons/bs";
import { BiHome, BiListUl, BiMailSend, BiLogOut } from "react-icons/bi";
import { useRouter } from 'next/router'

import * as api from '../../../utils/api';

import { MdPerson } from "react-icons/md";
import { FaFileContract, FaHeart, FaCarAlt, FaFemale, FaRegBuilding, FaCaretDown } from "react-icons/fa";

import { UserContext, } from '../../../containers/User'

import { Container, IconLogo, MobileMenuLink, Avatar, MobileMenuClose, MobileMenuPanel, MobileMenuOpen, MobileMenu, Title, Caret, Section, MenuItemDropDown, MenuSection, StyledIcon, MenuItem } from './styles';

export default function Header(props) {
	const user = useContext(UserContext);
	const [categories, setCategories] = useState([]);
	const [open, setOpen] = useState(false);
	const router = useRouter()

	useEffect(() => {
		router.events.on('routeChangeComplete', ()=>{
			if(open){
				setOpen(false);
			}
		});
	}, []);

	const tabs = [
		{
			label: 'الرئيسية',
			icon: <BiHome />,
			link: '/dashboard',
			color: '#5f84ff'
		},
		{
			label: 'طلباتي',
			icon: <BiListUl />,
			link: '/orders',
			color: '#49d39e'
		},
		{
			label: 'تواصل معنا',
			icon: <BiMailSend />,
			link: '/contact',
			color: '#edbb42'
		}
	];

	const TAB_ICONS = {
		12: <FaHeart />,
		13: <FaCarAlt />,
		14: <FaFemale />,
		15: <FaRegBuilding />
	};

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		if(user.categories && user.categories.length > 0 ) {
			setCategories(user.categories)
		}else {
			let res = await api.get(`/categories`);
			setCategories(res.data.data);
			user.userCategories(res.data.data)
		}
	};

	return <Container>
		<MobileMenu>
			<MobileMenuPanel open={open}>
				<MobileMenuOpen onClick={() => { setOpen(!open) }}><BsList /></MobileMenuOpen>
				<MobileMenuClose onClick={() => { setOpen(false) }}><BsX /></MobileMenuClose>
				{tabs.map(item => (
					<Link href={item.link} key={item.label}>
						<MobileMenuLink onClick={()=>{setOpen(false)}}>
							{item.icon}
							{item.label}
						</MobileMenuLink>
					</Link>
				))}
				<MobileMenuLink onClick={() => { setOpen(false); user.logout() }}>
					<BiLogOut />
					الخروج
				</MobileMenuLink>
			</MobileMenuPanel>
		</MobileMenu>
		<Link href="/account">
			<Section>
				<Avatar><MdPerson /></Avatar>
				<Title>{user.user.name}</Title>
			</Section>
		</Link>
		<Link href="/"><IconLogo /></Link>
		{!props.isInfluncer && <Link href="/cart">
			<StyledIcon>
				<FaFileContract />
				{user.cartLength > 0 && <Caret>{user.cartLength}</Caret>}
			</StyledIcon>
		</Link>}
		{ !props.isInfluncer && <MenuSection>
			{
				categories.slice(0, 3).map((category, i) => (
					<Link key={category.id} href={`/dashboard/${category.id}`}>
						<MenuItem id={`tab-item-${i}`}>
							<StyledIcon>{TAB_ICONS[category.id]}</StyledIcon>
							{category.name}
						</MenuItem>
					</Link>
				))
			}
			<MenuItemDropDown>
				المزيد
				<StyledIcon><FaCaretDown /></StyledIcon>
				<div className="dropdown-panel">
					{
						categories.slice(3).map((category,i) => (
							<Link key={'category_'+i} href={`/dashboard/${category.id}`}>
								<MenuItem>
									{category.name}
								</MenuItem>
							</Link>
						))
					}
					{
						categories.slice(0, 3).map((category, i) => (
							<Link key={'cat_'+i} href={`/dashboard/${category.id}`}>
								<MenuItem>
									{category.name}
								</MenuItem>
							</Link>
						))
					}
				</div>
			</MenuItemDropDown>
		</MenuSection>}
	</Container>
};