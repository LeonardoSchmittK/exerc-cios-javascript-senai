let factorial = 5 || 1; // caso seja falsy (0) fica 1

for (let i = factorial; i > 1; i--) {
  factorial *= i - 1;
}

console.log(factorial);
