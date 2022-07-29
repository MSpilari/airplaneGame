import { Background } from '../../components/background'
import { enemy } from '../../components/enemy'
import { healthIndicator } from '../../components/healthIndicator'
import { player } from '../../components/player'

const game = () => {
	Background('bgGreenHills', true)

	player('plane1Blue', 150, 80)
	healthIndicator()
	enemy('plane2Yellow', 150, 80)
}

export { game }
