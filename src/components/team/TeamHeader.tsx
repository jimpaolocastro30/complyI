import React from 'react'
import styled from 'styled-components'

type TeamHeaderProps = {
	styles?: { container?: React.CSSProperties }
}

const TeamHeader = (props: TeamHeaderProps) => {
	return (
		<Container style={props.styles?.container}>
			<Title>
				<span>The Team Behind </span>
				<span>iComply</span>
			</Title>
		</Container>
	)
}

const Container = styled.div`
	margin-bottom: 2rem;
`

const Title = styled.h2`
	font-size: clamp(1.2rem, 3vw, 1.5rem);

	span {
		&:nth-of-type(2) {
			color: #d58166;
		}
	}
`

export default TeamHeader
