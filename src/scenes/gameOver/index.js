import { Background } from '../../components/background'
import { button } from '../../components/button'

const gameOver = () => {
	Background('bgGreenHills', false)

	add([text('Game Over !!'), pos(center()), origin('center')])

	button('Restart')

	onClick('bgButton', () => go('game'))

	// add([
	// 	sprite('planeExplosion', {
	// 		width: 150,
	// 		height: 80,
	// 		animSpeed: 1,
	// 		anim: 'explode'
	// 	})
	// ])
}

export { gameOver }
