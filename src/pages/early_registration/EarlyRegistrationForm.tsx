import { Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { addClient } from '../../api/client/post'
import error from '../../api/error'
import Swal from '../../components/alert/Swal'
import TextField from '../../components/field/textfield/TextField'

type EarlyRegistrationFormProps = {
	styles?: { container?: React.CSSProperties }
}

const EarlyRegistrationForm = (props: EarlyRegistrationFormProps) => {
	const token: string | undefined = undefined

	return (
		<Container style={props.styles?.container}>
			<Formik
				initialValues={
					{
						email: '',
						mobileNumber: ''
					} as ClientProps
				}
				onSubmit={async (data, { resetForm }) => {
					const title: string = 'iComply - Waiting List'
					if (!data.email)
						return await Swal.fire({
							title,
							text: 'Please enter your email.',
							icon: 'warning'
						})
					if (!data.mobileNumber)
						return await Swal.fire({
							title,
							text: 'Please enter your mobile number.',
							icon: 'warning'
						})
					addClient(data, { token })
						.then(({ message }) => {
							resetForm()
							Swal.fire({
								title,
								text: message,
								icon: 'success'
							})
						})
						.catch(error)
				}}
			>
				<Form>
					<Subtitle>Please fill up the form:</Subtitle>
					<Fields>
						<TextField name='email' placeholder='Enter Email' styles={{ container: { border: 'none' } }} />
						<TextField name='mobileNumber' placeholder='Enter Mobile No.' styles={{ container: { border: 'none' } }} />
					</Fields>
					<Submit type='submit'>Submit</Submit>
				</Form>
			</Formik>
		</Container>
	)
}

const Container = styled.div`
	z-index: 5;
	position: relative;
`

const Fields = styled.div`
	display: flex;
	gap: 1.5rem;
`

const Submit = styled.button`
	background-color: #444768;
	color: #fff;
	padding: 0.5rem 2.5rem;
	font-size: 0.7rem;
	margin-top: 1rem;
`

const Subtitle = styled.p`
	font-size: clamp(0.7rem, 3vw, 0.8rem);
	margin-bottom: 1rem;
`

export default EarlyRegistrationForm
