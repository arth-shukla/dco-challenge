import React from 'react'
import './App.scss'
import { Content, Sidebar, Toolbar, ContactLinks } from './components'
import { Row, Col } from 'react-bootstrap'

function App() {
	return (
		<>
			<header>
				<h1>Lorem ipsum</h1>
			</header>
			<Row className='main-content'>
				<Col
					xs={12}
					md={3}
					lg={3}
				>
					<Sidebar numBoxes={4} />
				</Col>
				<Col
					xs={12}
					md={9}
					lg={6}
				>
					<Content />
				</Col>
				<Col
					xs={12}
					md={12}
					lg={3}
				>
					<Toolbar />
					text
				</Col>
			</Row>
			<footer>
				<p>Design Co Challenge &copy; 2023</p>
				<ContactLinks />
			</footer>
		</>
	)
}

export default App
