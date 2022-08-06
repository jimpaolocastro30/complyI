import React from 'react'
import styled from 'styled-components'
import PaddedContainer from '../PaddedContainer'
import TeamHeader from './TeamHeader'
import TeamList from './TeamList'
import data from '../../assets/animations/9911-geometric-abstract-loader.json'
import Photo1 from '../../assets/team/1.png'
import Photo2 from '../../assets/team/2.jpg'
import Photo3 from '../../assets/team/3.jpg'
import Photo4 from '../../assets/team/4.jpg'
import useLottie from '../../hooks/useLottie'

type TeamProps = {
	styles?: { container?: React.CSSProperties }
}

const Team = (props: TeamProps) => {
	const items = React.useMemo<Array<TeamItemProps>>(
		() => [
			{
				fullName: 'Guillian Sencio',
				photo: Photo1,
				position: 'Founder & CEO'
			},
			{
				fullName: 'Jim Paolo Castro',
				photo: Photo2,
				position: 'Co-founder & CTO'
			},
			{
				fullName: 'Jim Gerald Castro',
				photo: Photo3,
				position: 'Co-founder & UI/UX Designer'
			},
			{
				fullName: 'Jayson Jarabe',
				photo: Photo4,
				position: 'Co-founder & Developer'
			}
		],
		[]
	)

	const Lottie = useLottie({
		data,
		autoplay: true,
		loop: true,
		style: {
			width: '148px',
			height: '148px',
			position: 'absolute',
			bottom: 0,
			right: 0,
			transform: 'translate(50%, 50%)',
			opacity: 0.2,
			zIndex: 2
		}
	})

	return (
		<PaddedContainer>
			<Container style={props.styles?.container}>
				<TeamHeader />
				<TeamList items={items} />
				{Lottie}
			</Container>
		</PaddedContainer>
	)
}

const Container = styled.div`
	position: relative;
`

export default Team
