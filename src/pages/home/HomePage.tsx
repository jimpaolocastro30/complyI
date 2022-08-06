import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/footer/Footer'
import Government from '../../components/government/Government'
import Pricing from '../../components/pricing/Pricing'
import Suite from '../../components/suite/Suite'
import Team from '../../components/team/Team'
import HomeHow from './how/HomeHow'
import HomeLanding from './landing/HomeLanding'

type HomePageProps = {
	styles?: { container?: React.CSSProperties }
}

const HomePage = (props: HomePageProps) => {
	return (
		<Container style={props.styles?.container}>
			<HomeLanding />
			<Government styles={{ container: { marginBottom: 120 } }} />
			<Pricing styles={{ container: { marginBottom: 120 } }} />
			<Team styles={{ container: { marginBottom: 120 } }} />
			{/* <NetworkOfCompliance styles={{ container: { marginBottom: 120 } }} /> */}
			<HomeHow styles={{ container: { marginBottom: 120 } }} />
			<Suite styles={{ container: { marginBottom: 120 } }} />
			<Footer />
		</Container>
	)
}

const Container = styled.div``

export default HomePage
