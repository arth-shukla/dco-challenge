import React from 'react'
import AutoResize from '../AutoResize'
import './Content.scss'

function Content({ children, ...rest }: any) {
	return (
		<AutoResize
			className='content'
			xs={12}
			sm={9}
			lg={6}
		>
			<div
				className='content-child'
				{...rest}
			>
				{children}
			</div>
		</AutoResize>
	)
}

export default Content
