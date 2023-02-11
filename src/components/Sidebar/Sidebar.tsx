import React from 'react'
import AutoResize from '../AutoResize'
import './Sidebar.scss'

interface SidebarProps {
	numBoxes: number
}

function Sidebar({ numBoxes }: SidebarProps) {
	return (
		<AutoResize
			className='sidebar'
			xs={12}
			sm={3}
			md={3}
		>
			{Array(numBoxes)
				.fill(0)
				.map(i => (
					<div
						key={`sidebar_box_${i}`}
						className='sidebar-box'
					/>
				))}
		</AutoResize>
	)
}

export default Sidebar
