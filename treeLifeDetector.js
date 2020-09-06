var life = Number(process.argv[2]);
var status = "";
switch (life) {
	case 0: 
		status = "alive";
		break;
	case 1: 
	case 2:
	case 3: 
	default:
		status = "other";
}
console.log(status);

