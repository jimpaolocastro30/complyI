import React from 'react'
import styled from 'styled-components'
import PaddedContainer from '../PaddedContainer'
import BIR from '../../assets/government/bir.png'
import DTI from '../../assets/government/dti.png'
import SEC from '../../assets/government/sec.png'
import Gov from '../../assets/government/gov.png'
import GovernmentList from './GovernmentList'

type GovernmentProps = {
	styles?: { container?: React.CSSProperties }
}

const Government = (props: GovernmentProps) => {
	const items = React.useMemo<Array<GovernmentItemProps>>(
		() => [
			{
				logo: BIR,
				text: 'Bureau of Internal Revenue'
			},
			{
				logo: DTI,
				text: 'Department of Trade & Industry'
			},
			{
				logo: SEC,
				text: 'Security and Exchange Commission'
			},
			{
				logo: Gov,
				text: 'City & Local Government'
			}
		],
		[]
	)

	return (
		<PaddedContainer>
			<Container style={props.styles?.container}>
				<GovernmentList items={items} />
			</Container>
		</PaddedContainer>
	)
}

const Container = styled.div`
	background-color: #fff;
	padding: clamp(1.5rem, 3vw, 2rem);
`

export default Government
