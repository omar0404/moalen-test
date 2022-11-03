import '../styles/globals.css'
import { SnackbarProvider } from 'notistack';
import { UserProvider } from '../src/containers/User'
import { useEffect } from 'react';

import TagManager from 'react-gtm-module'
 




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
