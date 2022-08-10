const playerCollisions = () => {
	onCollide('player', 'bullet', player => {
		player.hurt(25)
		play('playerDamageSound')
	})

	onCollide('player', 'littleEnemy', player => {
		player.hurt(10)
		play('playerDamageSound')
	})

	onCollide('player', 'bronzeCoinUD', player => {
		player.heal(5)
		play('playerHealedSound')
	})

	onCollide('player', 'silverCoinUD', player => {
		player.heal(15)
		play('playerHealedSound')
	})

	onCollide('player', 'goldCoinUD', player => {
		player.heal(20)
		play('playerHealedSound')
	})
}

export { playerCollisions }
