const prompt = require ('prompt-sync')();
let arr = [];

for (i = 0 ; i < 10 ; i++) {
    let n = parseInt(prompt('Entrer un nombre n : ')) ;
    arr.push(n);
}
function filtrerPairs() {
    let pairs = arr.filter(arr => arr % 2 === 0);
    // pairs.push(arr.filter(arr => arr % 2 === 0));
    return pairs ;
}
console.log(filtrerPairs());
