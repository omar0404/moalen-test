import React, { useEffect, useState, useContext } from 'react'
import { RiFileUploadLine, RiLoader2Line, RiCheckLine } from "react-icons/ri";
import { FaUpload } from "react-icons/fa";
import Image from 'next/image';
import configs from '../../../configs'

import getImage from '../../../utils/getImage';

import { Container, Input, Label, Error, LabelContainer, FileName, Img, InputContainer ,GalleryContainer,ContainerBox , ImageBox} from './styles';


export default function Gallery(props) {

	const imgs = [
		{url: '', alt: "إختر صوره"},
		{url: '', alt: "إختر صوره"},
		{url: '', alt: "إختر صوره"}
	]
	const [fileName, setFileName] = useState(["إختر صوره","إختر صوره","إختر صوره"]);
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [img, setImg] = useState("");
	const [imgArr, setImgArr] = useState(props.imgVals || imgs);
    const [value, setValue] = useState(props.imgVals || []);
	const [successFlag, setSuccessFlag] = useState(false)

	useEffect(() => {
		let imgs = [... imgArr];
		if(props.imgVals && props.imgVals.length>0) {
			props.imgVals.map((ele,index) => {
				(function () { getImageType(ele , index) })()
		   });
		}else {
			props.number.map(ele => {
				imgs.push({url: '', alt: "إختر صوره"})
			});
			setImgArr(imgs);
		}

        //setValue(null);
		props.onChange(props.imgVals);

		return () => {
			setImgArr([]);
		};
    }, []);

	// const convertImgToFile = async (imgUrl) => {	
	// 	// const response = await fetch(imgUrl);
	// 	// const blob = await response.blob();
	// 	// const file = new File([blob], "صوره" + imgExt, {
	// 	//   type: blob.type,
	// 	// });

	// 	//console.log('imgUrl',imgUrl);

	// 	fetch(imgUrl)
	// 	.then(async response => {
	// 		//console.log('hhhh')
	// 		const contentType = response.headers.get('content-type')
	// 		const blob = await response.blob()
	// 		const file = new File([blob], 'img', { contentType });
	// 		setSuccessFlag(true)
	// 		// access file here
	// 		//return new File([blob], 'img', { contentType })


	// 	}).catch(e => {
	// 		console.log('e',e);
	// 		setSuccessFlag(false)
	// 	})
	
	// }
	const getImageType = (file ,index) => {
		//convertFileToImg(file ,index);
		if(typeof(file) == 'object' ) 
		{
			convertFileToImg(file ,index);
		} else {
			let imgs = [...imgArr];
			imgs[index] = {'url': file, 'alt': 'صوره'};
			setImgArr(imgs);
		}
	}		
	const convertFileToImg = (file,index) => {
		let fileReader;
		if (file) {
			let imgs = [...imgArr];
			fileReader = new FileReader();
			fileReader.onload = (e) => {
			  const { result } = e.target;
			  imgs[index] = {'url':result , 'alt': 'صوره'};
			  setImgArr(imgs);
			}
			fileReader.readAsDataURL(file);
		  }
	}

	const onChange = async (v,i) => {
		let name = [... fileName]
		let imgs = [... imgArr];
		let values =!value ? []: [... value];
		if (v.target.files[0]) {
			let file = v.target.files[0];
			//console.log('file',file);
			name[i] = file.name;
			setFileName(name);
			let url =URL.createObjectURL(file);
			imgs[i] = {url: url , alt: file.name};
			setImgArr(imgs); 
			let index = values.findIndex(ele => ele && ele.name == file.name);
			index != -1 ? values[index]= file : values[i]=file;
			setValue(values);
			if (props.onChange)
				props.onChange(values);
		}
	};
	const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }

	return <Container>
	<InputContainer>
		{ props.label && <Label>{props.label}</Label>}
		<ContainerBox>
			<GalleryContainer>
				{props.number && props.number.map((item,i) => {
					return <LabelContainer key={'img'+i} noBorder={props.noBorder}>
						{imgArr.length > 0 &&<ImageBox>
							{imgArr[i] && imgArr[i]['url'] && <Image src={imgArr[i]['url']} loader={myLoader} alt={imgArr[i]['alt']}   layout='fill'   />}
							{imgArr[i] && typeof(imgArr[i])== 'string'  && <Image src={imgArr[i]} loader={myLoader} alt=''   layout='fill'   />}
						</ImageBox> }
					<Input {...props} placeholder={props.label ? props.label: ''} type="file" onChange={(e)=> onChange(e,i)} style={props.style} />
					{loading ?
						(
							<RiLoader2Line />
						)
						:
						(
							loaded
								?
								<RiCheckLine />
								:
								<FaUpload />
						)}
					<FileName>{fileName[i]}</FileName>
					</LabelContainer>
				})}
			</GalleryContainer>
		</ContainerBox>
	</InputContainer>
	{!!props.error && <Error className='errorMeddage'>{props.error}</Error>}
</Container>;
};