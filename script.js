function firstNonRepeatedChar(str) {
 // Write your code here
	    let n = str.length;
    for (let i = 0; i < n; ++i) {
        let found = false;
        for (let j = 0; j < n; ++j) {
            if (i !== j && s[i] === s[j]) {
                found = true;
                break;
            }
        }
        if (!found) return s[i];
    }
    return '$';


	
}
const input = prompt("aabbcc");
alert(firstNonRepeatedChar(input)); 
