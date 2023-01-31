import IconButton from '@mui/material/IconButton'
import MuiTooltip from '@mui/material/Tooltip'
import React from 'react'

function Tooltip({
	children,
	title,
	onclick,
}: {
	children: React.ReactNode
	title: string
	onclick?
}) {
	return (
		<MuiTooltip title={title} arrow>
			<IconButton onClick={onclick}>{children}</IconButton>
		</MuiTooltip>
	)
}

export default Tooltip
