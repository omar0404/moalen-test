import React, { createContext, useState, useEffect, } from 'react';
import Router, { useRouter, events, route } from 'next/router';
import localForage from 'localforage';

export const UserContext = createContext();

import Layout from '../../components/common/BasicLayout'
import Loader from '../../components/common/Loader'
const ProtectedRoutes = ["account","orders","cart","profileEdit","accept_offer"]
export function UserProvider(props) {
	const router = useRouter()
	const [user, setUser] = useState({});
	const [userType, setUSerType] = useState('');
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
	const [categories, setUSerCategories] = useState([])
	const [adOptions, setAdOptions] = useState([]);

	const getSavedUser = async () => {
		try {
			const data = await localForage.getItem('user')
			if (!!data.token && !!data.user) {
				setUser(data.user);
				setUSerType(data.type);
				setToken(data.token);
				setLoggedIn(true);
			}
		} catch (error) {
			setLoggedIn(false);
		}

	}

	const getSavedCart = async () => {
		try {
			const data = await localForage.getItem('cart')
			if (!!data) {
				setCart(data || {});
				setCartLength(Object.keys(data || {}).length);
			}
		} catch (error) {

		}

	}

	const init = async () => {
		await getSavedUser()
		await getSavedCart()
		setLoaded(true)
	
	}


	useEffect(init, []);

	const login = async (values) => {
		setLoading(true);
		setUser(values.user);
		setUSerType(values.type);
		setToken(values.token);
		localForage.setItem('user', (Object.assign({}, values)), (res) => {
			console.log("localForage-res", res)
			setLoggedIn(true);
			setLoading(false);
		}).catch(err => {
			console.log("localForage-err", err)

		})
	}

	const updateUser = async (values) => {
		setLoading(true);
		setUser(Object.assign(user, values));
		localForage.setItem('user', { user: Object.assign({}, user, values), token: token, userType: userType }, () => {
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
		setUpdate(c => c + 1);
		localForage.setItem('cart', cartObject, () => { });
	};

	const changeQuery = (q) => {
		setQuery({...q});
	};

	const changeCart = (newCart) => {
		let cartObject = JSON.parse(JSON.stringify(newCart));
		setCart(cartObject);
		setCartLength(Object.keys(cartObject).length);
		setUpdate(c => c + 1);
		localForage.setItem('cart', cartObject, () => { });
	};

	const removeFromCart = (id) => {
		let cartObject = JSON.parse(JSON.stringify(cart));
		delete cartObject[id];
		setCart(cartObject);
		setCartLength(Object.keys(cartObject).length);

		setUpdate(c => c + 1);
		localForage.setItem('cart', cartObject, () => { });
	};

	const clearCart = () => {
		setCart({});
		setCartLength(0);
		localForage.setItem('cart', {}, () => { });
		setUpdate(c => c + 1);
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


	const isProtectedRoute = ProtectedRoutes.filter(route => router.route.includes(route))

	if (!loggedIn && loaded && isProtectedRoute.length) {
		router.replace('/login')
		return null
	}
	return <UserContext.Provider
		value={{
			login, logout, addToCart, changeCart, editProfile, updateUser, cartLength, updateQuery, query, changeQuery, update, removeFromCart, clearCart, cart, profileEditedData, userCategories, categories, user, userType, token, loggedIn, loaded, adOptions
			, setAdOptions
		}}
	>
		{loaded ? props.children : <Layout>
			<Loader />
		</Layout>}

	</UserContext.Provider>
}
