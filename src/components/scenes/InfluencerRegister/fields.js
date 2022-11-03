import countries from './countries.json'
export default (tags, cats) => ({
	name: {
        label: 'الإسم',
		type: 'text',
		required: true
	},
	email: {
        label: 'البريد الإلكتروني',
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
	}
	/* avatar: {
		type: 'file',
		require: false,
		noBorder: true,
		label: "الصورة الشخصية",
		uploadLabel: "الصورة الشخصية"
	},
	categories: {
		label: 'الأقسام',
		type: 'tag-dropdown',
		options: [{label: "الرجاء الإختيار", value: ""}].concat(cats.map(item => ({label: item.name, value: item.id}))),
		required: false
	},
	tags: {
		label: 'الأوسم',
		type: 'tag-dropdown',
		options: [{label: "الرجاء الإختيار", value: ""}].concat(tags.map(item => ({label: item.name, value: item.id}))),
		required: false
	}, */
	/* ,
	specialization: {
        label: 'الوصف المختصر أو التخصص (أقل من ٥٠ حرف)',
		type: 'text',
		maxlength: 50,
		pattern: "^.{1,50}$",
		required: true
	},
	intro: {
        label: 'الوصف (أقل من ٢٨٠ حرف) ',
		type: 'textarea',
		pattern: "^.{1,280}$",
		required: false
	},
	gender: {
        label: 'الجنس',
		type: 'radio',
		options: [
			{
				label: "ذكر",
				value: 'male'
			},
			{
				label: "أنثى",
				value: 'female'
			}
		],
		required: true
	},
	country: {
        label: 'الدولة',
		type: 'select',
		options: Object.values(countries).map(e => ({label: e.ar_name, value: e.ar_name})),
		required: true
	},
	city: {
        label: 'المدينة',
		type: 'text',
		required: true
	},
	platforms: {
        label: 'حساباتك في مواقع التواصل',
		type: 'social',
		required: false
	} */
});

export const companyPolices = {
	label: 'بمجرد تسجيلك انت توافق علي ',
	items: [
		{
			key: "usageRoles  ",
			value: "شروط الاستخدام"
		},
		{
			key: "",
			value: ""
		}
	]
}