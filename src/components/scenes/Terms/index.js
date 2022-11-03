import React, { useContext, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router'

import { FiCheck, FiCheckCircle } from "react-icons/fi";
import { FaYoutube, FaSnapchatGhost, FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaTimes } from "react-icons/fa";
import moment from 'moment/min/moment-with-locales'
moment.locale('ar-sa');

import * as api from '../../../utils/api';

import { UserContext, } from '../../../containers/User'

import Layout from '../../common/Layout'
import TermCard from '../../common/TermCard'

import { Container, Title} from './styles';
import configs from '../../../configs';

export default function Terms() {
	////console.log('configs.usabilityRoles',configs.usabilityRoles);
	return <Layout title="شروط الإستخدام" backLink={"/"}>
		<Container>
			<Title>  شروط الإستخدام</Title>
			<TermCard items={configs.usabilityRoles}></TermCard>
		</Container>
	</Layout>
};