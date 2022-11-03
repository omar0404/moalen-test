import configs from '../configs'

export default (link) => {
	if(link) {
		return  `${configs.app.appUrl}/backend/public/storage/${link.toString().split("/public/storage/")[1]}`;
	}
}