import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'


import Layout from '../../common/Layout'
import Table from '../../common/Table'
import { UserContext } from '../../../containers/User'


import { Container } from './styles';

export default function Flow() {
	const {userType} = useContext(UserContext);
	const router = useRouter()

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		userType === 'influencer' && router.replace("/profileEdit")
	};

	return <Container>
		<Layout title={"الرئيسية"} backLink={"/"}>
			<Table limit={6} />
		</Layout>
	</Container>;
};