import { JetBrains_Mono } from '@next/font/google'
import type { AppProps } from 'next/app'
import React, { createContext, useState } from 'react'
import '../styles/globals.css'

const jetBrains = JetBrains_Mono({
	subsets: ['latin'],
})

export const CurrentColorContext = createContext(null)
export const ActionTogglesContext = createContext(null)

export default function App({ Component, pageProps }: AppProps) {
	const [currentColor, setCurrentColor] = useState('#010c18')
	const [activeActions, setActiveActions] = useState({
		shades: false,
		tints: false,
		saturation: false,
		schemes: false,
	})

	return (
		<CurrentColorContext.Provider value={{ currentColor, setCurrentColor }}>
			<ActionTogglesContext.Provider value={{ activeActions, setActiveActions }}>
				<div className={`${jetBrains.className}`}>
					<Component {...pageProps} />
				</div>
			</ActionTogglesContext.Provider>
		</CurrentColorContext.Provider>
	)
}
