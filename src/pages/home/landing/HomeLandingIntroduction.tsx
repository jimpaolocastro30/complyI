import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type HomeLandingSectionProps = {
	styles?: { container?: React.CSSProperties }
}

const HomeLandingIntroduction = (props: HomeLandingSectionProps) => {
	return (
		<Container style={props.styles?.container}>
			<SpanObject />
			<Title>
				Do your Government Registrations & Renewals, Accounting & Tax, Plus many more - all in a Single Dashboard
			</Title>
			<Caption>
				Simplify the way you register and maintain your business. Wether you are a Corporation, Sole Proprietor,
				Consultant/Freelancer, or even a Licensed Professional, we will run all your necessary government paperwork and
				file everything for you while you manage everything in the iComply Dashboard.
			</Caption>
			<Start to='/join'>Start Now</Start>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 767px) {
		align-items: center;
		text-align: center;
	}
`

const SpanObject = styled.div`
	position: relative;
	width: 64px;
	height: 24px;
	background-color: #444768;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		width: 30%;
		background-color: #d58166;
		z-index: 2;
	}
`

const Title = styled.h1`
	font-weight: 600;
	margin: 2rem 0;
	color: #444768;
	font-size: clamp(1.5rem, 3vw, 2rem);
`

const Caption = styled.p`
	line-height: 2;
	color: #444768;
	opacity: 0.8;
	margin-bottom: 2rem;
	font-size: clamp(0.8rem, 2vw, 1rem);
`

const Start = styled(Link)`
	background-color: #444768;
	padding: 0.7rem 3rem;
	border-radius: 3px;
	font-size: clamp(0.8rem, 2vw, 0.9rem);
	color: #fff;

	@media (min-width: 768px) {
		align-self: flex-start;
	}
`

export default HomeLandingIntroduction
