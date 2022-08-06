import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../../assets/logo.png'

type FooterContentBrandProps = {
	styles?: { container?: React.CSSProperties }
}

const FooterContentBrand = (props: FooterContentBrandProps) => {
	return (
		<Container style={props.styles?.container}>
			<Link to='/'>
				<Image src={Logo} alt='logo' />
			</Link>
		</Container>
	)
}

const Container = styled.div``

const Image = styled.img``

export default FooterContentBrand
