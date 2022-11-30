import axios from 'axios';
import { useRouter } from 'next/router';

import appConfig from '../../src/configs/app';
import Layout from '../../src/components/common/Layout'
import InfluencersCards from '../../src/components/common/InfluencersCards';

const TagPage = ({ influencers: {ifluencers} }) => {

const router = useRouter();
const {tag_name} = router.query;

return (
    <Layout title={tag_name} >
      <InfluencersCards influencersList={ifluencers}/>
		</Layout>

  );
};

export default TagPage;

export async function getServerSideProps({ query: { tag_id } }) {
         const res = await axios.get(`${appConfig.apiURI}/influencers?tag_id=${tag_id}`);
         return {
           props: { influencers: res.data.data
           },
         };
   
 }
