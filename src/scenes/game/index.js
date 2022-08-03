import { Background } from '../../components/background'
import { coins } from '../../components/coins'
import { enemy } from '../../components/enemy'
import { healthIndicator } from '../../components/healthIndicator'
import { littleEnemies } from '../../components/littleEnemies'
import { player } from '../../components/player'

const game = () => {
	Background('bgGreenHills', true)

	player('plane1Blue', 150, 80)
	healthIndicator()
	enemy('plane2Yellow', 150, 80)
	loop(3, () => littleEnemies(100, 50))
	loop(30, () => coins(100, 70))
}

export { game }
