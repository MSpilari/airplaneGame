import './style.css'
import kaboom from 'kaboom'
import { spriteLoader } from './src/utils/spriteLoader'
import { Background } from './src/components/background'

kaboom({
	global: true,
	fullscreen: true
})

spriteLoader()

Background('bgGreenHills')
