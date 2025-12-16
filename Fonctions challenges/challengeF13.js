const prompt = require('prompt-sync')();


function motsLongs() {
    let arr = [];
     for (i = 0 ; i < 10 ; i++) {
         let mots = prompt('Entrer un mot : ');
         if (mots.length >= 10 ) {
             arr.push(mots);
         }
     }
    return arr;
 }
console.log(motsLongs());
