
function checkColorRecognized(color) {
	if (color !== "red" && color !== "blue" && color !== "yellow") {
		alert("Unknown color: " + color);
		exit(-1);
	}
}

function getColorNumber(name) {
	var color = -1;
	switch(name) {
		case "red":
			color = 0;
			break;
		case "yellow":
			color = 1;
			break;
		case "blue":
			color = 2;
			break;
		case "purple":
			color = 3;
			break;
		case "orange":
			color = 4;
			break;
		case "green":
			color = 5;
			break;
		default:
			color = "unknown";
	}

	return color;
}

const colorCombination = [
	[0, 4, 3],
	[4, 1, 5],
	[3, 5, 2]
];


function getColorName(number) {
    var color = "unknown";
	switch(number) {
			case 0:
					color = "red";
					break;
			case 1:
					color = "yellow";
					break;
			case 2:
					color = "blue";
					break;
			case 3:
					color = "purple";
					break;
			case 4:
					color = "orange";
					break;
			case 5:
					color = "green";
					break;
			default:
					color  = "unknown";
	}
	return color;
}
  

class Ducktypium {

	constructor(color) {
		checkColorRecognized(color);
		this.color = color;
		this.calibrationSequence = [];
	}

	refract(color) {
		checkColorRecognized(color);
		var currentColor = getColorNumber(this.color)
		var colorToCombine = getColorNumber(color)
		var combinedColor = colorCombination[currentColor][colorToCombine];
		return getColorName(combinedColor);

	}

	calibrate(sequence) {
		sequence.sort();
		this.calibrationSequence = sequence.map(number => number * 3);
	}
}
