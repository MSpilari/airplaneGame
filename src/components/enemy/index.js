import { explosion } from '../explosion'
import { enemyCollisions } from './collisions'
import { enemyMovements } from './movements'
import { enemyShoots } from './shoots'

const enemy = (spriteID, widthSprite, heightSprite) => {
	let enemyChar = add([
		sprite(spriteID, { width: widthSprite, height: heightSprite, flipX: true }),
		pos(width() - widthSprite, height() / 2),
		area(),
		'enemy',
		health(200)
	])

	let planeEnemySound = play('planeEnemySound', { volume: 0.4, loop: true })

	enemyMovements(enemyChar, heightSprite)

	enemyCollisions()

	enemyShoots(enemyChar)

	enemyChar.on('death', () => {
		destroy(enemyChar)
		planeEnemySound.stop()
		explosion(widthSprite, heightSprite, 2, enemyChar.pos.x, enemyChar.pos.y)
	})
}

export { enemy }
