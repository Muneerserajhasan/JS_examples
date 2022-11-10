// convert Negative numbers to Positive numbers
// and positive to nevative numbers
// using TWO methods


let number = [1, -2, 7, -6, 20, 98]
console.log('Befor convert => '+ number);

//Method #1

 let conv = number.map(function (element) {
     return -element;
 })
 console.log('Method #1 =>  ' + conv);

//Method #2

for (i in number)
 number[i] = -number[i];

console.log('After convert => '+ number);