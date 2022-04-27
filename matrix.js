let arg = process.argv.slice(2);

let sum = (num1, num2) => {
    let total = Number(num1) + Number(num2);
    return total;
};

console.log(sum(arg[0], arg[1]));