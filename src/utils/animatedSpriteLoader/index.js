import explosion from '../../assets/explosionEffect/spritesheet/spritesheet.png'
import bronzeCoinLR from '../../assets/flying_coins/__bronze_coin_fly_no_up_down_movement.png'
import bronzeCoinUD from '../../assets/flying_coins/__bronze_coin_fly_up_down_movement.png'
import silverCoinLR from '../../assets/flying_coins/__silver_coin_fly_no_up_down_movement.png'
import silverCoinUD from '../../assets/flying_coins/__silver_coin_fly_up_down_movement.png'
import goldCoinLR from '../../assets/flying_coins/__gold_coin_fly_no_up_down_movement.png'
import goldCoinUD from '../../assets/flying_coins/__gold_coin_fly_up_down_movement.png'

const animatedSpriteLoader = () => {
	// Explosion Effect
	loadSprite('explosion', explosion, {
		sliceX: 3,
		sliceY: 3,
		anims: {
			explode: {
				from: 0,
				to: 8
			}
		}
	})

	// Flying Coins
	loadSprite('bronzeCoinLR', bronzeCoinLR, {
		sliceX: 3,
		sliceY: 5,
		anims: {
			fly: {
				from: 0,
				to: 14,
				loop: true
			}
		}
	})

	loadSprite('bronzeCoinUD', bronzeCoinUD, {
		sliceX: 3,
		sliceY: 5,
		anims: {
			fly: {
				from: 0,
				to: 14,
				loop: true
			}
		}
	})
	loadSprite('silverCoinLR', silverCoinLR, {
		sliceX: 3,
		sliceY: 5,
		anims: {
			fly: {
				from: 0,
				to: 14,
				loop: true
			}
		}
	})

	loadSprite('silverCoinUD', silverCoinUD, {
		sliceX: 3,
		sliceY: 5,
		anims: {
			fly: {
				from: 0,
				to: 14,
				loop: true
			}
		}
	})
	loadSprite('goldCoinLR', goldCoinLR, {
		sliceX: 3,
		sliceY: 5,
		anims: {
			fly: {
				from: 0,
				to: 14,
				loop: true
			}
		}
	})

	loadSprite('goldCoinUD', goldCoinUD, {
		sliceX: 3,
		sliceY: 5,
		anims: {
			fly: {
				from: 0,
				to: 14,
				loop: true
			}
		}
	})
}

export { animatedSpriteLoader }
