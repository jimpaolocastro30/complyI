import React from 'react'
import styled from 'styled-components'
import PaddedContainer from '../PaddedContainer'
import FooterContent from './content/FooterContent'
import FooterLegal from './FooterLegal'

type FooterProps = {
	styles?: { container?: React.CSSProperties }
}

const Footer = (props: FooterProps) => {
	return (
		<PaddedContainer>
			<Container style={props.styles?.container}>
				<FooterContent />
				<FooterLegal />
			</Container>
		</PaddedContainer>
	)
}

const Container = styled.footer`
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	border-radius: 3px;
	padding: 2rem clamp(1rem, 3vw, 2rem);
	padding-bottom: 1.5rem;
	color: #444768;
	background-color: #fff;
`

export default Footer
