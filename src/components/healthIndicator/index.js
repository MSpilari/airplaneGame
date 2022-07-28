import { playerChar } from '../player'

const healthIndicator = () => {
	let life = playerChar.hp()

	let hpIndicator = add([text('HP:' + life), pos(0, 0)])

	onUpdate(
		'player',
		player => player.hp() !== life && (hpIndicator.text = 'HP:' + player.hp())
	)
}

export { healthIndicator }
