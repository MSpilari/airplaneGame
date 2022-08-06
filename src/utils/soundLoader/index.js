import playerShootSound from '../../assets/sounds/playerShootSound.ogg'
import enemyDamageSound from '../../assets/sounds/enemyDamageSound.ogg'
import explosionSound from '../../assets/sounds/explosionSound.ogg'
import planeEnemySound from '../../assets/sounds/planeEnemySound.ogg'
import planePlayerSound from '../../assets/sounds/planePlayerSound.ogg'
import playerDamageSound from '../../assets/sounds/playerDamageSound.ogg'
import playerHealedSound from '../../assets/sounds/playerHealedSound.ogg'

const soundLoader = () => {
	// Player Sounds
	loadSound('playerShootSound', playerShootSound)
	loadSound('planePlayerSound', planePlayerSound)
	loadSound('playerDamageSound', playerDamageSound)
	loadSound('playerHealedSound', playerHealedSound)

	// Enemy Sounds
	loadSound('enemyDamageSound', enemyDamageSound)
	loadSound('planeEnemySound', planeEnemySound)

	// Default Sounds
	loadSound('explosionSound', explosionSound)
}

export { soundLoader }
