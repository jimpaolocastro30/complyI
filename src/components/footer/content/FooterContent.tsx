import React from 'react'
import styled from 'styled-components'
import FooterContentBrand from './FooterContentBrand'
import FooterContentFollowUs from './FooterContentFollowUs'
import FooterContentReachUs from './FooterContentReachUs'
import FooterContentSubscribe from './FooterContentSubscribe'

type FooterContentProps = {
	styles?: { container?: React.CSSProperties }
}

const FooterContent = (props: FooterContentProps) => {
	return (
		<Container style={props.styles?.container}>
			<FooterContentBrand />
			<FooterContentReachUs />
			<FooterContentFollowUs />
			<FooterContentSubscribe />
		</Container>
	)
}

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(230px, auto));
	gap: clamp(3rem, 4vw, 4rem);
	margin-bottom: 2.5rem;
`

export default FooterContent
