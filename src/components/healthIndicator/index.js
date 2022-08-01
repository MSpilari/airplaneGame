const healthIndicator = () => {
	let hpIndicator = add([text('HP:' + 100), pos(0, 0)])

	onUpdate('player', player => (hpIndicator.text = 'HP:' + player.hp()))
}

export { healthIndicator }
