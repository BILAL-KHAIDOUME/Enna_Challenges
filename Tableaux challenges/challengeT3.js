const prompt = require("prompt-sync")();
let arr = [];

for (i = 0; i < 8; i++) {
  arr.push(parseInt(prompt("Entrer un nombre entier n : ")));
}

let n = parseInt(prompt("Entrer le nombre vous vouler rechercher : "));
let index = arr.indexOf(n);

if (index == -1) {
  console.log(`Nombre ${n} est n'ai exist pas dans le tableaux.`);
} else {
  console.log(`Nombre ${n} present sur le position : ${index}`);
}
