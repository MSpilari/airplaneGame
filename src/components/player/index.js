import { explosion } from '../explosion'
import { playerCollisions } from './collisions'
import { playerMovements } from './movements'
import { playerShoots } from './shoots'

const player = (spriteID, widthSprite, heightSprite) => {
	let playerChar = add([
		sprite(spriteID, { width: widthSprite, height: heightSprite }),
		pos(30, height() / 2),
		area(),
		'player',
		health(100)
	])

	playerMovements(playerChar, widthSprite, heightSprite)

	playerShoots(playerChar)

	playerCollisions()

	playerChar.on('death', () => {
		destroy(playerChar)
		explosion(widthSprite, heightSprite, 2, playerChar.pos.x, playerChar.pos.y)
		go('gameOver')
	})
}

export { player }
