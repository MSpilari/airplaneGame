import { Background } from '../../components/background'
import { button } from '../../components/button'
import { planes } from '../../utils/planesNames'

const menu = () => {
	Background('bgGreenHills', false)

	let GameName = add([
		sprite('gameName', { width: 240, height: 200 }),
		pos(center()),
		origin('center')
	])

	button('Start')

	loop(3, () => {
		let planeSpeed = randi(0, 2) % 2 === 0 ? -300 : 300
		let posX = planeSpeed < 0 ? width() : -width()
		add([
			sprite(planes[randi(planes.length)], {
				width: 150,
				height: 80,
				flipX: planeSpeed < 0
			}),
			move((20, 0), planeSpeed),
			pos(posX, rand(height() - 80)),
			cleanup(),
			area()
		])
	})

	onClick('bgButton', () => go('game'))
}

export { menu }
