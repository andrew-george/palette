import React, { useContext } from 'react'
import { ActionTogglesContext } from '../pages/_app'
import Action from './Action'

function Actions({ shadowStyle }) {
	const {
		activeActions: { shades, tints, saturation, schemes },
	} = useContext(ActionTogglesContext)
	return (
		<div className='strips-container container'>
			{shades && <Action title='Shades' action='shade' shadowStyle={shadowStyle} />}
			{tints && <Action title='Tints' action='tint' shadowStyle={shadowStyle} />}
			{saturation && <Action title='Saturation' action='saturate' shadowStyle={shadowStyle} />}
		</div>
	)
}

export default Actions
