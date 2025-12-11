const prompt = require("prompt-sync")();
let arr = [];

for (i = 0; i < 5; i++) {
  let num = parseInt(prompt("Entrer un nombre entier n : "));
  arr.push(num);
}
console.log(arr);

let array = arr.map((num) => Math.pow(num,2));
console.log(array);
