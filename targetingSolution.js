class TargetingSolution {

	constructor(coordinates) {
		this.x = coordinates.x;
		this.y = coordinates.y;
		this.z = coordinates.z;
	}

	target() {
		return "(" + this.x + ", " + this.y + ", " + this.z + ")";
	}
}
