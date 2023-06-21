let myArray = [ "wait", "wait", "wait","wait", "wait", "wait","wait", "wait", "wait","wait", "wait", "wait", "STOP","wait", "wait", "wait","wait", "wait", "wait","wait", "wait", "wait","wait", "wait", "wait" ]


// Write code here
//THIS IS INCORRECT I NEED TO REVISIT
let myArray = [ "wait", "wait", "wait","wait", "wait", "wait","wait", "wait", "wait","wait", "wait", "wait", "STOP","wait", "wait", "wait","wait", "wait", "wait","wait", "wait", "wait","wait", "wait", "wait" ]

var count = 0;
var number = "wait";

for (var i = 0; i < myArray.length; i++){
    if (myArray[i] == number) {
        count++;
    }
}
console.log(count);
