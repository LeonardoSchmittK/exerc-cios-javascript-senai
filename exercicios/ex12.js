const list = [20, 1, 50, 100, 2];
list.sort((a, b) => a - b);
const smallest = list[0];
const greatest = list[list.length - 1];

console.log("É o menor: " + smallest);
console.log("É o maior: " + greatest);
