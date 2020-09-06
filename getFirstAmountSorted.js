function getFirstAmountSorted(items, numOfItems) {
	items.sort();
	if (numOfItems > 0) {
		return items.slice(0, numOfItems) 
	} else {
		return [];
	}
}
