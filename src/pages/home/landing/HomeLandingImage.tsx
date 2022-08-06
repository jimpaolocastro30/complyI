import React from 'react'
import styled from 'styled-components'
import Robot from '../../../assets/robot/home-bot.png'
import useLottie from '../../../hooks/useLottie'
import data from '../../../assets/animations/97721-confetti-right.json'

type HomeLandingImageProps = {
	styles?: { container?: React.CSSProperties }
}

const HomeLandingImage = (props: HomeLandingImageProps) => {
	const Lottie = useLottie({
		data,
		autoplay: true,
		loop: true,
		style: {
			width: '172px',
			height: '172px',
			position: 'absolute',
			top: '50%',
			left: 0,
			zIndex: 2,
			transform: 'translateY(-50%)'
		}
	})

	return (
		<Container style={props.styles?.container}>
			<Hero>
				<Image src={Robot} />
				{Lottie}
			</Hero>
		</Container>
	)
}

const Container = styled.div`
	position: relative;
	height: 100%;

	@media (max-width: 1279px) {
		display: none;
	}
`

const Image = styled.img`
	max-width: 840px;
	width: 100%;
`

const Hero = styled.div`
	position: absolute;
	top: 0;
	transform: translate(-15%, 25%);

	@media (min-width: 1024px) and (max-width: 1440px) {
		position: initial;
		transform: translate(0, 0);
	}
`

export default HomeLandingImage
