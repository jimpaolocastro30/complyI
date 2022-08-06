import React from 'react'
import styled from 'styled-components'
import PaddedContainer from '../PaddedContainer'
import HeadNavigationBrand from './HeadNavigationBrand'
import HeadNavigationMenu from './HeadNavigationMenu'

type HeadNavigationProps = {
	styles?: { container?: React.CSSProperties }
}

const HeadNavigation = (props: HeadNavigationProps) => {
	return (
		<PaddedContainer>
			<Container style={props.styles?.container}>
				<HeadNavigationBrand />
				<HeadNavigationMenu />
			</Container>
		</PaddedContainer>
	)
}

const Container = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem 3rem;
	flex-wrap: wrap;
`

export default HeadNavigation
