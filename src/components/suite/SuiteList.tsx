import React from 'react'
import styled from 'styled-components'
import SuiteItem from './SuiteItem'

type SuiteListProps = {
	styles?: { container?: React.CSSProperties }
	items: Array<RegulatoryManagementSuiteItemProps>
}

const SuiteList = (props: SuiteListProps) => {
	return (
		<Container style={props.styles?.container}>
			{props.items.map((item) => (
				<SuiteItem {...item} key={item.title} />
			))}
		</Container>
	)
}

const Container = styled.ul`
	display: grid;
	gap: clamp(1rem, 3vw, 1.5rem);
	grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`

export default SuiteList
