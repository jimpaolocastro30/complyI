import React from 'react'
import styled from 'styled-components'
import useLottie from '../../hooks/useLottie'
import data from '../../assets/animations/58295-confetti-in-submission.json'

type EarlyRegistrationHeaderProps = {
	styles?: { container?: React.CSSProperties }
}

const EarlyRegistrationHeader = (props: EarlyRegistrationHeaderProps) => {
	const Lottie = useLottie({
		data,
		autoplay: true,
		loop: true,
		style: {
			position: 'absolute',
			top: '50%',
			left: '10%',
			width: '164px',
			height: '164px',
			transform: 'translate(-50%, -53%)'
		}
	})

	return (
		<Container style={props.styles?.container}>
			<Title>
				Join our waiting list and get a{' '}
				<Emphasized>
					{Lottie}
					<span>500-peso voucher </span>
				</Emphasized>
				redeemable on your first purchase.
			</Title>
		</Container>
	)
}

const Container = styled.div`
	max-width: 860px;
	margin-bottom: 3rem;
`

const Title = styled.h1``

const Emphasized = styled.div`
	display: inline;
	position: relative;
	span {
		color: #24c244;
		position: relative;
		z-index: 3;
	}
`

export default EarlyRegistrationHeader
