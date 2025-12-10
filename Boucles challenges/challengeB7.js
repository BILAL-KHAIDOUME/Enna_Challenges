const prompt = require('prompt-sync')();
let somme = 0 ;

for (i = 1 ; i <= 10 ; i++){
    let n = parseInt(prompt('Entrer un nombre : '));
    if (n > 0) {
        somme += n ;
    }
}
console.log(`La somme est : ${somme}`);
