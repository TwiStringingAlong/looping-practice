let myArray = [ 3, 9, 10, 2, 1, 901, 76, 90, 14, 1000 ]

// Write code here
//ADDITION
//REFERENCE: https://www.educative.io/answers/how-to-get-the-sum-of-an-array-in-javascript
function sumArray(array) {
 let myArray = [ 3, 9, 10, 2, 1, 901, 76, 90, 14, 1000 ]
  let sum = 0;

  for (let i = 0; i < myArray.length; i += 1) {
    sum += myArray[i];
  }
  
  return sum;
}

console.log(sumArray([ 3, 9, 10, 2, 1, 901, 76, 90, 14, 1000 ]));

//PRODUCT
//RERERENCE: https://www.educative.io/answers/how-to-get-the-sum-of-an-array-in-javascript
function findProduct(arr) {
let myArray = [ 3, 9, 10, 2, 1, 901, 76, 90, 14, 1000 ]
 let result = 1;
 for(let i=0; i <myArray.length; i++) {
 result = result * arr[i];
 }
 return result;
}
console.log(findProduct([ 3, 9, 10, 2, 1, 901, 76, 90, 14, 1000 ]));
