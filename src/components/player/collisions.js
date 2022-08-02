const playerCollisions = () => {
	onCollide('player', 'bullet', player => player.hurt(25))
}

export { playerCollisions }
