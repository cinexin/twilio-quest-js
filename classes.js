class Materializer {

	constructor(target) {
		this.target = target;
		this.activated = false;

	}

	activate() {
		this.activated = true;
	}

	materialize() {
		if (this.activated) {
			return this.target;
		} else {
			return undefined;
		}
	}


}
