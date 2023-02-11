import React from 'react'
import './App.scss'
import { ContactLinks, Content, Infobar, Sidebar } from './components'

function App() {
	return (
		<div className='App'>
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
