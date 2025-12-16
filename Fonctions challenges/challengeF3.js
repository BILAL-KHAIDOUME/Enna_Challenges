const propmt = require('prompt-sync')();
let array = []; 

for (i = 0 ; i < 6 ; i++) {
    let n = Number(propmt('Entrer un nombre n : ')); 
    array.push(n); 
    
}
function maxTableau(array) {
    let max = Math.max(...array);
    return (`Le max nombre dans le tableau est : ${max}`);
    
}
console.log(maxTableau(array));
