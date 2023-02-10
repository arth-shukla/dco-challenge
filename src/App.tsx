import React from 'react'
import './App.scss'
import { Content, Sidebar, Toolbar } from './components'
import ContactLinks from './components/ContactLinks'

function App() {
	return (
		<>
			<header>
				<h1>Lorem ipsum</h1>
			</header>
			<div className='main-content'>
				<Toolbar />
				<Content />
				<Sidebar />
			</div>
			<footer>
				<p>Design Co Challenge &copy; 2023</p>
				<ContactLinks />
			</footer>
		</>
	)
}

export default App
