import React,{ useEffect, useState }  from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import appConfig from '../../src/configs/app';
import Layout from '../../src/components/common/Layout'
import InfluencersCards from '../../src/components/common/InfluencersCards';

const TagPage = () => {

  const[influencers,setInfluencers] = useState([]);

  const router = useRouter();
  const {tag_name,tag_id} = router.query;

  useEffect(() => {
		init();
	}, []);

	const init = async () => {
    const res = await axios.get(`${appConfig.apiURI}/influencers?tag_id=${tag_id}`);
    setInfluencers(res.data.data.ifluencers)
	};

return (
    <Layout title={tag_name} >
      <InfluencersCards influencersList={influencers}/>
		</Layout>

  );
};

export default TagPage;

