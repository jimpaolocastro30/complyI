import React from 'react'
import styled from 'styled-components'
import PaddedContainer from '../../../components/PaddedContainer'
import HomeHowList, { ItemProps } from './HomeHowList'
import HomeHowRobot from './HomeHowRobot'
import Documents from '../../../assets/how/documents.svg'
import Workflows from '../../../assets/how/workflows.svg'
import Professionals from '../../../assets/how/professionals.svg'
import Time from '../../../assets/how/time.svg'

type HomeHowProps = {
	styles?: { container?: React.CSSProperties }
}

const HomeHow = (props: HomeHowProps) => {
	const items = React.useMemo<Array<ItemProps>>(
		() => [
			{
				caption:
					"We've streamlined various legal and business processes so we don't have to go back and forth like the others.",
				color: '#D58166',
				icon: Workflows,
				title: 'Workflows are Automated'
			},
			{
				caption:
					'The collection, organisation, and storage of all documents and info are done within the app so nothing is lost.',
				color: '#5F69CF',
				icon: Documents,
				title: 'Documents & Info are neat & tidy'
			},
			{
				caption:
					'Just reach out to us and our lawyers, accountant, and business professionals will assist you all throughout.',
				color: '#24C244',
				icon: Professionals,
				title: 'Professionals at your Fingertips'
			},
			{
				caption:
					"With our web based and mobile application, you can be the digital nomad you've always dreamed of becoming. Submit, file, post and account from anywhere.",
				color: '#D54747',
				icon: Time,
				title: 'Anytime, anywhere'
			}
		],
		[]
	)

	return (
		<PaddedContainer>
			<Container style={props.styles?.container}>
				<HomeHowRobot />
				<HomeHowList items={items} />
			</Container>
		</PaddedContainer>
	)
}

const Container = styled.div`
	min-height: 50vh;
`

export default HomeHow
