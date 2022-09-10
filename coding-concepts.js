// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: It will output the length of the string to the console. The expected output should be a value of 10.

// b) Verify and explain: 10 was the verified output. The .length method counts the number of values within a given string or array when called on.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: The command should give an output of "l".
// b) Verify and explain: The output was "o". I forgot to take in to account that values begin at 0, meaning that a command like console.log(greeting[8]) => "r"


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: The expected output should be 'Javascript'
// b) Verify and explain: I made the same mistake as in the case above. I need to make a point to remember the values begin at 0, not 1.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: The output will be 'Saturday Sunday'. .toUppercase changes the strings within the called on variable to change the beginning letter to upper case.
// b) Verify and explain: I received an error message saying that .toUpperCase is not a function. The reason that it did not run is because .toUpperCase is specifically a built-in String Method within Javascript


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer:I think the output is going to be 'number' but I'm not entirely certain why. .length would normally give the number of indexes within the given array or string. I'm not sure what typeof does or will do.
// b) Verify and explain:I was correct, the given output was 'number', but I still did not understand why. The reason is that typeof is asking for what kind of data type is stored within the given variable, in this instance dataTypes. .length is getting the number of indexes (3) which is then being identified as a number by the typeof operator.
