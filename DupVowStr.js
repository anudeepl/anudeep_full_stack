// Function to print unique vowels in a string
function printUniqueVowels(str) {
  str = str.toLowerCase(); // Convert the string to lowercase for case insensitivity
  var vowelSet = new Set();

  for (var i = 0; i < str.length; i++) {
    var currentChar = str[i];

    if (currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u') 
    {
      vowelSet.add(currentChar);
    }
  }

  console.log("Vowels in the string without repeatition are:");
  
  vowelSet.forEach(function(vowel) 
  {
    console.log(vowel);
  });
}

// Test the function with a sample string
var str = "FullStack Development has a huge scope in future compared to other streams";
printUniqueVowels(str);