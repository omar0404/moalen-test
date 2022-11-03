import React, { useEffect, useState, useContext } from 'react'
import { RiFileUploadLine, RiLoader2Line, RiCheckLine } from "react-icons/ri";
import { FaUpload } from "react-icons/fa";
import Image from 'next/image'


import { Container, Input, Label, Error, LabelContainer, FileName, Img } from './styles';

import { SnackbarProvider, useSnackbar } from 'notistack';

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

export default function FileInput(props) {
	const [fileName, setFileName] = useState(props.uploadLabel || "إختر ملف");
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	const [img, setImg] = useState("");

	const onChange = async (v) => {
		////console.log('v',v);
		if (v.target.files[0]) {
			let file = v.target.files[0];
			let value = v.target.value;
			let name = file.name;
			setFileName(name);
			setImg(value);
			// //console.log('value',value);
			// //console.log('v.target.files[0]',v.target.files[0]);
			if (props.onChange)
				props.onChange(v.target.files[0]);

		}
	};

	return <Container>
		<LabelContainer noBorder={props.noBorder}>
			<Input {...props} placeholder={props.label} type="file" onChange={onChange} style={props.style} />
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
			<FileName>{fileName}</FileName>
		</LabelContainer>
		{!!props.error && <Error>{props.error}</Error>}
	</Container>;
};