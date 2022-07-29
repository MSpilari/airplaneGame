import { bullet } from '../bullet'

let enemyChar

const enemy = (spriteID, widthSprite, heightSprite) => {
	let enemyMovement = 'up'

	enemyChar = add([
		sprite(spriteID, { width: widthSprite, height: heightSprite, flipX: true }),
		pos(width() - 200, height() / 2),
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

	loop(3, () => {
		bullet('fireballBlue', 80, 40, 'Enemy', enemyChar.pos.x, enemyChar.pos.y)
	})

	enemyChar.on('death', () => {
		destroy(enemyChar)
	})
}

export { enemy, enemyChar }
