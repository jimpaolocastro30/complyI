import React from 'react'
import styled from 'styled-components'

type NetworkOfComplianceListProps = {
	styles?: { container?: React.CSSProperties }
	items: Array<TeamItemProps>
}

const NetworkOfComplianceList = (props: NetworkOfComplianceListProps) => {
	return (
		<Container style={props.styles?.container}>
			{props.items.map(({ fullName, photo, position }) => (
				<Item key={fullName}>
					{photo ? <Image src={photo} alt={fullName} /> : <Text>{fullName.substring(0, 1)}</Text>}
					<FullName>{fullName}</FullName>
					<Position>{position}</Position>
				</Item>
			))}
		</Container>
	)
}

const Container = styled.ul`
	gap: 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
`

const Item = styled.li`
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	padding: clamp(1rem, 2vw, 1.5rem);
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: repeat(2, 1fr);
	gap: 0 1rem;
	border-radius: 3px;
	background-color: #fff;
`

const Image = styled.img`
	max-width: 64px;
	border-radius: 32px;
	grid-row: 1/-1;
	grid-column: 1/2;
	width: 100%;
`

const FullName = styled.h4`
	grid-column: 2/3;
	grid-row: 1/2;
	margin-top: auto;
`

const Position = styled.p`
	grid-column: 2/3;
	grid-row: 2/3;
	margin-bottom: auto;
	color: #777;
	font-size: 0.85rem;
`

const Text = styled.h3`
	grid-row: 1/-1;
	grid-column: 1/2;
	font-size: 2rem;
	width: 64px;
	height: 64px;
	border-radius: 32px;
	text-align: center;
	line-height: 64px;
	background-color: #444768;
	color: #fff;
`

export default NetworkOfComplianceList
