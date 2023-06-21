const prompt = require("prompt-sync")({ sigint: true });

// Write Code here
//FIRST ATTEMPT THAT I CANNOT GET RIGHT, IT OUTPUTS 2 ARRAYS BUT NOT IN THE CORRECT SEQUENCE
//I USED THIS SOURCE: https://www.tutorialspoint.com/separate-odd-and-even-in-javascript#
const arr = [ 1, 1, 2, 3, 4, 5, 5, 5 ];
const isEven = num => num % 2 === 0;
const sorter = (a, b) => {
   if(isEven(a) && !isEven(b)){
      return -1;
   };
   if(!isEven(a) && isEven(b)){
      return 1;
   };
   return 0;
};
arr.sort(sorter);
console.log(arr);

//SECOND ATTEMPTED SOLUTION
let myArray = [ 1, 1, 2, 3, 4, 5, 5, 5 ]
let list1 = myArray.splice(0,7)
console.log(list1)

//THIRD ATTEMPTED SOLUTION
//REFERENCE: https://dev.to/miku86/javascript-katas-split-a-number-array-into-odd-and-even-numbers-1kc0
function splitOddAndEven(numbers) {
  let odd = [];
  let even = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    } else {
      odd.push(numbers[i]);
    }

let myArray = [ 1, 1, 2, 3, 4, 5, 5, 5 ] 
    odd,
    even,

return myArray;

console.log(splitOddAndEven([ 1, 1, 2, 3, 4, 5, 5, 5 ]))
