import { bullet } from '../bullet'
import { planeExplosion } from '../planeExplosion'

const player = (spriteID, widthSprite, heightSprite) => {
	let playerChar = add([
		sprite(spriteID, { width: widthSprite, height: heightSprite }),
		pos(30, height() / 2),
		area(),
		'player',
		health(100)
	])

	onKeyDown('up', () => {
		playerChar.pos.y >= 0 && playerChar.move(0, -500)
	})

	onKeyDown('down', () => {
		playerChar.pos.y <= height() - heightSprite && playerChar.move(0, 500)
	})

	onKeyDown('left', () => {
		playerChar.pos.x >= 0 && playerChar.move(-500, 0)
	})

	onKeyDown('right', () => {
		playerChar.pos.x < width() - widthSprite && playerChar.move(500, 0)
	})

	onKeyPress('space', () => {
		playerChar.exists() &&
			bullet('fireball', 80, 40, 'Player', playerChar.pos.x, playerChar.pos.y)
	})

	onCollide('player', 'bullet', player => player.hurt(25))

	playerChar.on('death', () => {
		destroy(playerChar)
		planeExplosion(
			widthSprite,
			heightSprite,
			2,
			playerChar.pos.x,
			playerChar.pos.y
		)
		go('gameOver')
	})
}

export { player }
