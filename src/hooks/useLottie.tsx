import Lottie, { AnimationItem } from 'lottie-web'
import React from 'react'
import styled from 'styled-components'

type Props = {
	data: any
	autoplay?: boolean
	loop?: boolean
	style?: React.CSSProperties
}

const useLottie = ({ data, autoplay, loop, style }: Props): React.ReactNode => {
	const ref = React.useRef<HTMLDivElement | null>(null)

	React.useEffect(() => {
		let lottie: AnimationItem | null = null
		if (ref.current) {
			lottie = Lottie.loadAnimation({
				animationData: data,
				container: ref.current,
				renderer: 'svg',
				autoplay,
				loop
			})
		}

		return () => {
			if (lottie) lottie.destroy()
		}
	}, [data, autoplay, loop])

	return <div ref={ref} style={style} />
}

const LottieView = styled.div``

export default useLottie
