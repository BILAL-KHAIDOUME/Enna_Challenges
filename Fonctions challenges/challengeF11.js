const prompt = require("prompt-sync")();
let arr = [];
// let array = [];
// count = 0 ; 


for (i = 0; i < 10; i++) {
  let n = Number(prompt("Entrer un nombre : "));
  arr.push(n);
}
function supprimerDoublons(arr ) {
  return [...new Set(arr)];
}
// for (j = 0 ; j < arr.length ; j++ ) {
//     for (x = 0 ; x < arr.length ; x++) {
//         if (arr[j] == arr[x]) {
//             array.push(arr[j]);
//         }
//     }
//     count += arr[j] ;
// }
// count ++;
// return array;
// }
console.log(supprimerDoublons(arr));
