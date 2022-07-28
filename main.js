import kaboom from 'kaboom'
import { game } from './src/scenes/game'
import { gameOver } from './src/scenes/gameOver'
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

scene('gameOver', () => gameOver())

go('menu')
