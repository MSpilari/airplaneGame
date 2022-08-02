import { planeExplosion } from '../planeExplosion'

const littleEnemies = (widthSprite, heightSprite) => {
	const allLittleEnemies = ['torpedoBlack', 'torpedoFlame', 'torpedo']

	const indexCurrentEnemy = randi(0, allLittleEnemies.length)

	let currentEnemy = add([
		sprite(allLittleEnemies[indexCurrentEnemy], {
			width: widthSprite,
			height: heightSprite,
			flipX: true
		}),
		pos(width(), randi(0, height() - heightSprite)),
		move((100, 0), -400),
		area(),
		cleanup(),
		'littleEnemy'
	])

	onCollide('littleEnemy', 'player', () => {
		destroy(currentEnemy)
		planeExplosion(
			widthSprite,
			heightSprite,
			2,
			currentEnemy.pos.x,
			currentEnemy.pos.y
		)
	})
}

export { littleEnemies }