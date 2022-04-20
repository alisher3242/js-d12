//1-vazifa
// let arr = [5, 2, 1, -10, 8];
// let sorted = arr.sort(function sorted(a,b) {
//     return b-a;
// })
// console.log(sorted);

//2-vazifa
let input = Number(prompt("Raqam kiriting"));
let arrays = [];
function inputNumber() {
    while (!isNaN(input)) {
        arrays.push(input);
        input = Number(prompt("Raqam kiriting"));
    }   
    return arrays;
}
console.log(inputNumber());