import React, { useState, useEffect, useContext ,useRef} from 'react';
import { RiEdit2Line } from "react-icons/ri";
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { ScrollToError } from './ScrollToError'

import { StyledCard, Content, Title, ButtonContainer ,CompanyPlociesBox } from './styles';

import Layout from '../Layout';
import Card from '../Card';
import Input from '../Input';
import PhoneInput from '../PhoneInput';
import DateInput from '../DateInput';
import Select from '../Select';
import InputArea from '../InputArea';
import Checkbox from '../Checkbox';
import QuestionsInput from '../QuestionsInput';
import Button from '../Button';
import Loader from '../Loader';
import Radio from '../Radio';
import FileInput from '../FileInput';
import SocialInput from '../SocialInput';
import MultiTagSelect from '../MultiTagSelect';
import TagDropdown from '../TagDropdown';
import ModalCompoent from '../Modal';
import InputWithLabelComponent from '../InputWithLabel';
import InputAreaWithLabel from '../InputAreaWithLabel';
import SelectWithLabel from '../SelectWithLabel';
import PlatFormInputsComponent from '../PlatFormInputs';
import FileInputWithLabel from '../FileInputWithLabel';
import Gallery from '../Gallery';
import Avatar from '../Avatar';
import TagDropdownWithLabel from '../TagDropdownWithLabel';

import { UserContext, } from '../../../containers/User'

