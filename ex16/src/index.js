// Only change code below this line
function checkSign(num){
    return (num < 0) ? "negative": (num === 0) ? "zero": "possitive";
}
console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));
// Only change code above this line
module.exports = checkSign;