import React from 'react'
import './Sidebar.scss'

interface SidebarProps {
	numBoxes: number
}

function Sidebar({ numBoxes }: SidebarProps) {
	return (
		<>
			{Array(numBoxes)
				.fill(0)
				.map(i => (
					<div
						key={`sidebar_box_${i}`}
						className='sidebar-box'
					/>
				))}
		</>
	)
}

export default Sidebar
