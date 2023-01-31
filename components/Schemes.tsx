import { TinyColor } from '@ctrl/tinycolor'
import React, { useContext, useState } from 'react'
import { CurrentColorContext } from '../pages/_app'
import Scheme from './Scheme'

function Schemes({ shadowStyle }) {
	const { currentColor, setCurrentColor } = useContext(CurrentColorContext)

	const analogousScheme = new TinyColor(currentColor).analogous(10).map(t => t.toHexString())
	const monochromaticScheme = new TinyColor(currentColor)
		.monochromatic(11)
		.map(t => t.toHexString())
		.splice(1)
		.sort()
	const triadScheme = new TinyColor(currentColor).triad().map(t => t.toHexString())
	const tetradScheme = new TinyColor(currentColor).tetrad().map(t => t.toHexString())
	const complementaryScheme = new TinyColor(currentColor).complement().toHexString()

	return (
		<div className='schemes'>
			<h1>Schemes</h1>
			<div className='strips-container container'>
				<Scheme scheme='Complementary' colors={complementaryScheme} shadowStyle={shadowStyle} />
				<Scheme scheme='Triad' colors={triadScheme} shadowStyle={shadowStyle} />
				<Scheme scheme='Tetrad' colors={tetradScheme} shadowStyle={shadowStyle} />
				<Scheme scheme='Analogous' colors={analogousScheme} shadowStyle={shadowStyle} />
				<Scheme scheme='Monochromatic' colors={monochromaticScheme} shadowStyle={shadowStyle} />
			</div>
		</div>
	)
}

export default Schemes
