const prompt = require('prompt-sync')();
let n = Number(prompt('Entrer un nombre n : '));
count = 0 ;

function tableMultiplication(){
    let arr = [];
        for (i = 1 ; i < 10 ; i++) {
            count = n * i;
            arr.push(count);
        }
        count ++;
    return arr;
}
console.log(tableMultiplication());
