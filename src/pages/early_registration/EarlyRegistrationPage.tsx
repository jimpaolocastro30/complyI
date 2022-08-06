import React from 'react'
import styled from 'styled-components'
import PaddedContainer from '../../components/PaddedContainer'
import EarlyRegistrationForm from './EarlyRegistrationForm'
import EarlyRegistrationHeader from './EarlyRegistrationHeader'
import EarlyRegistrationRobot from './EarlyRegistrationRobot'

type EarlyRegistrationPageProps = {
	styles?: { container?: React.CSSProperties }
}

const EarlyRegistrationPage = (props: EarlyRegistrationPageProps) => {
	return (
		<PaddedContainer>
			<Container style={props.styles?.container}>
				<EarlyRegistrationHeader />
				<EarlyRegistrationForm />
				<EarlyRegistrationRobot />
			</Container>
		</PaddedContainer>
	)
}

const Container = styled.div``

export default EarlyRegistrationPage
