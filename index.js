console.log("Hello World");
var test = 6;
console.log(test);
let var1 = 25;
console.log(var1);
if(var1 <= test) {
    console.log("vrai");
 } else {
        console.log("Faux");
    }

    let tableNumber = [1, 3, 4, "Hello", 'Number'];
    console.log(tableNumber);
    for (let i in tableNumber){
        console.log(tableNumber[i]);
    }
    for (let i of tableNumber){
        if(typeof i == 'number') {
        console.log(i);
        }
    }
    let identite = {
        nom : 'Jusné',
        prenom : 'Jonathan',
    }
    let i = 0;
    while (i < tableNumber.length){
        console.log(tableNumber[i]);
        i++;
    }
    for (log in identite){
        console.log(log)
    }
    do{
        console.log(tableNumber[i]);
        i++;
    } while (i < tableNumber.length);