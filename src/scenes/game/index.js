import { Background } from '../../components/background'
import { healthIndicator } from '../../components/healthIndicator'
import { player } from '../../components/player'

const game = () => {
	Background('bgGreenHills', true)

	player('plane1Blue', 150, 80)
	healthIndicator()
}

export { game }
