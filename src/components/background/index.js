const Background = (bgID, isMoving) => {
	let bg2 = add([
		sprite(bgID, {
			width: width(),
			height: height()
		}),
		pos(0, 0),
		isMoving && move((20, 0), -100)
	])

	let bg1 =
		isMoving &&
		add([
			sprite(bgID, { width: width(), height: height(), flipX: true }),
			pos(width(), 0),
			move((20, 0), -100)
		])

	isMoving &&
		onUpdate(() => {
			if (bg2.pos.x <= -width()) bg2.pos.x = width() - 3
			if (bg1.pos.x <= -width()) bg1.pos.x = width() - 3
		})
}

export { Background }
