import React from 'react'
import { Link, To } from 'react-router-dom'
import styled from 'styled-components'

type FooterLegalProps = {
	styles?: { container?: React.CSSProperties }
}

type ItemProps = {
	link: To
	text: string
}

const FooterLegal = (props: FooterLegalProps) => {
	const items = React.useMemo<Array<ItemProps>>(
		() => [
			{
				link: '/',
				text: 'Privacy Policy & Terms of use'
			},
			{
				link: '/',
				text: 'FAQs'
			}
		],
		[]
	)

	return (
		<Container style={props.styles?.container}>
			<Copyright>&copy; 2022 Swift Compliance Corp.</Copyright>
			<List>
				{items.map(({ link, text }) => (
					<Item key={text}>
						<Link to={link}>{text}</Link>
					</Item>
				))}
			</List>
		</Container>
	)
}

const Container = styled.div`
	font-size: 11px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 1rem;
	opacity: 0.7;
`

const Copyright = styled.p`
	flex-grow: 1;
`

const List = styled.ul`
	display: flex;
	gap: 0.5ch 1.5rem;
	flex-wrap: wrap;
`

const Item = styled.li``

export default FooterLegal
