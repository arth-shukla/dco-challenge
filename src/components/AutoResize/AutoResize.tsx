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
	return (
		<div
			style={
				{
					'--auto-resize-xs': xs ? `${(xs / 12) * 100}%` : undefined,
					'--auto-resize-sm': sm ? `${(sm / 12) * 100}%` : undefined,
					'--auto-resize-md': md ? md / 12 : undefined,
					'--auto-resize-lg': lg ? lg / 12 : undefined,
					'--auto-resize-xl': xl ? xl / 12 : undefined,
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
