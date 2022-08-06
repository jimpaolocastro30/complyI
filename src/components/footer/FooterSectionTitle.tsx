import React from 'react'
import styled from 'styled-components'

type FooterSectionTitleProps = {
	styles?: { container?: React.CSSProperties }
	title: string
}

const FooterSectionTitle = (props: FooterSectionTitleProps) => {
	return (
		<Container style={props.styles?.container}>
			<Title>{props.title}</Title>
		</Container>
	)
}

const Container = styled.div`
	margin-bottom: 1rem;
`

const Title = styled.h3``

export default FooterSectionTitle
