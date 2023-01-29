import IconButton from '@mui/material/IconButton'
import MuiTooltip from '@mui/material/Tooltip'
import React from 'react'

function Tooltip({ children, title }: { children: React.ReactNode; title: string }) {
	return (
		<MuiTooltip title={title} arrow>
			<IconButton>{children}</IconButton>
		</MuiTooltip>
	)
}

export default Tooltip
