import React from 'react'
import styled from 'styled-components'

type SuiteHeaderProps = {
	styles?: { container?: React.CSSProperties }
}

const SuiteHeader = (props: SuiteHeaderProps) => {
	return (
		<Container style={props.styles?.container}>
			<Title>
				<span>A Powerful </span>
				<span>Regulatory Management </span>
				<span>Suite</span>
			</Title>
		</Container>
	)
}

const Container = styled.div`
	margin-bottom: 2rem;
`

const Title = styled.h2`
	line-height: 1.7;
	font-size: clamp(1.2rem, 3vw, 1.5rem);
	span {
		&:nth-of-type(2) {
			color: #d58166;
		}
	}
`

export default SuiteHeader
