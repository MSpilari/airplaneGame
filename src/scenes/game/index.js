import { Background } from '../../components/background'
import { player } from '../../components/player'

const game = () => {
	Background('bgGreenHills', true)

	player('plane1Blue', 150, 80)
}

export { game }
