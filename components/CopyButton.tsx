import React, { useState } from 'react'
import { HiOutlineClipboard, HiOutlineClipboardCheck } from 'react-icons/hi'

function CopyButton({ color }) {
	const [isCopied, setIsCopied] = useState(false)

	function copyHandler() {
		navigator.clipboard.writeText(color)
		setIsCopied(true)

		setTimeout(() => {
			setIsCopied(false)
		}, 2000)
	}

	return (
		<div>
			{isCopied ? (
				<HiOutlineClipboardCheck className='copy-btn' onClick={copyHandler} />
			) : (
				<HiOutlineClipboard className='copy-btn' onClick={copyHandler} />
			)}
		</div>
	)
}

export default CopyButton
