import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import React, { createContext, useState } from 'react'
import '../styles/globals.css'
import '../styles/homepage.css'

const inter = Inter({
	subsets: ['latin'],
})

export const ModeContext = createContext(null)
export const CurrentColorContext = createContext(null)

export default function App({ Component, pageProps }: AppProps) {
	const [currentMode, setCurrentMode] = useState('color')
	const [currentColor, setCurrentColor] = useState('#010c18')

	return (
		<CurrentColorContext.Provider value={{ currentColor, setCurrentColor }}>
			<ModeContext.Provider value={{ currentMode, setCurrentMode }}>
				<div className={inter.className}>
					<Component {...pageProps} />
				</div>
			</ModeContext.Provider>
		</CurrentColorContext.Provider>
	)
}
