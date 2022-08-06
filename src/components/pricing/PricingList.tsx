import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import useLottie from '../../hooks/useLottie'
import data from '../../assets/animations/9911-geometric-abstract-loader.json'

type PricingListProps = {
	styles?: { container?: React.CSSProperties }
	items: Array<PricingItemProps>
}

const PricingList = (props: PricingListProps) => {
	const Lottie = useLottie({
		data,
		autoplay: true,
		loop: true,
		style: {
			width: '148px',
			height: '148px',
			position: 'absolute',
			top: 0,
			left: 0,
			transform: 'translate(-50%, -50%)',
			opacity: 0.2,
			zIndex: 2
		}
	})

	return (
		<Container style={props.styles?.container}>
			{Lottie}
			<Swiper
				navigation
				modules={[Navigation]}
				spaceBetween={15}
				breakpoints={{
					650: {
						slidesPerView: 2
					},
					800: {
						spaceBetween: 20
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 25
					},
					1280: {
						slidesPerView: 4
					},
					1680: {
						slidesPerView: 5
					}
				}}
				draggable
				style={{ zIndex: 3 }}
			>
				{props.items.map(({ captions, icon, price, title }) => {
					return (
						<SwiperSlide key={title}>
							<Slide>
								<Wrapper>
									<ReactSVG src={icon} />
									<Title>{title}</Title>
									{captions.map((caption, i) => (
										<Caption key={i}>{caption}</Caption>
									))}
								</Wrapper>
								<Price>
									{new Intl.NumberFormat(price.locale, { style: 'currency', currency: price.currency }).format(
										price.value
									)}
								</Price>
								<Start to='/join'>Start Now</Start>
							</Slide>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</Container>
	)
}

const Container = styled.div`
	position: relative;
`

const Slide = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 460px;
	background-color: #fff;
	padding: 2rem;
	align-items: center;
	border-radius: 3px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	margin: 6px;
`

const Wrapper = styled.div`
	flex: 1;
	padding-bottom: 1rem;
`

const Title = styled.h3`
	margin-top: 2rem;
	margin-bottom: 1rem;
	font-size: 1.1rem;
`

const Caption = styled.p`
	font-size: 0.8rem;
`

const Price = styled.h2`
	font-size: clamp(1rem, 3vw, 1.2rem);
	margin-bottom: 1rem;
	color: #d58166;
`

const Start = styled(Link)`
	padding: 0.55rem 3rem;
	background-color: #1e224c;
	color: #fff;
	font-size: 0.8rem;
	border-radius: 3px;
`

export default PricingList
