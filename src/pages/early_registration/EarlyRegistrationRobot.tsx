import React from 'react'
import styled from 'styled-components'
import Robot from '../../assets/robot/join-bot.png'

type EarlyRegistrationRobotProps = {
	styles?: { container?: React.CSSProperties }
}

const EarlyRegistrationRobot = (props: EarlyRegistrationRobotProps) => {
	return (
		<Container style={props.styles?.container}>
			<Image src={Robot} alt='robot' />
		</Container>
	)
}

const Container = styled.div`
	position: fixed;
	bottom: 0;
	right: clamp(1rem, 8vw, 10rem);

	@media (max-width: 760px) {
		display: none;
	}
`

const Image = styled.img`
	max-width: 640px;
	transform: translateY(13px);
`

export default EarlyRegistrationRobot
