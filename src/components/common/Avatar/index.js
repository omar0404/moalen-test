import React, { useEffect, useState, useContext } from 'react'
import { RiLoader2Line, RiCheckLine } from "react-icons/ri";
import { FaUpload } from "react-icons/fa";
import Image from 'next/image';
import configs from '../../../configs';

import {myLoader} from '../../../utils/loader';

import { Container, Input, Label, Error, LabelContainer, FileName, Img, InputContainer , ImageBox } from './styles';


const timeKey = () => {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	let d = new Date();
	let time = '' + d.getTime();

	for (var i = 0; i < time.length; i++) {
		result += characters.charAt(Math.floor((time[i] / 10) * Math.random() * charactersLength));
	}
	return result;

}


export default function Avatar(props) {
	const [fileName, setFileName] = useState(props.uploadLabel || "إختر صوره");
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [img, setImg] = useState('');

	useEffect(()=> {
		typeof(props.imageVal) == 'object' ? 
			convertFileToImg(props.imageVal)
			:setImg(props.imageVal|| '')
		props.onChange(props.imageVal)	
	},[]);

	const onChange = async (v) => {
		if (v.target.files[0]) {
			let file = v.target.files[0];
			let name = file.name;
			let url =URL.createObjectURL(file)
			setFileName(name);
			setImg(url);
			if (props.onChange)
				props.onChange(v.target.files[0]);
		}
	};

	const convertFileToImg = (file) => {
		let fileReader;
		if (file) {
			fileReader = new FileReader();
			fileReader.onload = (e) => {
			  const { result } = e.target;
			  if (result) {
				setImg(result);
			  }
			}
			fileReader.readAsDataURL(file);
		  }
	}

	

	return <Container>
		<InputContainer>
		<Label> الصوره الشخصيه</Label>
			<LabelContainer noBorder={props.noBorder}>
            <ImageBox>
                {img &&<Image className='avatarImg' src={img} alt={fileName} loader={myLoader} layout='responsive' width={52} height={52} />}
            </ImageBox>
			<Input {...props} placeholder={props.label ? props.label : ''} type="file" onChange={onChange} style={props.style} />
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
			{/* <FileName>{fileName}</FileName> */}
		</LabelContainer>
		</InputContainer>
		{!!props.error && <Error>{props.error}</Error>}
	</Container>;
};