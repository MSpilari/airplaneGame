const playerCollisions = () => {
	onCollide('player', 'bullet', player => player.hurt(25))

	onCollide('player', 'littleEnemy', player => player.hurt(10))

	onCollide('player', 'bronzeCoinUD', player => player.heal(5))

	onCollide('player', 'silverCoinUD', player => player.heal(15))

	onCollide('player', 'goldCoinUD', player => player.heal(20))
}

export { playerCollisions }
