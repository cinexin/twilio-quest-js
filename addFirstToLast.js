function addFirstToLast(shippingManifests) {
	if (shippingManifests.length > 0) {
		return shippingManifests[0] + shippingManifests[shippingManifests.length -1];
	} else {
		return "";
	}
}
