import React from 'react'
import styled from 'styled-components'
import { IoMail, IoCall, IoMap } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import FooterSectionTitle from '../FooterSectionTitle'

type FooterContentReachUsProps = {
	styles?: { container?: React.CSSProperties }
}

const FooterContentReachUs = (props: FooterContentReachUsProps) => {
	const items = React.useMemo<Array<FooterContentReachUsItemProps>>(
		() => [
			{
				icon: <IoMail />,
				text: 'contact@icomply.ph'
			},
			{
				icon: <IoCall />,
				text: '+63 906 373 4845'
			},
			{
				icon: <IoMap />,
				text: '3515 Hilario St. Brgy. Palanan, Makati City, Metro Manila, Philippines'
			}
		],
		[]
	)

	return (
		<Container style={props.styles?.container}>
			<FooterSectionTitle title='Reach Us' />
			<IconContext.Provider
				value={{
					size: '18px',
					color: '#444768'
				}}
			>
				<List>
					{items.map(({ icon, text }, i) => (
						<Item key={i}>
							{icon}
							<Text>{text}</Text>
						</Item>
					))}
				</List>
			</IconContext.Provider>
		</Container>
	)
}

const Container = styled.section``

const List = styled.ul``

const Item = styled.li`
	display: flex;
	gap: 1ch;

	&:not(:last-of-type) {
		margin-bottom: 1.3ch;
	}
`

const Text = styled.div`
	font-size: 0.7rem;
	flex: 1;
`

export default FooterContentReachUs
