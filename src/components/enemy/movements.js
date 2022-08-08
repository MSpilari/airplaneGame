const enemyMovements = (enemyChar, heightSprite) => {
	let enemyMovement = 'up'

	onUpdate(() => {
		if (enemyMovement === 'up' && enemyChar.pos.y > 0) enemyChar.move(0, -500)

		if (enemyMovement === 'up' && enemyChar.pos.y < 0) enemyMovement = 'down'

		if (enemyMovement === 'down' && enemyChar.pos.y < height())
			enemyChar.move(0, 500)

		if (enemyMovement === 'down' && enemyChar.pos.y > height() - heightSprite)
			enemyMovement = 'up'
	})
}

export { enemyMovements }
