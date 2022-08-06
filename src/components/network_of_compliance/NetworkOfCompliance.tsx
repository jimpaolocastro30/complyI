import React from 'react'
import styled from 'styled-components'
import PaddedContainer from '../PaddedContainer'

import Photo1 from '../../assets/tmp/photo/1.jpg'
import Photo2 from '../../assets/tmp/photo/2.jpg'
import Photo3 from '../../assets/tmp/photo/3.jpg'
import Photo4 from '../../assets/tmp/photo/4.jpg'
import NetworkOfComplianceHeaderHeader from './NetworkOfComplianceHeader'
import NetworkOfComplianceList from './NetworkOfComplianceList'

type NetworkOfComplianceProps = {
	styles?: { container?: React.CSSProperties }
}

const NetworkOfCompliance = (props: NetworkOfComplianceProps) => {
	const items = React.useMemo<Array<TeamItemProps>>(
		() => [
			{
				fullName: 'John Doe',
				photo: Photo1,
				position: 'Lawyer'
			},
			{
				fullName: 'Michael Smith',
				photo: Photo2,
				position: 'Lawyer'
			},
			{
				fullName: 'Michelle Dalla',
				photo: Photo3,
				position: 'Consultant'
			},
			{
				fullName: 'Oreo White',
				photo: Photo4,
				position: 'Consultant'
			}
		],
		[]
	)

	return (
		<PaddedContainer>
			<Container style={props.styles?.container}>
				<NetworkOfComplianceHeaderHeader />
				<NetworkOfComplianceList items={items} />
			</Container>
		</PaddedContainer>
	)
}

const Container = styled.div``

export default NetworkOfCompliance
