import React from 'react'
import styled from 'styled-components'

type HeaderProps = {
	styles?: { container?: React.CSSProperties }
}

const PricingHeader = (props: HeaderProps) => {
	return (
		<Container style={props.styles?.container}>
			<Title>
				<span>Startup-friendly Pricing, </span>
				<span>Seasoned Expertise</span>
			</Title>
			<Subtitle>Upfront Pricing, No surprises</Subtitle>
		</Container>
	)
}

const Container = styled.div`
	text-align: center;
	margin-bottom: clamp(2rem, 3vw, 3rem);
	padding-right: clamp(1rem, 8vw, 10rem);
	display: flex;
	flex-direction: column;
	gap: 1ch;

	@media (min-width: 1024px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`

const Title = styled.h2`
	line-height: 1.7;
	font-size: clamp(1.2rem, 3vw, 1.5rem);
	span {
		&:nth-of-type(1) {
			color: #d58166;
		}
	}
`

const Subtitle = styled.h5``

export default PricingHeader
