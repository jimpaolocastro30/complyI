import React from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

type HeadNavigationMenuProps = {
	styles?: { container?: React.CSSProperties }
}

const HeadNavigationMenu = (props: HeadNavigationMenuProps) => {
	return (
		<Container style={props.styles?.container}>
			<FiSearch size={28} color='#1e224c' />
			<Button to='/join'>Dashboard Login</Button>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`

const Button = styled(Link)`
	color: #444768;
	border: 2px solid #444768;
	background-color: transparent;
	padding: 0.6rem 1rem;
	font-weight: 500;
	transition: 0.2s ease-in-out;
	border-radius: 3px;

	&:hover {
		background-color: #444768;
		color: #fff;
	}
`

export default HeadNavigationMenu
