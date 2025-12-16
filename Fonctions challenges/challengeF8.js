const prompt = require('prompt-sync')();
let array = [] ;

for (i = 0 ; i < 10 ; i++ ) {
    let n = Number(prompt('Entrer un nombre n : '));
    array.push(n);
}
function moyenne(array) {
    let sum = 0 ;
    for (j = 0 ; j < array.length ; j++) {
        sum += array[j];
    }
    let moyenne = sum / array.length ;
    return (`Le moyenne est : ${moyenne} .`);
    
}
console.log(moyenne(array));
