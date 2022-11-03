import countries from '../InfluencerRegister/countries.json';

export default (categories,tags,regions) => ({
	name: {
        label: 'إسم الشهرة',
		type: 'textWithLabel',
		required: true
	},
	specialization: {
        label: 'الاختصاص',
		type: 'textWithLabel',
		required: true
	},
	avatar: {
        label: '',
		type: 'avatar',
		required: false
	},
	cover: {
        label: 'الغلاف',
		type: 'fileWithLabel',
		required: false
	}, 
	gender: {
		label: 'الجنس',
		type: 'selectWithLabel',
		options: [{label: "الرجاء الإختيار", value: ""},{label: "ذكر", value: "male"},{label: "انثى", value: "female"}],
		required: true
	},
	country: {
        label: 'الدولة',
		type: 'selectWithLabel',
		options: Object.values(countries).map(e => ({label: e.ar_name, value: e.ar_name})),
		required: true
	},
	gallery: {
        label: 'عينه من المحتوى',
		type: 'gallery',
		number: [0,1,2],
		required: false
	},
	intro: {
        label: 'نبذة مختصرة عنك',
		type: 'textareaWithLabel',
		pattern: "^.{1,280}$",
		required: true
	},
	categories: {
		label: 'الفئات',
		type: 'TagDropdownWithLabel',
		options: [{label: "الرجاء الإختيار", value: ""}].concat(categories.map(item => ({label: item.name, value: item.id}))),
		required: true
	},
	tags: {
		label: 'الوسم',
		type: 'TagDropdownWithLabel',
		options: [{label: "الرجاء الإختيار", value: ""}].concat(tags.map(item => ({label: item.name, value: item.id}))),
		required: true
	},
	regions: {
		label: 'منطقه التاثير',
		type: 'TagDropdownWithLabel',
		options: [{label: "الرجاء الإختيار", value: ""}].concat(regions.map(item => ({label: item.name, value: item.id}))),
		required: true
	},
	platforms: {
		label: 'المنصات',
		type: 'platformsListBox',
		required: false
	}
});