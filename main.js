import './style.css'
import kaboom from 'kaboom'
import { spriteLoader } from './src/utils/spriteLoader'
import { Background } from './src/components/background'
import { menu } from './src/scenes/menu'

kaboom({
	global: true,
	fullscreen: true
})

spriteLoader()

scene('menu', () => menu())

go('menu')
