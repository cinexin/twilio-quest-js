var life = Number(process.argv[2]);
var status = "";
switch (life) {
	case 0: 
		status = "alive";
		break;
	case 1:
		status = "flowering";
		break;
	case 2:
		status = "shedding";
		break;
	case 3: 
	default:
		status = "other";
}
console.log(status);

