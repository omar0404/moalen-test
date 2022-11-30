import '../styles/globals.css'
import { SnackbarProvider } from 'notistack';
import { UserProvider } from '../src/containers/User'
import { useEffect } from 'react';
import axios from 'axios';
import https from "https";

import TagManager from 'react-gtm-module'
 

axios.defaults.httpsAgent = new https.Agent({
	rejectUnauthorized:false
})


function MyApp({ Component, pageProps }) {
	const tagManagerArgs = {
		id: 'GTM-PLLFSVJ'//GTM-PLLFSVJ
	  }
	  useEffect(() => {
		TagManager.initialize(tagManagerArgs);
	}, []);

	return <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={6000}>
		<UserProvider>
			<Component {...pageProps} />
		</UserProvider>
	</SnackbarProvider>
}

export default MyApp