export default function Form(props) {
	const router = useRouter()

	let id = props.id;
	let fields = props.fields;

	const user = useContext(UserContext);
	const [loading, setLoading] = useState(false);

	let initialValuesObj = {};
	Object.keys(fields).forEach(key => { initialValuesObj[key] = !!props.defaultValue && !!props.defaultValue[key] ? props.defaultValue[key] : ""; })
	const [initialValues, setInitialValue] = useState(initialValuesObj);
	const [formFields, setFormFields] = useState(fields);
	const [saveFlag, setSaveFlag] = useState(false)

	

	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const init = async () => {
		setLoading(true);
		setLoading(false);
	};

	useEffect(() => {
		init();
	}, []);


	const validate = values => {
		const errors = {};
		Object.keys(fields).forEach(key => {
			let field = fields[key];
			if ((field.required || field.require) && (!values[key] || values[key] == "")) {
				errors[key] = 'الرجاء تعبئة هذا الحقل!';
			}
			if (!!field.pattern && !(new RegExp(field.pattern, 'i').test(values[key]))) {
				errors[key] = `الرجاء إدخال القيمة بشكل صحيح!`;
			}
		});
		//return !saveFlag ? errors : {};
		return errors
	}

	const submit = async (values ,{resetForm} ) => {
		setSaveFlag(false);
		let errors = validate(values);
		if (Object.keys(errors).length > 0) {
			enqueueSnackbar('الرجاء تعبئة هذا الحقل!', {
				variant: 'error',
			});
			return;
		}
		values.updated = new Date().getTime();
		if (props.addedValues) {
			values = Object.assign({}, values, props.addedValues);
		}
		if (props.submit) {
			props.submit(values);
			//reset();
			resetForm(initialValues)
		}
		setLoading(false);
	};

	const onSaveData = async (values) => {
		setSaveFlag(true);
		props.saveData(values)
	}


	if (loading) {
		return <Content>
			<Loader />
		</Content>
	}

	const modalHandling = (val) => {
		props.openModal(val)
	}
	const ref = useRef(null);
   
   const onChangeHandling = () => {
	   props.onChangeHandling(ref.current.values) 
   }

	return (
		<>
			<Content>
				{!!props.title && <Title>{props.title}</Title>}
				<Formik
					innerRef={ref}
					initialValues={initialValues}
					onSubmit={submit}
					validate={validate}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
						setFieldValue,
						resetForm
						/* and other goodies */
					}) => (
						<form onSubmit={handleSubmit} onChange={onChangeHandling} >
							{
								Object.keys(fields).map((key, i) => {
									let field = fields[key];
									switch (field.type) {
										case "textarea":
											return <InputArea key={key + i} {...field} name={key} label={field.label} error={touched[key] && errors[key]} onChange={handleChange} onBlur={handleBlur} value={values[key]} />
										case "textareaWithLabel":
											return <InputAreaWithLabel key={key + i} {...field} name={key} label={field.label} error={touched[key] && errors[key]} onChange={handleChange} onBlur={handleBlur} value={values[key]} />	
										case "select":
											return <Select key={key + i} {...field} options={field.options} name={key} label={field.label} error={touched[key] && errors[key]} onChange={handleChange} onBlur={handleBlur} value={values[key]} />
										case "selectWithLabel":
											return <SelectWithLabel saveFlag={saveFlag} key={key + i} {...field} options={field.options} name={key} label={field.label} error={touched[key] && errors[key]} onChange={handleChange} onBlur={handleBlur} value={values[key]} />
										case "checkbox":
											return <Checkbox key={key + i} {...field} options={field.options} name={key} label={field.label} error={touched[key] && errors[key]} onChange={handleChange} onBlur={handleBlur} value={values[key]} />
										case "question-input":
											return <QuestionsInput name={key} {...field} label={field.label} error={touched[key] && errors[key]} onChange={(e, keywords) => { setFieldValue(key, e); setFieldValue(field.keywordsKey, keywords); }} onBlur={handleBlur} value={values[key]} keywords={values[field.keywordsKey]} />
										case "date-input":
											return <DateInput name={key} {...field} label={field.label} error={touched[key] && errors[key]} onChange={(e) => { setFieldValue(key, e); }} onBlur={handleBlur} value={values[key]} />
										case "radio":
											return <Radio key={key + i} {...field} options={field.options} name={key} label={field.label} error={touched[key] && errors[key]} onChange={(e) => { setFieldValue(key, e); setFieldValue(`${key}Value`, field.options.filter(e => e.value == key)[0]) }} onBlur={handleBlur} value={!!values && !!values[key] ? values[key] : ""} />
										case "phone":
											return <PhoneInput {...field} key={key + i} {...field} name={key} {...field} label={field.label} error={touched[key] && errors[key]} onChange={e => setFieldValue(key, e)} onBlur={handleBlur} value={!!values && !!values[key] ? values[key] : ""} />
										case "multi-tag":
											return <MultiTagSelect key={key + i} {...field} options={field.options} name={key} label={field.label} error={touched[key] && errors[key]} onChange={(e) => { setFieldValue(key, e); setFieldValue(`${key}Value`, field.options.filter(e => e.value == key)[0]) }} onBlur={handleBlur} value={!!values && !!values[key] ? values[key] : []} />
										case "tag-dropdown":
											return <TagDropdown key={key + i} {...field} options={field.options} name={key} label={field.label} error={touched[key] && errors[key]} onChange={(e) => { setFieldValue(key, e); setFieldValue(`${key}Value`, field.options.filter(e => e.value == key)[0]) }} onBlur={handleBlur} value={!!values && !!values[key] ? values[key] : []} />
										case "TagDropdownWithLabel":
											return <TagDropdownWithLabel key={key + i} {...field} options={field.options} name={key} label={field.label} error={touched[key] && errors[key]} onChange={(e) => { setFieldValue(key, e); setFieldValue(`${key}Value`, field.options.filter(e => e.value == key)[0]) }} onBlur={handleBlur} value={!!values && !!values[key] ? values[key] : []} />
										case "social":
											return <SocialInput key={key + i} {...field} options={field.options} name={key} label={field.label} error={touched[key] && errors[key]} onChange={(e) => { setFieldValue(key, e); }} onBlur={handleBlur} value={!!values && !!values[key] ? values[key] : []} />
										case "file":
											return <FileInput key={key + i} {...field} type={field.type} name={key} label={field.label} error={touched[key] && errors[key]} onChange={e => setFieldValue(key, e)} onBlur={handleBlur} />
										case "fileWithLabel":
											return <FileInputWithLabel  imageVal={values[key]} key={key + i} {...field} type={field.type} name={key} label={field.label} error={touched[key] && errors[key]} onChange={e => setFieldValue(key, e)} onBlur={handleBlur} />
										case "avatar":
											return <Avatar  imageVal={values[key]} key={key + i} {...field} type={field.type} name={key} label={field.label} error={touched[key] && errors[key]} onChange={e => setFieldValue(key, e)} onBlur={handleBlur} />
										case "textWithLabel":
											return <InputWithLabelComponent key={key + i} {...field} type={field.type} name={key} label={field.label} error={touched[key] && errors[key]} onChange={handleChange} onBlur={handleBlur} value={values[key]} />
										case "platformsListBox":
											return <PlatFormInputsComponent key={key + i} {...field} type={field.type} name={key} label={field.label} error={touched[key] && errors[key]} onChange={e => setFieldValue(key, e)} onBlur={handleBlur} value={values[key]} />
										case "gallery":
											return <Gallery imgVals={values[key]} key={key + i} {...field} type={field.type} number={field.number} name={key} label={field.label} error={touched[key] && errors[key]} onChange={e => setFieldValue(key, e)} onBlur={handleBlur} />
										
										default:
											return <Input key={key + i} {...field} type={field.type} name={key} label={field.label} error={touched[key] && errors[key]} onChange={handleChange} onBlur={handleBlur} value={values[key]} />
									}
								})
							}
							{props.companyPolices && 
							<CompanyPlociesBox>
								 {props.companyPolices.map((ele,i)=> (
									 <span key={ele.key} onClick={()=> { modalHandling(ele)}}>{ele.title}</span>
								 ))}
							</CompanyPlociesBox>
							}
							<ButtonContainer className='formBtns'>
								{loading ? <Loader /> : <Button primary={true} {...props.styles} type="submit" disabled={loading}>{props.submitLabel || "Save"}</Button>}
								{loading  ? <Loader /> : (props.saveLabel&& <Button className="saveBtn" onClick={() => {onSaveData(values)}}  {...props.styles}  disabled={loading}>{props.saveLabel || "Save"}</Button>)}
							</ButtonContainer>
						<ScrollToError/>		
						</form>
					)}
				</Formik>
			</Content>
		</>
	)
};
//SocialInput
//FileInput
//TagDropdown