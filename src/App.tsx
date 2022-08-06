import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import HeadNavigation from './components/head_navigation/HeadNavigation'
import EarlyRegistrationPage from './pages/early_registration/EarlyRegistrationPage'
import HomePage from './pages/home/HomePage'

type AppProps = {
	styles?: { container?: React.CSSProperties }
}

const App = (props: AppProps) => {
	return (
		<Container style={props.styles?.container}>
			<HeadNavigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/join' element={<EarlyRegistrationPage />} />
			</Routes>
		</Container>
	)
}

const Container = styled.div`
	min-height: 100vh;
	max-width: 1920px;
	margin: 0 auto;
`

export default App
