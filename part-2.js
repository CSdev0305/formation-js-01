import direBonjour from "./fonction.js";
const tableData = [78],
  tableDate2 = [3, 4, 5, 6];
console.log(tableData);
//Ajouter element
tableData.push(3);
// console.log(tableData)
//size table
tableData.length;

// console.log(tableData.join("*"));
// console.log(tableData)

let resultat = tableData.concat(tableDate2);
let result = [...tableData, ...tableDate2];
tableData.push(...tableDate2);
// console.log(tableData);
// tableData.forEach(element=>{
//     console.log(element);
// });

let resultaOpp = tableData.map((e) => e + 5);
// console.log(tableData);
let resultatFilter = tableData.filter((e) => e < 10);
// console.log(resultatFilter);
resultatFilter = tableData.sort();
// console.log(resultatFilter);
tableData.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  return -1;
});
let chain = ["b", "g", "f", "x", "w", "a", "c", "o"];

// console.log(chain.sort((a, b)=>{
//     if(a > b){
//         return -1
//     }
//     return 1;
// }));
// console.log(chain);
// console.log("========================");
let res = chain.slice(3, undefined);
// console.log(res)

res = chain.splice(0, 3, ...["i", "j", "k"]);
// console.log(res);
// console.log("========================");
// console.log(chain);
console.log(tableData)

console.log(tableData.includes(3));
direBonjour()
