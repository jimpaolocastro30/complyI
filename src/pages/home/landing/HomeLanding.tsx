import React from 'react'
import styled from 'styled-components'
import PaddedContainer from '../../../components/PaddedContainer'
import HomeLandingImage from './HomeLandingImage'
import HomeLandingIntroduction from './HomeLandingIntroduction'

type HomeLandingProps = {
	styles?: { container?: React.CSSProperties }
}

const HomeLanding = (props: HomeLandingProps) => {
	return (
		<PaddedContainer>
			<Container style={props.styles?.container}>
				<HomeLandingIntroduction />
				<HomeLandingImage />
			</Container>
		</PaddedContainer>
	)
}

const Container = styled.div`
	display: grid;
	padding-top: clamp(5rem, 5vw, 7rem);
	flex: 1;

	@media (min-width: 1280px) {
		grid-template-columns: repeat(2, 1fr);
		min-height: 90vh;
	}

	@media (min-width: 1440px) {
		grid-template-columns: 1fr 0.6fr;
	}
`

export default HomeLanding
