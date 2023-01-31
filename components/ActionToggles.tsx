import Stack from '@mui/material/Stack'
import React, { useContext } from 'react'
import { BiColorFill } from 'react-icons/bi'
import { HiOutlineColorSwatch } from 'react-icons/hi'
import { MdInvertColors } from 'react-icons/md'
import { RxColorWheel } from 'react-icons/rx'
import { Tooltip } from '../components'
import { ActionTogglesContext } from '../pages/_app'

function ActionToggles({ textColor }: { textColor: string }) {
	const { activeActions, setActiveActions } = useContext(ActionTogglesContext)

	function toggleModifier(modifier) {
		if (activeActions[modifier] === true) setActiveActions(prev => ({ ...prev, [modifier]: false }))
		else setActiveActions(prev => ({ ...prev, [modifier]: true }))
	}

	function calculateOpacity(modifier) {
		if (activeActions[modifier] === true) return '1'
		else return '0.5'
	}
	return (
		<Stack spacing={4} direction='row' className='action-toggles'>
			<Tooltip title='Shades' onclick={() => toggleModifier('shades')}>
				<HiOutlineColorSwatch
					style={{ color: textColor, fontSize: '2rem', opacity: calculateOpacity('shades') }}
				/>
			</Tooltip>
			<Tooltip title='Tints' onclick={() => toggleModifier('tints')}>
				<MdInvertColors
					style={{ color: textColor, fontSize: '2rem', opacity: calculateOpacity('tints') }}
				/>
			</Tooltip>
			<Tooltip title='Saturation' onclick={() => toggleModifier('saturation')}>
				<BiColorFill
					style={{ color: textColor, fontSize: '2rem', opacity: calculateOpacity('saturation') }}
				/>
			</Tooltip>
			<Tooltip title='Schemes' onclick={() => toggleModifier('schemes')}>
				<RxColorWheel
					style={{ color: textColor, fontSize: '2rem', opacity: calculateOpacity('schemes') }}
				/>
			</Tooltip>
		</Stack>
	)
}

export default ActionToggles
