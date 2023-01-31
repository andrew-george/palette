import { TinyColor } from '@ctrl/tinycolor'
import React, { useContext, useState } from 'react'

import { CurrentColorContext } from '../pages/_app'

function Action({
	title,
	action,
	shadowStyle,
}: {
	title: string
	action: string
	shadowStyle: {}
}) {
	const { currentColor, setCurrentColor } = useContext(CurrentColorContext)
	const [showColor, setShowColor] = useState(false)
	const color = new TinyColor(currentColor)
	const colors = Array.from({ length: 10 }, (_, i) => color[action](i * 10).toString('hex'))

	return (
		<div className='action'>
			<h2>{title}</h2>
			<div className='strip' style={shadowStyle}>
				{colors.map((color, i) => (
					<div
						key={i}
						className='strip-unit'
						style={{ backgroundColor: color }}
						onClick={() => setCurrentColor(color)}
						onMouseOver={() => setShowColor(true)}
						onMouseLeave={() => setShowColor(false)}
					>
						{showColor && <div className='strip-unit-content'>{color}</div>}
					</div>
				))}
			</div>
		</div>
	)
}

export default Action
