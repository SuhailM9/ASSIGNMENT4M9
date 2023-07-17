const readlineSync = require('readline-sync');
const limit=parseInt(readlineSync.question(`Enter a limit : `));
let sum=0
for(i=1;i<=limit;i+=2){
    sum+=i
}
console.log("Sum of Odd Numbers :",sum);