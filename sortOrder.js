var firstItem = process.argv[2].toUpperCase();
var secondItem = process.argv[3].toUpperCase();

console.log(firstItem.localeCompare(secondItem));
