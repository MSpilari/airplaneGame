import kaboom from 'kaboom'
import { game } from './src/scenes/game'
import { menu } from './src/scenes/menu'
import { spriteLoader } from './src/utils/spriteLoader'
import './style.css'

kaboom({
	global: true,
	fullscreen: true
})

spriteLoader()

scene('menu', () => menu())

scene('game', () => game())

go('menu')
