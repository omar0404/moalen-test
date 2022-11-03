import React, { createContext, useState, useEffect, } from 'react';
import Router, { useRouter, events, route } from 'next/router';
import localForage from 'localforage';

export const UserContext = createContext();

import Layout from '../../components/common/BasicLayout'
import Loader from '../../components/common/Loader'

let authPages = ['/login', '/register', "/register_influencer", "/reset_password"];
let allowPublic = ['/home','/commingSoon','/contact'];

//let allowPublic = ['/terms', '/privacy', '/home','/commingSoon'];

export function UserProvider(props) {
	const router = useRouter()
	const [user, setUser] = useState({});
	const [userType , setUSerType] = useState('');
	const [loaded, setLoaded] = useState(false);
	const [loading, setLoading] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [currentRoute, setCurrentRoute] = useState("");
	const [token, setToken] = useState("");
	const [cart, setCart] = useState({});
	const [query, setQuery] = useState({});
	const [updateQuery, setUpdateQuery] = useState(0);
	const [update, setUpdate] = useState(0);
	const [cartLength, setCartLength] = useState(0);
	const [profileEditedData, setProfileEfitedData] = useState({});
	const[categories,setUSerCategories] = useState([])

	const onRouteChange = (url, force) => {
		setCurrentRoute(url);
		return;
	};

	const checkAuthRoutes = (currentRoute) => {
		let check = false;
		authPages.forEach(route => {
			if((currentRoute.split("?")[0] == route.split("?")[0]) || currentRoute.split("?")[0] == route.split("?")[0]+"/")
				check = true;
		});
		return check;
	};

	const checkPublicRoutes = (currentRoute) => {
		let check = false;
		allowPublic.forEach(route => {
			if((currentRoute.split("?")[0] == route.split("?")[0]) || currentRoute.split("?")[0] == route.split("?")[0]+"/")
				check = true;
		});
		return check;
	};

	useEffect(() => {
		if(!!currentRoute && currentRoute != "" && !loading) {
			if(window.location.pathname != "" && window.location.pathname != currentRoute.split("?")[0]) {
				router.push(window.location.pathname);
			} else if(!loading) {
				if(loggedIn && userType === 'influencer' && checkAuthRoutes(currentRoute.split("?")[0])) {
					let redirectUrl = router.query.redirect || "/profileEdit";
					if(redirectUrl.indexOf("login") != -1 || redirectUrl.indexOf("logout") != -1) {
						redirectUrl = "/profileEdit";
					}
					router.push(redirectUrl);
				}
				else if (loggedIn && checkAuthRoutes(currentRoute.split("?")[0])) {
					let redirectUrl = router.query.redirect || "/dashboard";
					if(redirectUrl.indexOf("login") != -1 || redirectUrl.indexOf("logout") != -1) {
						redirectUrl = "/dashboard";
					}
					router.push(redirectUrl);
				} else if (!loggedIn && !checkAuthRoutes(currentRoute.split("?")[0]) && !checkPublicRoutes(currentRoute.split("?")[0])) {
					let redirectUrl = currentRoute;
					if(redirectUrl.indexOf("login") != -1 || redirectUrl.indexOf("logout") != -1) {
						/* redirectUrl = "/";
						router.push(`/login/?redirect=${redirectUrl}`); */
					}else {
						router.push(`/login/?redirect=${redirectUrl}`);
					}
					
				} else {
					setLoaded(true);
				}
			}
		}
	}, [loading, currentRoute]);

	useEffect(() => {
		onRouteChange(router.route);
		router.events.on('routeChangeComplete', onRouteChange);
		localForage.getItem('cart').then(async data => {
			if(!!data) {
				setCart(data || {});
				setCartLength(Object.keys(data || {}).length);
			}
		}).catch(err => {

		});
		localForage.getItem('user').then(async data => {
			if(!!data.token && !!data.user) {
				setUser(data.user);
				setUSerType(data.type);
				setToken(data.token);
				setLoggedIn(true);
			}
		}).catch(err => {
			setLoggedIn(false);
		});
	}, []);

	const login = async (values) => {
		setLoading(true);
		setUser(values.user);
		setUSerType(values.type);
		setToken(values.token);
		localForage.setItem('user', Object.assign({}, values), () => {
			setLoggedIn(true);
			setLoading(false);
		});
	}

	const updateUser = async (values) => {
		setLoading(true);
		setUser(Object.assign(user, values));
		localForage.setItem('user', {user: Object.assign({}, user, values), token: token, userType: userType}, () => {
			setLoading(false);
		});
	}

	const editProfile = async (values) => {
		setProfileEfitedData(values)
	}

	const userCategories = async (data) => {
		setUSerCategories(data)
	}

	const addToCart = (item) => {
		let cartObject = JSON.parse(JSON.stringify(cart));
		cartObject[item.id] = item;
		setCart(cartObject);
		setCartLength(Object.keys(cartObject).length);
		setUpdate(c => c+1);
		localForage.setItem('cart', cartObject, () => {});
	};

	const changeQuery = (q) => {
		setQuery(q);
		setUpdate(c => c+1);
		setUpdateQuery(c => c+1)
	};

	const changeCart = (newCart) => {
		let cartObject = JSON.parse(JSON.stringify(newCart));
		setCart(cartObject);
		setCartLength(Object.keys(cartObject).length);
		setUpdate(c => c+1);
		localForage.setItem('cart', cartObject, () => {});
	};

	const removeFromCart = (id) => {
		let cartObject = JSON.parse(JSON.stringify(cart));
		delete cartObject[id];
		setCart(cartObject);
		setCartLength(Object.keys(cartObject).length);
		
		setUpdate(c => c+1);
		localForage.setItem('cart', cartObject, () => {});
	};

	const clearCart = () => {
		setCart({});
		setCartLength(0);
		localForage.setItem('cart', {}, () => {});
		setUpdate(c => c+1);
	};

	const logout = async (state) => {
		setLoading(true);
		router.replace('/login');
		localForage.setItem('user', {}, () => {
			setLoggedIn(false);
			setLoading(false);
			//window.location.reload()
		});
	}


	return <UserContext.Provider
		value={{login, logout, addToCart, changeCart, editProfile, updateUser, cartLength, updateQuery, query, changeQuery, update, removeFromCart, clearCart, cart, profileEditedData, userCategories , categories, user,userType, token, loggedIn, loaded }}
	>
		{loaded ? props.children : <Layout>
			<Loader />
		</Layout>}
	</UserContext.Provider>
}
