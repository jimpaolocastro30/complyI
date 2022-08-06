import React from 'react'
import styled from 'styled-components'
import FooterSectionTitle from '../FooterSectionTitle'

import Facebook from '../../../assets/sm/fb.svg'
import Telegram from '../../../assets/sm/telegram.svg'
import LinkedIn from '../../../assets/sm/linkedin.svg'
import Discord from '../../../assets/sm/discord.svg'
import Instagram from '../../../assets/sm/instagram.svg'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

type FooterContentFollowUsProps = {
	styles?: { container?: React.CSSProperties }
}

const FooterContentFollowUs = (props: FooterContentFollowUsProps) => {
	const items = React.useMemo<Array<FooterContentFollowUsItemProps>>(
		() => [
			{
				icon: Facebook,
				link: '/',
				name: 'facebook'
			},
			{
				icon: Telegram,
				link: '/',
				name: 'telegram'
			},
			{
				icon: LinkedIn,
				link: '/',
				name: 'linkedIn'
			},
			{
				icon: Discord,
				link: '/',
				name: 'discord'
			},
			{
				icon: Instagram,
				link: '/',
				name: 'instagram'
			}
		],
		[]
	)

	return (
		<Container style={props.styles?.container}>
			<FooterSectionTitle title='Follow Us' />
			<List>
				{items.map(({ icon, link, name }, i) => (
					<Item key={name}>
						<Link to={link} title={name}>
							<ReactSVG
								src={icon}
								beforeInjection={(svg) => {
									svg.setAttribute('style', `width: 18px; transform: translateY(${i === 4 ? 2 : 0}px);`)
								}}
							/>
						</Link>
					</Item>
				))}
			</List>
		</Container>
	)
}

const Container = styled.section``

const List = styled.ul`
	display: flex;
	gap: 1ch;
`

const Item = styled.li``

export default FooterContentFollowUs
