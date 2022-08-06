import React from 'react'
import styled from 'styled-components'

type BaseFieldProps = {
	styles?: { container?: React.CSSProperties }
	props?: React.InputHTMLAttributes<HTMLInputElement>
}

const BaseField = ({ styles, props }: BaseFieldProps) => {
	return (
		<Container style={styles?.container}>
			<Input {...props} />
		</Container>
	)
}

const Container = styled.div`
	border: thin solid #444768;
	border-radius: 3px;
`

const Input = styled.input`
	padding: 0.65rem 1rem;
	font-size: 0.7rem;
`

export default BaseField
