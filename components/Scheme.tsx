import React, { useContext, useState } from 'react'
import { CurrentColorContext } from '../pages/_app'

function Scheme({ scheme, colors, shadowStyle }) {
	const { currentColor, setCurrentColor } = useContext(CurrentColorContext)
	const [showColor, setShowColor] = useState(false)

	return (
		<div className='action'>
			<h2>{scheme}</h2>
			<div className='strip' style={shadowStyle}>
				{typeof colors === 'string' && (
					<div
						className='strip-unit'
						style={{ backgroundColor: colors }}
						onClick={() => {
							setCurrentColor(colors)
						}}
						onMouseOver={() => setShowColor(true)}
						onMouseLeave={() => setShowColor(false)}
					>
						{showColor && colors}
					</div>
				)}
				{typeof colors === 'object' &&
					colors.map((color, i) => (
						<div
							key={i}
							className='strip-unit'
							style={{ backgroundColor: color }}
							onClick={() => {
								setCurrentColor(color)
							}}
							onMouseOver={() => setShowColor(true)}
							onMouseLeave={() => setShowColor(false)}
						>
							{showColor && color}
						</div>
					))}
			</div>
		</div>
	)
}

export default Scheme
