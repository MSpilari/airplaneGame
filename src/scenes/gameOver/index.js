import { Background } from '../../components/background'
import { button } from '../../components/button'

const gameOver = () => {
	Background('bgGreenHills', false)

	add([text('Game Over !!'), pos(center())])

	button('Restart')

	onClick('bgButton', () => go('game'))
}

export { gameOver }
