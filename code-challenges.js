// ASSESSMENT 6: Coding Practical Questions
// --------------------1)
// Create a function that takes in an array of objects and
// returns a sentence about each person with their names capitalized.
var people = [
  {name: "ford prefect", occupation: "hitchhiker"},
  {name: "zaphod beeblebrox", occupation: "president of the galaxy,"},
  {name: "arthur dent", occupation: "radio employee"}]
// COULDNT DO IT. I CANT EVEN GET IT TO CAPITALIZE
function nameArr (arr){
for (let i=0; i < arr.length; i++) {
  if (typeof arr[i] === 'string') {
    arr[0] = arr[0].toUpperCase(0);
  }
}
return arr
}
console.log(nameArr(people))
// console.log(`${person.name} is a ${person.occupation}`)

// Object.keys(people)

// console.log(`${person.name} is a ${person.occupation},
// ${person.name} is a ${person.occupation},
// ${person.name} is a ${person.occupation}`)


// --------------------2)
// Create a function that takes in a mixed data array and
// returns an array of only the
// remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

function filterArr(fullArr) {
    var onlyNums = [];
    for (var i = 0; i < fullArr.length; i++) {
        if (typeof fullArr[i] === "number") {
            onlyNums.push(fullArr[i] % 3);
        }
    }

    return onlyNums;
}
console.log(filterArr(testingArray1));
console.log(filterArr(testingArray2));

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]
// var testingArray5 = testingArray3.concat(testingArray4);
var testingArray5 = [...testingArray3, ...testingArray4];

function duplicateArray (removeDouble)  {
    var a = [];
    for (var i=0, l=removeDouble.length; i<l; i++)
        if (a.indexOf(removeDouble[i]) === -1)
            a.push(removeDouble[i]);
    return a;
}
console.log(duplicateArray(testingArray5))
