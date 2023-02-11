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
			lg={3}
		>
			{Array(numBoxes)
				.fill(0)
				.map((v, k) => (
					<div
						key={`sidebar_box_${k}`}
						className='sidebar-box'
					/>
				))}
		</AutoResize>
	)
}

export default Sidebar
