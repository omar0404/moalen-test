import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head'

import configs from '../../../configs'

export default function AppHead(props) {

	return <Head>
		<meta name="x-apple-disable-message-reformatting" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
		<title>{props.title ?? configs.app.name}</title>
		<meta
          name="description"
          content="Platform connecting together the biggest influencers in all fields"
          key="desc"
        />
		<link rel="icon" href="/favicon.ico" />
		<link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css" />
		<script type="text/javascript" src="https://unpkg.com/react-vis/dist/dist.min.js"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
	</Head>
};