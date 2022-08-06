import React from 'react'
import styled from 'styled-components'
import PaddedContainer from '../PaddedContainer'

import Dashboard from '../../assets/animations/95304-dashboard-analytics-and-data-tracker.json'
import TaskManagement from '../../assets/animations/78148-taskmanagement.json'
import Inbox from '../../assets/animations/52469-inbox-mail-notification.json'
import Files from '../../assets/animations/95083-file-search.json'
import SuiteHeader from './SuiteHeader'
import SuiteList from './SuiteList'

type SuiteProps = {
	styles?: { container?: React.CSSProperties }
}

const Suite = (props: SuiteProps) => {
	const items = React.useMemo<Array<RegulatoryManagementSuiteItemProps>>(
		() => [
			{
				caption: "A quick overview of you corporate operations so you don't miss a single thing.",
				data: Dashboard,
				title: 'Dashboard'
			},
			{
				caption: 'Keep your tasks in check with our integrated task management system.',
				data: TaskManagement,
				title: 'Task Management'
			},
			{
				caption:
					'Privately communicate with your co-workers, the iComply partners, and your co-workers, the iComply Partners, and your Consultants in the platform.',
				data: Inbox,
				title: 'Inbox'
			},
			{
				caption: 'Manage and view critical documents and files',
				data: Files,
				title: 'Files'
			}
		],
		[]
	)

	return (
		<PaddedContainer>
			<Container style={props.styles?.container}>
				<SuiteHeader />
				<SuiteList items={items} />
			</Container>
		</PaddedContainer>
	)
}

const Container = styled.div``

export default Suite
