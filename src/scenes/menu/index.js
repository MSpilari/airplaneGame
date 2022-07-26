const menu = () => {
	add([sprite('bgGreenHills', { width: width(), height: height() }, z(-1))])

	add([
		text("SHOOT N' FLY"),
		color(RED),
		pos(width() / 2, height() / 2),
		origin('center')
	])

	add([
		pos(width() / 2 - 200, height() - 100),
		rect(200, 40),
		outline(4, RED),
		color(YELLOW),
		text('Fly')
	])
}

export { menu }
