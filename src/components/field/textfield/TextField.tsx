import { useField } from 'formik'
import React from 'react'
import BaseField from './BaseField'

type TextFieldProps = {
	styles?: { container?: React.CSSProperties }
	placeholder?: string
	name: string
}

const TextField = (props: TextFieldProps) => {
	const [field] = useField(props.name)

	return (
		<BaseField
			styles={props.styles}
			props={{
				...field,
				type: 'text',
				placeholder: props.placeholder
			}}
		/>
	)
}

export default TextField
