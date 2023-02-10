import React from 'react'
import './ContactLinks.scss'

function ContactLinks() {
	return (
		<ul className='contact-links'>
			<li>
				<ExtLink href='https://arth.website/'>Website</ExtLink>
			</li>
			<li>
				<ExtLink href='https://github.com/arth-shukla'>GitHub</ExtLink>
			</li>
			<li>
				<ExtLink href='https://www.linkedin.com/in/arth-shukla/'>LinkedIn</ExtLink>
			</li>
			<li>
				<ExtLink href='mailto:arthshukla03@gmail.com'>Mail</ExtLink>
			</li>
			<li>
				<ExtLink href='https://i.kym-cdn.com/photos/images/original/002/508/700/084.jpg'>Other</ExtLink>
			</li>
		</ul>
	)
}

function ExtLink(props: { href: string; children: any }) {
	return (
		<a
			href={props.href}
			target='_blank'
			rel='noreferrer'
		>
			{props.children}
		</a>
	)
}

export default ContactLinks
