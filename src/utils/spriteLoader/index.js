import bgGreenHills from '../../assets/background/sky_background_green_hills.png'
import plane_1_blue from '../../assets/planes/plane_1/plane_1_blue.png'
import plane_1_pink from '../../assets/planes/plane_1/plane_1_pink.png'
import plane_1_red from '../../assets/planes/plane_1/plane_1_red.png'
import plane_1_yellow from '../../assets/planes/plane_1/plane_1_yellow.png'
import plane_2_blue from '../../assets/planes/plane_2/plane_2_blue.png'
import plane_2_green from '../../assets/planes/plane_2/plane_2_green.png'
import plane_2_red from '../../assets/planes/plane_2/plane_2_red.png'
import plane_2_yellow from '../../assets/planes/plane_2/plane_2_yellow.png'

const spriteLoader = () => {
	// Backgrounds
	loadSprite('bgGreenHills', bgGreenHills)

	// Planes
	loadSprite('plane1Blue', plane_1_blue)
	loadSprite('plane1Pink', plane_1_pink)
	loadSprite('plane1Red', plane_1_red)
	loadSprite('plane1Yellow', plane_1_yellow)
	loadSprite('plane2Yellow', plane_2_yellow)
	loadSprite('plane2Blue', plane_2_blue)
	loadSprite('plane2Red', plane_2_red)
	loadSprite('plane2Green', plane_2_green)
}

export { spriteLoader }
