import { bullet } from '../bullet'

const enemyShoots = enemyChar => {
	loop(3, () => {
		enemyChar.exists() &&
			bullet('fireballBlue', 80, 40, 'Enemy', enemyChar.pos.x, enemyChar.pos.y)
	})
}

export { enemyShoots }
