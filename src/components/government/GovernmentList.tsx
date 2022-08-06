import React from 'react'
import styled from 'styled-components'

type GovernmentListProps = {
	styles?: { container?: React.CSSProperties }
	items: Array<GovernmentItemProps>
}

const GovernmentList = (props: GovernmentListProps) => {
	return (
		<Container style={props.styles?.container}>
			{props.items.map(({ logo, text }) => (
				<Item key={text}>
					<Image src={logo} alt={text} />
					<Caption>{text}</Caption>
				</Item>
			))}
		</Container>
	)
}

const Container = styled.ul`
	display: flex;
	gap: 4rem 2rem;
	justify-content: space-evenly;
	flex-wrap: wrap;
`

const Item = styled.li`
	text-align: center;
`

const Image = styled.img`
	margin-bottom: 0.7rem;
	opacity: 0.8;
`

const Caption = styled.p`
	color: #bbb;
	font-size: clamp(0.6rem, 3vw, 0.8rem);
`

export default GovernmentList
