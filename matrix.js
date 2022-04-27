let arg = process.argv.slice(2);

let sum = (num1, num2) => {
    let total = Number(num1) + Number(num2);
    return total;
};

let diceRoller = function (rolls) {
   let rollArray = [];
   for(let i = 1; i <= rolls; i++) {
      rollArray.push(Math.floor(Math.random() * 6) + 1)
 }
    return rollArray.join();
}
console.log(diceRoller(arg))
//console.log(sum(arg[0], arg[1]));

