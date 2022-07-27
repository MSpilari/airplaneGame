const bullet = (spriteID, widthSprite, heightSprite, shooter, posX, posY) => {
	add([
		sprite(spriteID, {
			width: widthSprite,
			height: heightSprite,
			flipX: shooter === 'Enemy'
		}),
		area(),
		pos(posX + 150, posY),
		move((100, 0), 400),
		'bullet'
	])

	onCollide('player', 'bullet', (player, bullet) => {
		bullet.destroy()
		shake()
	})
}

export { bullet }
