import React from 'react'
import styled from 'styled-components'
import { Form, Formik } from 'formik'
import FooterSectionTitle from '../FooterSectionTitle'
import TextField from '../../field/textfield/TextField'
import { useNavigate } from 'react-router-dom'

type FooterContentSubscribeProps = {
	styles?: { container?: React.CSSProperties }
}

const FooterContentSubscribe = (props: FooterContentSubscribeProps) => {
	const navigate = useNavigate()

	return (
		<Container style={props.styles?.container}>
			<FooterSectionTitle title='Subscribe for more updates' />
			<Formik initialValues={{ email: '' } as FooterContentSubscriptionFormProps} onSubmit={({ email }) => {}}>
				<Form>
					{/* <TextField name='email' placeholder='Enter Email' /> */}
					<Submit type='button' onClick={() => navigate('/join')}>
						Subscribe
					</Submit>
				</Form>
			</Formik>
		</Container>
	)
}

const Container = styled.section``

const Submit = styled.button`
	background-color: #444768;
	color: #fff;
	padding: 0.5rem 2.5rem;
	font-size: 0.7rem;
	margin-top: 1ch;
`

export default FooterContentSubscribe
