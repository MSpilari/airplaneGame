const bullet = (spriteID, widthSprite, heightSprite, shooter, posX, posY) => {
	add([
		sprite(spriteID, {
			width: widthSprite,
			height: heightSprite,
			flipX: shooter === 'Enemy'
		}),
		area(),
		pos(posX + 150, posY),
		shooter === 'Enemy' ? move((100, 0), -400) : move((100, 0), 400),
		'bullet',
		cleanup()
	])

	onCollide('bullet', 'player', bullet => bullet.destroy())

	onCollide('bullet', 'enemy', bullet => bullet.destroy())
}

export { bullet }
