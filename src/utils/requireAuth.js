import localforage from "localforage";

export const requireAuth = async (cb = () => {}) => {
  let user;
  try {
    const data  =  await localforage.getItem('user');
    user = data.user
  } catch (error) {
    
  }
  if(!user)
	return {
		redirect:{
			destination: '/login'
		}
	}

  return cb()
}