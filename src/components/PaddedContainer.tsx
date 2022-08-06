import React from 'react'
import styled from 'styled-components'

type PaddedContainerProps = {
	styles?: { container?: React.CSSProperties }
	children: React.ReactNode
}

const PaddedContainer = (props: PaddedContainerProps) => {
	return (
		<Container className='pad' style={props.styles?.container}>
			{props.children}
		</Container>
	)
}

const Container = styled.div`
	padding: 2rem clamp(1rem, 8vw, 10rem);
`

export default PaddedContainer
