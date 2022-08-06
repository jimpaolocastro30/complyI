import React from 'react'
import styled from 'styled-components'
import useLottie from '../../hooks/useLottie'

type SuiteItemProps = {
	styles?: { container?: React.CSSProperties }
} & RegulatoryManagementSuiteItemProps

const SuiteItem = ({ caption, data, title, styles }: SuiteItemProps) => {
	const Lottie = useLottie({ data, autoplay: true, loop: true, style: { width: '84px', height: '84px' } })

	return (
		<Container style={styles?.container}>
			{Lottie}
			<Title>{title}</Title>
			<Caption>{caption}</Caption>
		</Container>
	)
}

const Container = styled.li`
	padding: clamp(1rem, 3vw, 2rem);
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	border-radius: 3px;
	background-color: #fff;
`

const Title = styled.h4`
	margin-top: 0.7rem;
	margin-bottom: 1rem;
`

const Caption = styled.p`
	font-size: clamp(0.7rem, 2vw, 0.8rem);
	line-height: 1.7;
`

export default SuiteItem
