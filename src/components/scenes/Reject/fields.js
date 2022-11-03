export default {
	reason: {
        label: 'نرجو منك مساعدتنا في اختيار السبب',
		type: 'select',
		options: [
			{label: "الرجاء الإختيار", value: ""},
			{label: 'السعر غير مناسب', value: 'السعر غير مناسب'},
			{label: 'احتاج تغيير المؤثرين', value: 'احتاج تغيير المؤثرين'},
			{label: 'احتاج معلومات أكثر', value: 'احتاج معلومات أكثر'},
			{label: 'اخرى', value: 'اخرى'}
		],
		required: true
	},
	text: {
        label: 'اكتب رسالتلك او اقتراحك',
		type: 'textarea',
		pattern: "^.{1,280}$",
		required: false
	}
};
