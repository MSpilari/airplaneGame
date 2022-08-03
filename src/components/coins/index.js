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
		pos(width() - widthSprite / 2, randi(0, height() - heightSprite)),
		area(),
		cleanup(),
		move((100, 0), -100)
	])

	onUpdate(() => {
		if (coinMovement === 'up' && currentCoin.pos.y > 0)
			currentCoin.move(0, -300)

		if (coinMovement === 'up' && currentCoin.pos.y < 0) coinMovement = 'down'

		if (coinMovement === 'down' && currentCoin.pos.y < height())
			currentCoin.move(0, 300)

		if (coinMovement === 'down' && currentCoin.pos.y > height() - heightSprite)
			coinMovement = 'up'
	})

	onCollide(`${allCoins[allCoinsIndex]}`, 'player', coin => destroy(coin))
}

export { coins }
