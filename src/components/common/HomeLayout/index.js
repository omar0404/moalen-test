import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { BiHome, BiMailSend ,BiUserVoice ,BiUserPin} from "react-icons/bi";

import Head from '../Head';
import Logo from '../Logo'

import { UserContext, } from '../../../containers/User'
import { BsX, BsList } from "react-icons/bs";

import { LogoBox ,IconLogo,Container, Content, Header, MenuSection, MenuItem ,MobileMenuLink, MobileMenuClose, MobileMenuPanel, MobileMenuOpen, MobileMenu, } from './styles';

export default function Layout(props) {
	const user = useContext(UserContext);
	const [open, setOpen] = useState(false);

	const tabs = [
		{
			label: 'الرئيسية',
			icon: <BiHome />,
			link: '/dashboard',
			color: '#5f84ff'
		},
		{
			label: ' انضم كمعلن',
			icon: <BiUserPin />,
			link: '/register',
			color: '#edbb42'
		},
		{
			label: ' انضم كمؤثر',
			icon: <BiUserVoice />,
			link: '/register_influencer',
			color: '#edbb42'
		},
		{
			label: 'تواصل معنا',
			icon: <BiMailSend />,
			link: '/contact',
			color: '#edbb42'
		}
	];
	return <>
		<Head title={props.title} />
		<Container dir="rtl">
			<Content>
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
			</MobileMenuPanel>
		</MobileMenu>   
				<Header>
					<LogoBox href='/'>
						<Logo width={140} />
					</LogoBox>
					<Link href="/"><IconLogo /></Link>
					<MenuSection>
						<MenuItem href='/dashboard'>الرئيسية</MenuItem>
						<MenuItem href="/register"> انضم كمعلن</MenuItem>
						<MenuItem href="/register_influencer">انضم كمؤثر</MenuItem>
						<MenuItem href="/contact">تواصل معنا</MenuItem>
					</MenuSection>
				</Header>
			</Content>
			{props.children}
		</Container>
	</>
};