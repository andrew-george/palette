import React, { useContext, useState } from 'react'
import { HexColorInput } from 'react-colorful'
import { CurrentColorContext } from '../pages/_app'
import CopyButton from './CopyButton'

function ColorInput({ color, textColor }) {
	const { currentColor, setCurrentColor } = useContext(CurrentColorContext)

	return (
		<div className='color-input-container'>
			<HexColorInput
				color={currentColor}
				onChange={setCurrentColor}
				prefixed
				alpha
				className='color-input-field'
				style={{ color: color.setAlpha(1).toHexString(), backgroundColor: textColor }}
			/>
			<CopyButton color={currentColor} />
		</div>
	)
}

export default ColorInput
