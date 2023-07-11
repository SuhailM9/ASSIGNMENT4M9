const readlineSync = require('readline-sync');
const num = parseInt(readlineSync.question(`Enter a number : `));
for(i=1;i<=num;i++){
    console.log(i,"*",num,"=",i*num);
}