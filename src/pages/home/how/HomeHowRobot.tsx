import React from 'react'
import styled from 'styled-components'
import Robot from '../../../assets/robot/how-bot.png'
// import data from '../../../assets/animations/97002-cubes-animation-sections.json'
// import useLottie from '../../../hooks/useLottie'

type HomeHowRobotProps = {
	styles?: { container?: React.CSSProperties }
}

const HomeHowRobot = (props: HomeHowRobotProps) => {
	// const Lottie = useLottie({ data, autoplay: true, loop: true })

	return (
		<Container style={props.styles?.container}>
			<Image src={Robot} alt='how-bot' />
			<Title>
				<span>How </span>
				<span>iComply </span>
				<span>Works </span>
			</Title>
		</Container>
	)
}

const Container = styled.div`
	text-align: center;
	position: relative;
	margin: 0 auto;
	margin-bottom: 3rem;
	max-width: 480px;
	width: 100%;

	@media (min-width: 1100px) {
		float: left;
		margin-right: 50px;
	}
`

const Image = styled.img`
	width: 100%;
	max-width: 360px;
	height: auto;
	z-index: 2;
	position: relative;
`

const Title = styled.h2`
	font-size: clamp(1.2rem, 3vw, 1.5rem);

	span {
		&:nth-of-type(2) {
			color: #d58166;
		}
	}
`

export default HomeHowRobot
