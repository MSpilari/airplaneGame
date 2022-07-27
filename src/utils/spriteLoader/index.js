import bgGreenHills from '../../assets/background/sky_background_green_hills.png'
import plane_1_blue from '../../assets/planes/plane_1/plane_1_blue.png'
import plane_1_pink from '../../assets/planes/plane_1/plane_1_pink.png'
import plane_1_red from '../../assets/planes/plane_1/plane_1_red.png'
import plane_1_yellow from '../../assets/planes/plane_1/plane_1_yellow.png'
import plane_2_blue from '../../assets/planes/plane_2/plane_2_blue.png'
import plane_2_green from '../../assets/planes/plane_2/plane_2_green.png'
import plane_2_red from '../../assets/planes/plane_2/plane_2_red.png'
import plane_2_yellow from '../../assets/planes/plane_2/plane_2_yellow.png'
import plane_3_blue from '../../assets/planes/plane_3/plane_3_blue.png'
import plane_3_green from '../../assets/planes/plane_3/plane_3_green.png'
import plane_3_red from '../../assets/planes/plane_3/plane_3_red.png'
import plane_3_yellow from '../../assets/planes/plane_3/plane_3_yellow.png'
import fireball from '../../assets/planes/torpedo/fire_ball_1.png'
import fireballBlue from '../../assets/planes/torpedo/fire_ball_blue.png'
import fireballPink from '../../assets/planes/torpedo/fire_ball_pink.png'
import torpedoBlack from '../../assets/planes/torpedo/torpedo_black.png'
import torpedoFlame from '../../assets/planes/torpedo/torpedo_flame.png'
import torpedo from '../../assets/planes/torpedo/torpedo.png'

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
	loadSprite('plane3Yellow', plane_3_yellow)
	loadSprite('plane3Blue', plane_3_blue)
	loadSprite('plane3Red', plane_3_red)
	loadSprite('plane3Green', plane_3_green)

	// Bullets Missiles
	loadSprite('fireball', fireball)
	loadSprite('fireballBlue', fireballBlue)
	loadSprite('fireballPink', fireballPink)
	loadSprite('torpedoBlack', torpedoBlack)
	loadSprite('torpedoFlame', torpedoFlame)
	loadSprite('torpedo', torpedo)
}

export { spriteLoader }
