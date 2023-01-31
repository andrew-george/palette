import ColorFormat from './ColorFormat'

function ColorFormats() {
	return (
		<div className='color-formats container'>
			<ColorFormat format='hsv' />
			<ColorFormat format='hsl' />
			<ColorFormat format='rgb' />
		</div>
	)
}

export default ColorFormats
