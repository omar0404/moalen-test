import React from 'react';
import Layout from '../../common/LoginLayout'



import { Container} from './styles';

export default function Flow() {
	return <Layout
	title={"قريبا"}
	backLink={"/"}
	mainLink={{
		label: "انضم معنا كمؤثر في اكبر منصه للتسويق عبر المؤثرين سجل الان",
		link: "/register_influencer"
	}}
	>
		<Container>
			<h1> انتظرونا قريبا.... </h1>
		</Container>
	</Layout>;
};