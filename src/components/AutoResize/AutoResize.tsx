import React from 'react'
import './AutoResize.scss'

interface AutoResizeProps {
	sm?: number
	md?: number
	lg?: number
	xl?: number
	className?: string
	children: any
	[x: string]: any
}

function AutoResize({ xs, sm, md, lg, xl, className, children, ...rest }: AutoResizeProps) {
	const getPercentStr = (size: number, base: number) => {
		return `${(size / base) * 100}%`
	}

	return (
		<div
			style={
				{
					'--auto-resize-xs': getPercentStr(xs, 12),
					'--auto-resize-sm': getPercentStr(sm ?? xs, 12),
					'--auto-resize-md': getPercentStr(md ?? sm ?? xs, 12),
					'--auto-resize-lg': getPercentStr(lg ?? md ?? md ?? xs, 12),
					'--auto-resize-xl': getPercentStr(xl ?? lg ?? md ?? md ?? xs, 12),
				} as React.CSSProperties
			}
			className={`auto-resize ${className}`}
			{...rest}
		>
			{children}
		</div>
	)
}

export default AutoResize
