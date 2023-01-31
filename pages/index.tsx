import { TinyColor } from '@ctrl/tinycolor'
import Head from 'next/head'
import React, { useContext, useEffect, useState } from 'react'
import { HexAlphaColorPicker, HexColorInput } from 'react-colorful'
import {
	Actions,
	ActionToggles,
	ColorFormats,
	ColorInput,
	GenerateRandom,
	Logo,
	Schemes,
} from '../components'
import { getColorName } from '../utils'
import { ActionTogglesContext, CurrentColorContext } from './_app'

function Home() {
	const { currentColor, setCurrentColor } = useContext(CurrentColorContext)
	const { activeActions } = useContext(ActionTogglesContext)

	const [colorName, setColorName] = useState('')
	const [textColor, setTextColor] = useState('#000')

	const color = new TinyColor(currentColor)
	const colorIsDark = color.getLuminance() < 0.1
	const colorIsTransparent = color.getAlpha() < 0.5

	const shadowStyle = {
		boxShadow: `40px 40px 80px 0px ${colorIsDark ? '#ffffff06' : '#00000044'}`,
	}

	useEffect(() => {
		if (colorIsTransparent) setTextColor('#000')
		else if (colorIsDark) setTextColor('#eee')
		else setTextColor('#000')

		const timer = setTimeout(async () => {
			const colorName = await getColorName(currentColor)
			setColorName(colorName)
		}, 50)
		return () => clearTimeout(timer)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentColor])

	return (
		<>
			<Head>
				<title>Palette.</title>
				<link rel='icon' href='./favicon.svg' />
			</Head>
			<main style={{ color: textColor, backgroundColor: currentColor }}>
				<Logo />
				<GenerateRandom textColor={textColor} />
				<HexAlphaColorPicker color={currentColor} onChange={setCurrentColor} />
				<ColorInput color={color} textColor={textColor} />
				<h1 className='color-name'>{colorName}</h1>
				<ColorFormats />
				<ActionToggles textColor={textColor} />
				{(activeActions.shades || activeActions.tints || activeActions.saturation) && (
					<Actions shadowStyle={shadowStyle} />
				)}
				{activeActions.schemes && <Schemes shadowStyle={shadowStyle} />}
			</main>
		</>
	)
}

export default Home
