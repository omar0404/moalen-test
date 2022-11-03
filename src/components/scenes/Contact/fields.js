export default {
	name: {
        label: 'الاسم بالكامل ',
		type: 'text',
		defaultValue: '',
		required: true
	},
    mobile: {
        label: 'رقم التليفون',
		type: 'phone',
		defaultValue: '',
		required: true
	},
	email: {
        label: 'البريد الالكترونى',
		type: 'email',
		defaultValue: '',
		required: true
	},
	message: {
        label: 'الرساله',
		type: 'textarea',
		defaultValue: '',
		required: true
	},
}