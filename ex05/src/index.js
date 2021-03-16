// Only change code below this line
function compareDifferentValues(m){
    if (m != 55){
        return "Not Equal";
    }
   return "Equal";
}
compareDifferentValues(55);
compareDifferentValues("55");
compareDifferentValues("21");
compareDifferentValues(12);
compareDifferentValues("Doe");

console.log(compareDifferentValues(55));
console.log(compareDifferentValues("55"));
console.log(compareDifferentValues("21"));
console.log(compareDifferentValues(12));
console.log(compareDifferentValues("Doe"));
// Only change code above this line
module.exports = compareDifferentValues;