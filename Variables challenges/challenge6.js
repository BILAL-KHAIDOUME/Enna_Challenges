const prompt = require('prompt-sync')();
let dist = Number(prompt('Entree la distance : ')) , vit = Number(prompt('Entree la vitesse : ')) ;
let temps = dist / vit ;
    console.log(` le temps de trajet est : ${temps}`);



