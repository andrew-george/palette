export async function getColorName(color) {
	const response = await fetch(`https://www.thecolorapi.com/id?hex=${color.substring(1)}`)
	const {
		name: { value },
	} = await response.json()
	return value
}
