import React, { useState } from 'react'
import { RiLoader2Line, RiCheckLine } from "react-icons/ri";
import { FaUpload } from "react-icons/fa";

import { Container, Input, Error, LabelContainer, FileName } from './styles';

export default function FileInput(props) {
	const [fileName, setFileName] = useState(props.uploadLabel || "إختر ملف");
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [img, setImg] = useState("");

	const onChange = async (v) => {
		if (v.target.files[0]) {
			let file = v.target.files[0];
			let value = v.target.value;
			let name = file.name;
			setFileName(name);
			setImg(value);
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