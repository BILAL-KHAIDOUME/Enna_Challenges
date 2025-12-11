const prompt = require('prompt-sync')();
let arr = [];

    for (i = 0 ; i < 7 ; i++) {
        arr.push(parseInt(prompt('Enter un nombre entier n : ')));
    }
let max = Math.max(...arr);
let min = Math.min(...arr);
    console.log(`Le max nomber est "${max}" .`);
    console.log(`Le min nomber est "${min}" .`);
    
    