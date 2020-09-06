function scan(freights) {
	var numOfContrabands = 0;
	freights.forEach(function(freight) {
		if (freight === "contraband") {
			numOfContrabands++;
		}
	});
	return numOfContrabands;
}
