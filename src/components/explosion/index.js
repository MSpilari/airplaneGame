const explosion = (
	widthSprite,
	heightSprite,
	animationSpeed,
	charPosX,
	charPosY
) => {
	let explosionAnimation = add([
		sprite('explosion', {
			width: widthSprite,
			height: heightSprite,
			animSpeed: animationSpeed,
			anim: 'explode'
		}),
		pos(charPosX, charPosY)
	])

	explosionAnimation.exists() && play('explosionSound', { volume: 0.3 })

	wait(animationSpeed, () => destroy(explosionAnimation))
}

export { explosion }
