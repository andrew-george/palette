import { random } from '@ctrl/tinycolor'
import React, { useContext } from 'react'
import { FaRandom } from 'react-icons/fa'
import { CurrentColorContext } from '../pages/_app'
import Tooltip from './Tooltip'

function GenerateRandom({ textColor }) {
	const { setCurrentColor } = useContext(CurrentColorContext)
	return (
		<Tooltip title='Random' onclick={() => setCurrentColor(random().toHexString())}>
			<FaRandom style={{ color: textColor, fontSize: '2rem' }} />
		</Tooltip>
	)
}

export default GenerateRandom
