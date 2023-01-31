import { Playfair_Display } from '@next/font/google'
import React from 'react'
import { FaPalette } from 'react-icons/fa'

const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: '600',
})

function Logo() {
	return (
		<h1 className={`${playfair.className} logo`}>
			<span>
				<FaPalette />
			</span>
			Palette.
		</h1>
	)
}

export default Logo
