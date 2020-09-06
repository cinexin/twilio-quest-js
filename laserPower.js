function calculatePower(powers) {
	return powers.map(power => power * 2).reduce((sum, current) => sum + current, 0)
}
