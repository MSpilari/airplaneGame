const button = textButton => {
	let buttonRect = add([
		pos(width() / 2, (3 * height()) / 4),
		rect(200, 40),
		color(RED),
		origin('center'),
		'bgButton',
		area()
	])

	let buttonText = add([
		text(textButton, { size: 20 }),
		pos(width() / 2, (3 * height()) / 4),
		origin('center')
	])
}

export { button }
