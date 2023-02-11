import React from 'react'
import './Content.scss'

function Content(props: any) {
	return (
		<div className='content'>
			<div className='content-child'>{props.children}</div>
		</div>
	)
}

export default Content
