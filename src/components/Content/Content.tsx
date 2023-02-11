import React from 'react'
import AutoResize from '../AutoResize'
import './Content.scss'

function Content(props: any) {
	return (
		<AutoResize
			className='content'
			xs={12}
			sm={9}
			md={6}
		>
			<div className='content-child'>{props.children}</div>
		</AutoResize>
	)
}

export default Content
