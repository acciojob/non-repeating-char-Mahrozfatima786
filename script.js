function firstNonRepeatedChar(str) {
 // Write your code here
	return str.split('').filter(function (character, index, obj) {
        return obj.indexOf(character) === obj.lastIndexOf(character);
    }).shift();
}
const input = prompt("aabbcc");
alert(firstNonRepeatedChar(input)); 
