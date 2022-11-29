import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { MdHome } from "react-icons/md";
import { BiHome, BiListUl, BiMailSend, BiLogOut, BiInfoCircle } from "react-icons/bi";

import Head from '../Head';
import Footer from '../Footer';
import Header from '../Header'
import Logo from '../LogoIcon'

import { UserContext, } from '../../../containers/User'

import { Container, Content, SideMenu, ContentUpperContainer, SideMenuList, ContentContainer, SideMenuButton, FooterContainer } from './styles';
import configs from '../../../configs';

export default function Layout(props) {
	const [open, setOpen] = useState(true);
	const user = useContext(UserContext);

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
			label: 'عن معلن',
			icon: <BiInfoCircle />,
			link: '/home',
			color: '#f0544b'
		},
		{
			label: 'تواصل معنا',
			icon: <BiMailSend />,
			link: '/contact',
			color: '#edbb42'
		}
	];

	const openChange = (open) => {
		setOpen(!!open);
	};

	return <>
		<Head title={props.title} />
		<Container open={open} dir="rtl">
			<SideMenu>
				<Link href="/"><Logo /></Link>
				<SideMenuList>
					{tabs.map(item => (
						<Link href={item.link} key={item.label}>
							<SideMenuButton background={item.color}>
								<div>{item.icon}</div>
								<span>{item.label}</span>
							</SideMenuButton>
						</Link>
					))}
				</SideMenuList>
				<SideMenuButton onClick={() => { user.logout() }} background={"#f0544b"}>
				{user.loggedIn && 
				<>
				<div><BiLogOut /></div>
					<span>الخروج</span>
				</>
					}
				</SideMenuButton>
			</SideMenu>
			<Content>
				<Header isInfluncer={props.isInfluncer} />
				<ContentUpperContainer>
				<ContentContainer>
					{props.children}
					<Footer />
				</ContentContainer>
				</ContentUpperContainer>
			</Content>
		</Container>
	</>
};