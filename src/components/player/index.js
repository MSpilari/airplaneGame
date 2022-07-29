import { bullet } from '../bullet'

let playerChar

const player = (spriteID, widthSprite, heightSprite) => {
	playerChar = add([
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
		playerChar.pos.y <= height() && playerChar.move(0, 500)
	})

	onKeyDown('left', () => {
		playerChar.pos.x >= 0 && playerChar.move(-500, 0)
	})

	onKeyDown('right', () => {
		playerChar.pos.x < width() && playerChar.move(500, 0)
	})

	onKeyPress('space', () => {
		bullet('fireball', 80, 40, 'Player', playerChar.pos.x, playerChar.pos.y)
	})

	playerChar.on('death', () => {
		destroy(playerChar)
		go('gameOver')
	})
}

export { player, playerChar }
