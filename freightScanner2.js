function scan(freights) {
	var contrabandIndexes = [];
	for (i = 0; i < freights.length; i++) {
		if (freights[i] === "contraband") {
			contrabandIndexes.push(i);
		}
	}
	return contrabandIndexes;
}
