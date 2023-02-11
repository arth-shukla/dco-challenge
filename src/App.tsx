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
	useEffect(() => {
		window.addEventListener('resize', setWinHeight.bind(undefined, window.innerHeight), { passive: true })
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
				<Content>
					{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
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
