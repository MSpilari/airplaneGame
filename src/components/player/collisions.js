const playerCollisions = () => {
	onCollide('player', 'bullet', player => player.hurt(25))
	onCollide('player', 'littleEnemy', player => player.hurt(10))
}

export { playerCollisions }
