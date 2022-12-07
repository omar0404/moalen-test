import React from 'react';
import Link from 'next/link';

import Head from '../Head';
import Logo from '../Logo';
import Footer from '../Footer';

import { Container, Content, SideMenu, AddedLink, ContentContainer, MenuSection, MenuItem, LogoContainer, LogoHeader, ContentCard } from './styles';

export default function Layout(props) {
	return <>
		<Head title={props.title} />
		<Container dir="rtl">
			<SideMenu>
				<LogoContainer>
					<Logo invert={true} width={200} />
					<LogoHeader>منصة حلول التسويق عبر المؤثرين</LogoHeader>
					{!!props.mainLink && <AddedLink href={props.mainLink.link}>{props.mainLink.label}</AddedLink>}
				</LogoContainer>
			</SideMenu>
			<Content>
				<ContentContainer>
					<Logo className="mobile-logo" width={100} />
					<MenuSection id="menu-sec">
						<Link href="/home"><MenuItem>عن معلن</MenuItem></Link>
						<Link href="/home"><MenuItem>تواصل معنا</MenuItem></Link>
					</MenuSection>
					<ContentCard>
						{props.children}
					</ContentCard>
					{!!props.mainLink && <AddedLink className="mobile-only" href={props.mainLink.link}>{props.mainLink.label}</AddedLink>}
					<Footer />
				</ContentContainer>
			</Content>
		</Container>
	</>
};