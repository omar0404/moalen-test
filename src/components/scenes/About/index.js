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
import Card from '../../common/Card'
import Form from '../../common/Form'
import Loader from '../../common/Loader'
import Collapse from '../../common/Collapse'

import { Container, Content, DeleteIcon, SentContent, SentSubTitle, SentIcon, InfluencerContent, PlatformRow, PlatformRowContent, Title, SubTitle, SubTitle2, HeaderContent, InfluencerPlatform, Avatar, InfluencerName, StyledIcon } from './styles';

export default function Cart() {
	const user = useContext(UserContext);
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const router = useRouter()

	return <Layout title={"عن معلن"} backLink={"/"}>
		<Container>
			<Title>تواصل معنا</Title>
			<SubTitle>
			عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن
			<br />
			عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن
			<br />
			عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن عن معلن
			<br />
			</SubTitle>
		</Container>
	</Layout>
};