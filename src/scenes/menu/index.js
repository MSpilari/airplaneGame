const menu = () => {
	const planes = [
		'plane1Blue',
		'plane1Pink',
		'plane1Red',
		'plane1Yellow',
		'plane2Yellow',
		'plane2Blue',
		'plane2Red',
		'plane2Green',
		'plane3Yellow',
		'plane3Blue',
		'plane3Red',
		'plane3Green'
	]

	let bgMenu = add([
		sprite('bgGreenHills', { width: width(), height: height() }, z(-1))
	])

	let GameName = add([
		text("SHOOT\nN'\nFLY"),
		color(RED),
		pos(center()),
		origin('center')
	])

	let buttonRect = add([
		pos(width() / 2, (3 * height()) / 4),
		rect(200, 40),
		color(RED),
		origin('center'),
		'bgButton',
		area()
	])

	let buttonText = add([
		text('Start', { size: 20 }),
		pos(width() / 2, (3 * height()) / 4),
		origin('center')
	])

	loop(3, () => {
		let planeSpeed = randi(0, 2) % 2 === 0 ? -300 : 300
		let posX = planeSpeed < 0 ? width() : -width()
		add([
			sprite(planes[randi(planes.length)], {
				width: 150,
				height: 80,
				flipX: planeSpeed < 0
			}),
			move((20, 0), planeSpeed),
			pos(posX, rand(height()))
		])
	})

	onClick('bgButton', () => go('game'))
}

export { menu }
