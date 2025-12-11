const prompt = require('prompt-sync')();
let arr = [] ;

for (i = 0 ; i < 10 ; i++) {
    let n = parseInt(prompt("Entrer un nombre n : "));
    arr.push(n);
}
const sum = arr.reduce((a, b) => a + b , 0) ; 
console.log(`La somme est : ${sum}`);
let moyenne = sum / 10 ; 
console.log(`Et le moyenne est :  ${moyenne}`);



