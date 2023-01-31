import { ColorFormats, TinyColor } from '@ctrl/tinycolor'
import React, { useContext } from 'react'
import { CurrentColorContext } from '../pages/_app'
import CopyButton from './CopyButton'

function ColorFormat({ format }: { format: ColorFormats }) {
	const { currentColor } = useContext(CurrentColorContext)
	const color = new TinyColor(currentColor)

	return (
		<div className='format'>
			<div className='format-title'>
				<h2>{format.toUpperCase()}</h2>
				<CopyButton color={color.toString(format)} />
			</div>
			<p>{color.toString(format)}</p>
		</div>
	)
}

export default ColorFormat
