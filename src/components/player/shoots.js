import { bullet } from '../bullet'

const playerShoots = playerChar => {
	onKeyPress('space', () => {
		if (playerChar.exists()) {
			bullet('fireball', 80, 40, 'Player', playerChar.pos.x, playerChar.pos.y)
			play('playerShootSound', { volume: 0.2 })
		}
	})
}

export { playerShoots }
