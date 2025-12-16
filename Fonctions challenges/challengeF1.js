const prompt = require('prompt-sync')();
function remplirTableau() {
    let arr = [];
    for (i = 0 ; i < 10 ; i++) {
        let n = Number(prompt('Entrer un nombre : '));
        arr.push(n);
    }
    console.log(arr);
    
}
remplirTableau();