import { bullet } from '../bullet'

const enemyShoots = enemyChar => {
	loop(3, () => {
		if (enemyChar.exists()) {
			bullet('fireballBlue', 80, 40, 'Enemy', enemyChar.pos.x, enemyChar.pos.y)
			play('enemyShootSound', { volume: 0.4 })
		}
	})
}

export { enemyShoots }
