import React, { useEffect, useState } from 'react'
import './App.scss'
import { ContactLinks, Content, Infobar, Sidebar } from './components'

function App() {
	// ----------------------------------------------------
	// NOTE: A similar thing can be acheived in CSS via the following:
	//     min-height: calc(100vh - 2 * v.$site-margin);
	// HOWEVER, I opt not to use vh due to poor compatability
	//     with mobile/tablet versions of Safari
	// ----------------------------------------------------
	const [winHeight, setWinHeight] = useState<number>(window.innerHeight)
	const handleResize = () => {
		setWinHeight(window.innerHeight)
	}
	useEffect(() => {
		window.addEventListener('resize', handleResize, { passive: true })
	}, [])

	return (
		<div
			className='App'
			style={{ minHeight: winHeight - 20 }}
		>
			<header>
				<h1>Lorem ipsum</h1>
			</header>
			<div className='main-content'>
				<Sidebar numBoxes={4} />
				<Content style={{ display: 'flex', justifyContent: 'center' }}>
					<img
						src='https://i.imgur.com/JTcaDz2.jpeg'
						alt='He drinkin CHUG CHUG CHUG'
						width='400px'
						style={{ maxWidth: '100%' }}
					/>
				</Content>
				<Infobar />
			</div>
			<footer>
				<p>Design Co Challenge, Arth &copy; 2023</p>
				<ContactLinks />
			</footer>
		</div>
	)
}

export default App
