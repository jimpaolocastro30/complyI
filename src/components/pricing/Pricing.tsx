import React from 'react'
import styled from 'styled-components'
import PaddedContainer from '../PaddedContainer'
import PricingHeader from './PricingHeader'
import PricingList from './PricingList'

import Incorporation from '../../assets/pricing/incorporation.svg'
import LocalBusinessPermit from '../../assets/pricing/local-business.svg'
import BIR from '../../assets/pricing/bir.svg'
import BookKeeping from '../../assets/pricing/book-keeping.svg'
import Consultant from '../../assets/pricing/consultant.svg'
import DTI from '../../assets/pricing/dti.svg'

type PricingProps = {
	styles?: { container?: React.CSSProperties }
}

const Pricing = (props: PricingProps) => {
	const items = React.useMemo<Array<PricingItemProps>>(
		() => [
			{
				captions: ['1-Day to 3-Week Processing'],
				icon: Incorporation,
				price: {
					currency: 'PHP',
					locale: 'en-PH',
					value: 9999
				},
				title: 'Incorporation'
			},
			{
				captions: ['We currently process Metro Manila Municipal Permits'],
				icon: LocalBusinessPermit,
				price: {
					currency: 'PHP',
					locale: 'en-PH',
					value: 9999
				},
				title: 'Local Business Permit'
			},
			{
				captions: ['2 to 3 Weeks Processing'],
				icon: BIR,
				price: {
					currency: 'PHP',
					locale: 'en-PH',
					value: 14995
				},
				title: 'BIR Registration'
			},
			{
				captions: [
					'Upload all you invoices, expenses and transactions in your dashboard and let our accountants do the work! See you Financial Statements with one click.'
				],
				icon: BookKeeping,
				price: {
					currency: 'PHP',
					locale: 'en-PH',
					value: 5950
				},
				title: 'Bookkeeping & Accounting'
			},
			{
				captions: [
					'2 to 3 Weeks Processing',
					'Includes Municipal Registration and BIR Registration with COR, ATP and OR Booklets'
				],
				icon: Consultant,
				price: {
					currency: 'PHP',
					locale: 'en-PH',
					value: 19945
				},
				title: 'Consultant, Freelancer or Licensed Professional'
			},
			{
				captions: ['1-Day Processing'],
				icon: DTI,
				price: {
					currency: 'PHP',
					locale: 'en-PH',
					value: 1999
				},
				title: 'DTI Sole Proprietorship'
			}
		],
		[]
	)

	return (
		<Container style={props.styles?.container}>
			<PaddedContainer>
				<PricingHeader />
				<PricingList items={items} />
			</PaddedContainer>
		</Container>
	)
}

const Container = styled.div`
	@media (min-width: 650px) {
		.pad {
			padding-right: 0;
		}
	}
`

export default Pricing
