const planeExplosion = (
	widthSprite,
	heightSprite,
	animationSpeed,
	charPosX,
	charPosY
) => {
	let explosionAnimation = add([
		sprite('planeExplosion', {
			width: widthSprite,
			height: heightSprite,
			animSpeed: animationSpeed,
			anim: 'explode'
		}),
		pos(charPosX, charPosY)
	])

	wait(animationSpeed, () => destroy(explosionAnimation))
}

export { planeExplosion }
