import React from 'react'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'

type HomeHowListProps = {
	styles?: { container?: React.CSSProperties }
	items: Array<ItemProps>
}

export type ItemProps = {
	icon: string
	title: string
	color: string
	caption: string
}

const HomeHowList = (props: HomeHowListProps) => {
	return (
		<Container style={props.styles?.container}>
			{props.items.map(({ caption, color, icon, title }, i) => (
				<Item key={title}>
					<IconContainer style={{ backgroundColor: color }}>
						{icon ? (
							<ReactSVG
								src={icon}
								style={{
									transform: 'translateY(4px)'
								}}
								beforeInjection={(svg) => {
									svg.setAttribute('style', 'width: 36px')
									if (i === 1) svg.setAttribute('style', 'transform: translateX(5px)')
								}}
							/>
						) : null}
					</IconContainer>
					<Title bg={color}>{title}</Title>
					<Caption>{caption}</Caption>
				</Item>
			))}
		</Container>
	)
}

const Container = styled.ul`
	gap: clamp(2rem, 5vw, 5rem) 5rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`

const Item = styled.li``

const IconContainer = styled.div`
	width: 86px;
	height: 86px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 48px;
	box-shadow: 3px 5px 18px rgba(0, 0, 0, 0.3);
`

const Title = styled.h3<{ bg: string }>`
	margin-top: 1rem;
	position: relative;
	margin-bottom: clamp(1rem, 3vw, 2.5rem);
	font-size: clamp(1rem, 2vw, 1.1rem);

	&::before {
		content: '';
		position: absolute;
		bottom: -1ch;
		left: 0;
		width: 50px;
		background-color: ${(props) => props.bg};
		padding-bottom: 5px;
		border-radius: 5px;
	}
`

const Caption = styled.p`
	font-size: clamp(0.75rem, 3vw, 0.9rem);
`

export default HomeHowList
