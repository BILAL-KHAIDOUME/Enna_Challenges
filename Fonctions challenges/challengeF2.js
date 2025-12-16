const prompt = require("prompt-sync")();

let arr = [];
function remplirTableau() {
  for (i = 0; i < 10; i++) {
    let n = Number(prompt("Entrer un nombre : "));
    arr.push(n);
  }
  console.log(arr);
}
function sommeTableau() {
  let sum = arr.reduce((a, b) => a + b, 0);
  return `La somme est : ${sum}`;
}
remplirTableau();
console.log(sommeTableau());
