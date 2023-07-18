const readlineSync = require('readline-sync');
const size = parseInt(readlineSync.question(`Enter the size of an array : `));
let array=[]
console.log("Enter the values of array : ");
for(i=1;i<=size;i++){
    let value=parseInt(readlineSync.question(`${i} : `))
    array.push(value)
}
let evenCount=0
for(i=0;i<=array.length;i++){
    if(i%2 ==0){
        evenCount++
    }
}
console.log("Number of even numbers in the given array is",evenCount);