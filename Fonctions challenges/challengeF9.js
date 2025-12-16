const prompt = require ('prompt-sync')();
let arr = [];

for (i = 0 ; i < 10 ; i++) {
    let n = Number(prompt('Entrer un nombre n : '));
    arr.push(n);
}
function doubler(arr) {
    let array = [];
    for (j = 0 ; j < arr.length ; j++) {
        array.push(arr[j] * 2 );
    }
    return array
}
console.log(doubler(arr));
