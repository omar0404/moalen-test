import  { useContext, useState,useEffect } from 'react'
import * as api from '../utils/api';
import { useSnackbar } from 'notistack';
import moment from 'moment'
import { UserContext } from '../containers/User';
import { useRouter } from 'next/router';
const fixNum = (replaceString) => {
	let string = '';
	string = '' + replaceString.toString();
	let find = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
	let replace = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	for (var i = 0; i < find.length; i++) {
		string = string.replace(new RegExp(find[i], 'g'), replace[i]);
	}
	return string;
};

const useAddToCartModal = (data) => {
  const [showAddToCartModal,setShowAddToCartModal] = useState(false)
	const { enqueueSnackbar } = useSnackbar();
	const {addToCart,loggedIn,adOptions} = useContext(UserContext)
	const router = useRouter()
	useEffect(() => {
		if(Object.keys(data || {}).length &&router.query.addToCart && router.query.itemId == data.id){
			addCart()
		}
	}, [data]);
	const requireAuth = (cb) => (...args) => {

		if(!loggedIn){
			router.push({
				pathname:'/login',
				query:{from:router.asPath,addToCart:true,itemId:data.id}
			},'/login')
		}
		else{
			cb(...args)
		}
	}
	const addCart = requireAuth(async() => {

		let savedData = JSON.parse(JSON.stringify(data));
		savedData.adOptions = adOptions;
		let itemData = savedData.adOptions.filter(i => i.active).map(item => ({
			publish_date: fixNum(moment(item.publish_date).format("YYYY-MM-Do")),
			ads_types: [item.ads_types],
			platform_id: item.platform_id
		}));
		let restemp = await api.post(`/influencers/${savedData.id}/add_to_cart`, { platforms: itemData });
		if(restemp.data.error){
			setShowAddToCartModal(true);
			enqueueSnackbar(restemp.data.message, {
				variant: 'error',
			});
		}else {
		  addToCart(savedData);
			setShowAddToCartModal(false);
		}
	});


  return {addCart,setShowAddToCartModal,showAddToCartModal}
}
export default useAddToCartModal