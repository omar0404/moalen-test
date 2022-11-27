import React, { useContext } from 'react';


import {  FaYoutube, FaSnapchatGhost, FaFacebookF, FaTwitter, FaInstagram, FaTiktok  } from "react-icons/fa";

import Modal from '../Modal'
import Button from '../Button'
import Toggle from '../Toggle'
import Select from '../Select'
import DateInput from '../DateInput';
import moment from 'moment/min/moment-with-locales';
moment.locale('ar-sa');



import {  ModalTitle, Row, ModalContent, SectionRow, ModalStyledIcon,ModalButtons, ModalRow} from './styles';
import { UserContext } from '../../../containers/User';


const PLATFORM_ICONS = {
	youtube: <FaYoutube />,
	snapchat: <FaSnapchatGhost />,
	twitter: <FaTwitter />,
	instagram: <FaInstagram />,
	tiktok: <FaTiktok />,
	facebook: <FaFacebookF />
};
const AddToCartModal = ({show,toggleInfluencerModal,onShowPricePress}) => {
  const {setAdOptions,adOptions} = useContext(UserContext)
  const changeOptions = (i, key, value) => {
		adOptions[i][key] = value;
		setAdOptions([...adOptions]);
	};


  return (
    <Modal show={show} updateShow={toggleInfluencerModal}>
    <ModalTitle>إختر منصات الإعلان!</ModalTitle>
    <ModalContent>
      {
        adOptions.map((p, i) => (
          <SectionRow key={`row_`+i}>
            <ModalRow style={{ flex: 1,  padding: 0, width: '100%' }}>
              <Toggle style={{ flex: 1 }} noMargin={true} value={p.active} onChange={value => { changeOptions(i, 'active', value) }} />
              <ModalStyledIcon style={{ flex: 1 }} active={p.active}>{!!PLATFORM_ICONS[p.name.toLowerCase()] && PLATFORM_ICONS[p.name.toLowerCase()]}</ModalStyledIcon>
            </ModalRow>
            <ModalRow disable={!p.active} style={{ flex: 2, margin: 0, padding: 0, width: '100%', opacity: p.active ? 1 : 0.5 }}>
              <Select onChange={e => { changeOptions(i, 'ads_types',  e.target.value); }} active={p.active} label="نوع الإعلان" options={[{label: "اختر من القائمة", value: ""}].concat(p.ads_types_list.map(item => ({label: item.type, value: item.type})))} value={p.ads_types} />
              <DateInput onChange={value => { changeOptions(i, 'published_date', value) }} label="تاريخ الإعلان" value={p.published_date} />
            </ModalRow>
          </SectionRow>
        ))
      }
    </ModalContent>
    <ModalButtons>
      {adOptions.filter(e => e.active).length > 0 && adOptions.filter(e => e.active).length == adOptions.filter(e => e.active).filter(e => e.ads_types != "").length ?
        <Button onClick={onShowPricePress} primary={true}>اضغط هنا لعرض السعر</Button>
        :
        <Button disable="true" primary={true} style={{opacity: 0.5}}>اضغط هنا لعرض السعر</Button>
      }
    </ModalButtons>
  </Modal>
  )
}
export default AddToCartModal