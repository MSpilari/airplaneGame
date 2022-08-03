const coins = (widthSprite, heightSprite) => {
	const allCoins = ['bronzeCoinUD', 'silverCoinUD', 'goldCoinUD']

	let allCoinsIndex = randi(0, allCoins.length)

	let coinMovement = 'up'

	let currentCoin = add([
		sprite(allCoins[allCoinsIndex], {
			width: widthSprite,
			height: heightSprite,
			animSpeed: 2,
			anim: 'fly'
		}),
		`${allCoins[allCoinsIndex]}`,
		pos(width() - widthSprite, randi(0, height())),
		area(),
		cleanup()
	])
}

export { coins }
