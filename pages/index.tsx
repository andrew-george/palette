import { TinyColor } from '@ctrl/tinycolor'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Playfair_Display } from '@next/font/google'
import Head from 'next/head'
import React, { useContext, useState } from 'react'
import { HexColorInput, HexColorPicker } from 'react-colorful'
import { BiColorFill } from 'react-icons/bi'
import { FaPalette, FaRandom } from 'react-icons/fa'
import { HiOutlineColorSwatch } from 'react-icons/hi'
import Tooltip from '../components/ui/Tooltip'
import { CurrentColorContext, ModeContext } from './_app'

const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: '600',
})

function Home() {
	const { currentMode, setCurrentMode } = useContext(ModeContext)
	const { currentColor, setCurrentColor } = useContext(CurrentColorContext)

	const color = new TinyColor(currentColor)
	const colorIsDark = color.getLuminance() < 0.2

	const textColor = colorIsDark ? '#eee' : '#000'

	return (
		<>
			<Head>
				<title>Palette.</title>
				<link rel='icon' href='./favicon.svg' style={{ color: '#fff' }} />
			</Head>
			<div
				style={{
					height: '100vh',
					backgroundColor: currentColor,
					color: textColor,
				}}
			>
				<header className={`header container`}>
					<h1 className={playfair.className}>
						<span>
							<FaPalette />
						</span>
						Palette.
					</h1>
					<Stack direction='row' spacing={1}>
						<Button variant='text' color='inherit' onClick={() => setCurrentMode('color')}>
							Colors
						</Button>
						<Button variant='text' color='inherit' onClick={() => setCurrentMode('scheme')}>
							Schemes
						</Button>
					</Stack>
				</header>
				<main>
					<HexColorPicker color={currentColor} onChange={setCurrentColor} />
					<HexColorInput
						color={currentColor}
						onChange={setCurrentColor}
						prefixed
						className='color-input'
						style={{ color: currentColor, backgroundColor: textColor }}
					/>
					<Stack spacing={4} direction='row'>
						<Tooltip title='Shades'>
							<HiOutlineColorSwatch style={{ color: textColor }} />
						</Tooltip>
						<Tooltip title='Hues'>
							<BiColorFill style={{ color: textColor }} />
						</Tooltip>
						<Tooltip title='Random'>
							<FaRandom style={{ color: textColor }} />
						</Tooltip>
					</Stack>
				</main>
			</div>
		</>
	)
}

export default Home
