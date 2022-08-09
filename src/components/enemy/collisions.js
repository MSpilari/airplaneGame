const enemyCollisions = () => {
	onCollide('enemy', 'bullet', enemy => {
		enemy.hurt(25)
		play('enemyDamageSound', { volume: 0.5 })
	})
}

export { enemyCollisions }
