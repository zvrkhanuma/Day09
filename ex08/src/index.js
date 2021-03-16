// Only change code below this line
function logicalOrOperator(num){
    if (num < 20 || num > 30){
        return "Out";
    }
    return "In";
}
logicalOrOperator(0);
logicalOrOperator(9);
logicalOrOperator(20);
logicalOrOperator(23);
logicalOrOperator(30);
logicalOrOperator(31);
logicalOrOperator(100);

console.log(logicalOrOperator(0));
console.log(logicalOrOperator(9));
console.log(logicalOrOperator(20));
console.log(logicalOrOperator(23));
console.log(logicalOrOperator(30));
console.log(logicalOrOperator(31));
console.log(logicalOrOperator(100));


// Only change code above this line
module.exports = logicalOrOperator;