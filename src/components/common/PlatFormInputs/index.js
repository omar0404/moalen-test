import React , {useState , useEffect} from 'react';
import Image from 'next/image';
import configs from '../../../configs'


import { FaYoutube, FaSnapchatGhost, FaFacebookF, FaTwitter, FaInstagram, FaTiktok  } from "react-icons/fa";

import {
    Container,Label,PlatFormsContainer,PlatFormBox,IconBox,Input , ContainerBox ,ImageBox, InlineLabel, IconInput , AddBox, AddType , AddsTypesBox , PersentageContainer , PersentageBox, PlatfomText
} from './styles';

import * as api from '../../../utils/api';

import getImage from '../../../utils/getImage';

export default function PlatFormInputsComponent (props) {

    const [platformData, setPlatformData] = useState({});
    const [socialAccounts, setSocialAccounts] = useState([]);
    const [value, setValue] = useState([]);
    const [loading, setLoading] = useState(false);


    
    const platForms = [
        {name : 'youtube' , icon: <FaYoutube /> , color: '#ff0000'},
        {name : 'snapchat' , icon: <FaSnapchatGhost />, color: '#f0ec00'},
        {name : 'twitter' , icon: <FaTwitter />, color: '#1da1f2'},
        {name : 'instagram' , icon: <FaInstagram />, color: '#c32aa3'},
        {name : 'tiktok' , icon: <FaTiktok />, color: '#010101'},
        {name : 'facebook' , icon: <FaFacebookF />, color: '#4267B2'},
    ];

    const addTypes = [
        {type: "فيديو", price: null},
        {type: "تغطية مع حضور", price: null},
        {type: "صورة", price: null}
    ]

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        setPlatformDataFromProps()
    }, [socialAccounts]);

    const setPlatformDataFromProps = () => {
        let val = [... socialAccounts];
        if(props.value && val.length > 0) {
            props.value.map(item => {
                let i = val.findIndex((ele) => ele.name == item.name);
                if(i >=0) {
                    val[i] = item;
                    setValue(val);
                }
            })  
        }
    }

    const init = async () => {
        try {
            let social = await api.get("/platforms");
            setValue(social.data.data.map(item => ({id: item.id,logo: item.logo, name: item.name, followers_count: null,females: 50,males: 50, account: "",ads_types: item.ads_types })));
            setSocialAccounts(social.data.data.map(item => ({id: item.id,logo: item.logo, name: item.name, followers_count: null,females: 50,males: 50, account: "",ads_types: item.ads_types })));
            //if (props.onChange)
                //props.onChange(social.data.data.map(item => ({platform_id: item.id, name: item.name, followers_count: null, account: "",ads_types: addTypes})));
        } catch (error) {
            // //console.log(error)
         }
    } 
    const onChange = (i,key,val ,addIndex, textType) => {
        const re = /^[0-9\b]+$/;
        if(textType && textType == 'number') {
            val = re.test(val) ?   val : '';
        }
        let platFormValues = [... value];
        addIndex ? platFormValues[i][key][addIndex-1]["price"] = val : platFormValues[i][key] = val;
        key == 'males' ? platFormValues[i]['females'] = 100 -val : null;
        key == 'females' ? platFormValues[i]['males'] = 100 -val : null;
        setValue(platFormValues);
        props.onChange(value);
    }

    const myLoader = ({ src, width, quality }) => {
        return `${getImage(src)}?w=${width}&q=${quality || 75}`
      }

    return (
        <Container>
            <Label>{props.label} </Label>
            <ContainerBox>
                <PlatfomText>الرجاء اختيار المنصة المراد استقبال الاعلانات عن طريقها وتعبئة جميع البيانات المطلوبة</PlatfomText>
                <PlatFormsContainer>
                    {value.length > 0 && value.map((platform, i )=> {
                        return <PlatFormBox key={platform.name + i}>
                            <IconBox>
                                {/* <StyledIcon color={platform.color}>{platform.icon}</StyledIcon>  */}
                                <ImageBox>
                                    <Image alt={platform.name} loader={myLoader} src={platform.logo} width="42" height="42" />
                                </ImageBox>
                                <IconInput type="text" pattern="[0-9]*"  value={platform.followers_count || ''}  placeholder="اذكر عدد المتابعين" onChange={(e)=>onChange(i,'followers_count',e.target.value,null,'number')}></IconInput>
                            </IconBox>
                            <Input type="text" placeholder=" اضف رابط حسابك  " value={platform.account || ''} onChange={(e)=>onChange(i,'account',e.target.value)}></Input>
                                <InlineLabel>  نوع النشر والسعر </InlineLabel>
                            <AddsTypesBox>
                                {platform.ads_types && platform.ads_types.length > 0 && platform.ads_types.map((item, y) => {
                                return <AddBox key={y}>
                                    <IconInput type="text" pattern="[0-9]*"  value={platform.ads_types[y].price || ''}  placeholder='أكتب سعر الاعلان' onChange={(e)=>onChange(i,'ads_types',e.target.value,y+1,'number')}></IconInput>
                                    <AddType><p>{item.type}</p></AddType>
                                </AddBox>
                            })}
                            </AddsTypesBox>
                                <InlineLabel>  نسبه التاثير المئويه</InlineLabel>
                            <PersentageContainer>
                                <PersentageBox> 
                                    <input type="text" pattern="[0-9]*" placeholder="%" value={platform.males || 50} onChange={(e)=> onChange(i,'males',e.target.value,null,'number')} />
                                    <span>رجال</span>
                                </PersentageBox>
                                <PersentageBox>
                                    <input type="text" pattern="[0-9]*" placeholder="%" value={platform.females || 50} onChange={(e)=>onChange(i,'females',e.target.value,null,'number')} />
                                    <span>نساء</span>
                                </PersentageBox>
                            </PersentageContainer>
                        </PlatFormBox>

                    })}
                </PlatFormsContainer>
            </ContainerBox>
        </Container>
    )

}