const player = (spriteID, widthSprite, heightSprite) => {
	let playerChar = add([
		sprite(spriteID, { width: widthSprite, height: heightSprite }),
		pos(0, height() / 2),
		area()
	])

	keyDown('up', () => {
		playerChar.pos.y >= 0 && playerChar.move(0, -500)
	})

	keyDown('down', () => {
		playerChar.pos.y <= height() && playerChar.move(0, 500)
	})
}

export { player }
