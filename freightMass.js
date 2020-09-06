function calculateMass(freights) {
	return freights.map(freight => freight.length).reduce((sum, current) => sum + current, 0);
}
