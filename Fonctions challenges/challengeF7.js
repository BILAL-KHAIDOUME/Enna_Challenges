const prompt = require('prompt-sync')();
let arr = [];

for (i = 0 ; i < 10 ; i++) {
    let n = Number(prompt('Entrer un nombre n : '));
    arr.push(n);
}

function produitTableau(arr) {
    let produit = 1 ;
        for (j = 0 ; j < arr.length ; j++ ) {
            produit *= arr[j];
        }
        return produit;
}
console.log(produitTableau(arr));
