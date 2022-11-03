import React, { useState, useEffect, useContext } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSnackbar } from 'notistack';

import moment from 'moment'

import { Container, Input, Label, Error } from './styles';

export default function DateInput(props) {
	const [date, setDate] = useState(!!props.value && !!props.value.toDate ? props.value.toDate() : (moment().add(2, 'days').toDate()));
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	useEffect(() => {
		if (props.onChange) {
			let twoDays = moment().add(2, 'days');
			if(moment(date).diff(twoDays, 'days') >= 0) {
				props.onChange(date);
			} else {
				setDate(!!props.value && !!props.value.toDate ? props.value.toDate() : (moment().add(2, 'days').toDate()));
				enqueueSnackbar('هذا التاريخ غير متاح!', {
					variant: 'error',
				});
			}
		}
	}, [date]);

	return <Container>
		{!!props.label && <Label>{props.label}</Label>}
		<Input selected={date} onChange={date => setDate(date)} />
		{!!props.error && <Error>{props.error}</Error>}
	</Container>
};

