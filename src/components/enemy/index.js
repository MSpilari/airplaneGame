import { bullet } from '../bullet'

const enemy = (spriteID, widthSprite, heightSprite) => {
	let enemyMovement = 'up'

	let enemyChar = add([
		sprite(spriteID, { width: widthSprite, height: heightSprite, flipX: true }),
		pos(width() - widthSprite, height() / 2),
		area(),
		'enemy',
		health(200)
	])

	onUpdate(() => {
		if (enemyMovement === 'up' && enemyChar.pos.y > 0) enemyChar.move(0, -500)

		if (enemyMovement === 'up' && enemyChar.pos.y < 0) enemyMovement = 'down'

		if (enemyMovement === 'down' && enemyChar.pos.y < height())
			enemyChar.move(0, 500)

		if (enemyMovement === 'down' && enemyChar.pos.y > height() - heightSprite)
			enemyMovement = 'up'
	})

	onCollide('enemy', 'bullet', enemy => enemy.hurt(25))

	loop(3, () => {
		bullet('fireballBlue', 80, 40, 'Enemy', enemyChar.pos.x, enemyChar.pos.y)
	})

	enemyChar.on('death', () => destroy(enemyChar))
}

export { enemy }
