/// <reference types="vite/client" />

type GovernmentItemProps = {
	logo: string
	text: string
}

type PriceProps = {
	currency: 'PHP'
	locale: 'en-PH'
	value: number
}

type PricingItemProps = {
	icon: string
	title: string
	captions: Array<string>
	price: PriceProps
}

type TeamItemProps = {
	photo: string
	fullName: string
	position: string
}

type RegulatoryManagementSuiteItemProps = {
	data: any
	title: string
	caption: string
}

type FooterContentReachUsItemProps = {
	icon: JSX.Element
	text: string
}

type FooterContentFollowUsItemProps = {
	icon: string
	name: string
	link: To
}

type FooterContentSubscriptionFormProps = {
	email: string
}

type ClientProps = {
	email: string
	mobileNumber: string
}

type WithToken = {
	token?: string
}

type ResponseBaseProps<T = unknown> = {
	date: Date
	message: string
	packet?: T
}
