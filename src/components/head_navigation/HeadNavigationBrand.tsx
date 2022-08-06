import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logo.png'

type HeadNavigationBrandProps = {
	styles?: { container?: React.CSSProperties }
}

const HeadNavigationBrand = (props: HeadNavigationBrandProps) => {
	return (
		<Container style={props.styles?.container}>
			<Link to='/'>
				<Image src={Logo} />
			</Link>
		</Container>
	)
}

const Container = styled.div`
	@media (min-width: 540px) {
		flex: 1;
	}
`

const Image = styled.img``

export default HeadNavigationBrand
