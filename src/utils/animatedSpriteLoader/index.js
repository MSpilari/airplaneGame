import explosion from '../../assets/explosionEffect/spritesheet/spritesheet.png'

const animatedSpriteLoader = () => {
	// Explosion Effect
	loadSprite('explosion', explosion, {
		sliceX: 3,
		sliceY: 3,
		anims: {
			explode: {
				from: 0,
				to: 8
			}
		}
	})

	// Flying Coins

	// loadSprite('bronzeCoin')
}

export { animatedSpriteLoader }
