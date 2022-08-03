const playerMovements = (playerChar, widthSprite, heightSprite) => {
	onKeyDown('up', () => {
		playerChar.pos.y >= 0 && playerChar.move(0, -500)
	})

	onKeyDown('down', () => {
		playerChar.pos.y <= height() - heightSprite && playerChar.move(0, 500)
	})

	onKeyDown('left', () => {
		playerChar.pos.x >= 0 && playerChar.move(-500, 0)
	})

	onKeyDown('right', () => {
		playerChar.pos.x < width() - widthSprite && playerChar.move(500, 0)
	})
}

export { playerMovements }
