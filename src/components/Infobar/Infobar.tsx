import React from 'react'
import AutoResize from '../AutoResize'
import './Infobar.scss'

function Infobar() {
	return (
		<AutoResize
			className='infobar'
			xs={12}
			sm={12}
			md={3}
		>
			<div className='infobar-child' />
		</AutoResize>
	)
}

export default Infobar
