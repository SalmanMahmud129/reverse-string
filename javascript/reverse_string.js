function reverseString(str) {
  // type your code here
  let reversedStr = []
  // console.log("characters in reverse:")

  // console.log('str.length-1', str.length-1)

  for (let i = str.length - 1; i >= 0; i--){
    console.log(i, str[i])
    reversedStr.push(str[i])
  }
  console.log('reversedStr:', reversedStr.join(''))

  return reversedStr.join('')
}

reverseString("hello")
reverseString("your mom")
reverseString("Testing")
reverseString("I did it")


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// Create an empty array that will be filled in with the characters in reverse order
//      iterate through the given string starting from the end of it
//          push each character to the empty array
// return the result
