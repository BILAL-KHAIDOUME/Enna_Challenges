const prompt = require('prompt-sync')();
let DistKM = Number(prompt('Entrez la distance en kilometres : '));
let DistM = DistKM / 1.609 ;
    console.log(`La distance en Miles est : ${DistM} m`);
    