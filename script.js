function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

function findChar() {
  const input = document.getElementById("inputString").value;
  const result = firstNonRepeatedChar(input);
  document.getElementById("result").textContent = result !== null
    ? `First non-repeated character: ${result}`
    : `No non-repeated character found.`;
}

const input = prompt("aabbcdd");
alert(firstNonRepeatedChar(input)); 
