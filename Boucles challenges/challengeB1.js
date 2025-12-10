const prompt = require('prompt-sync')();
   let n = Number(prompt('Entrer un nombre : '));

      for (let i = 1 ; i <= 10 ; i++) {
         console.log(`${n} * ${i} = ${n * i}`);
         ;
         
      }