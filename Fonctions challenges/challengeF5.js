const prompt = require ('prompt-sync')();
let arr = [];

for (i = 0 ; i < 6 ; i++ ) {
    let VAL = prompt('Entrer un valeur (string , number, boolean ....) : ');
    arr.push(VAL);
}
function inverserTableau(arr){
    console.log(arr);
    
    let inv = [...arr].reverse();

return (inv);
}
console.log(inverserTableau(arr));