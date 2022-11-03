export default (companyFields) => ({
	company_name: {
        label: 'إسم الشركة',
		type: 'text',
		required: true
	},
	company_field: {
        label: 'مجال الشركة',
		type: 'select',
		options: [{label: "الرجاء الإختيار", value: ""}].concat(companyFields.map(item => ({label: item, value: item}))),
		required: true
	},
	company_type: {
		label: 'النوع',
		type: 'select',
		options: [{label: "الرجاء الإختيار", value: ""},{label: "شركة", value: "company"},{label: "وكالة", value: "agency"}],
		required: true
	},
	name: {
        label: 'الشخص المسؤول',
		type: 'text',
		required: true
	},
	website: {
        label: 'الموقع الإلكتروني',
		type: 'text',
		required: false
	},
	email: {
        label: 'البريد الإلكتروني التجاري ، مثال: email@yourdomain.com',
		type: 'email',
		pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
		required: true
	},
	password: {
        label: 'كلمة المرور',
		type: 'password',
		required: true
	},
	password_confirmation: {
        label: 'تأكيد كلمة المرور',
		type: 'password',
		required: true
	},
	mobile: {
        label: 'رقم التواصل',
		type: 'phone',
		required: true
	},
	
});