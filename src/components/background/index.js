const Background = bgID => {
	let bg1 = add([
		sprite(bgID, { width: width(), height: height(), flipX: true }),
		pos(width(), 0),
		move((20, 0), -100)
	])

	let bg2 = add([
		sprite(bgID, {
			width: width(),
			height: height()
		}),
		pos(0, 0),
		move((20, 0), -100)
	])

	onUpdate(() => {
		if (bg2.pos.x <= -width()) bg2.pos.x = width() - 3
		if (bg1.pos.x <= -width()) bg1.pos.x = width() - 3
	})
}

export { Background }
