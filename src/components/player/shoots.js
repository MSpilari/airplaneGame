const playerShoots = playerChar => {
	onKeyPress('space', () => {
		playerChar.exists() &&
			bullet('fireball', 80, 40, 'Player', playerChar.pos.x, playerChar.pos.y)
	})
}

export { playerShoots }
