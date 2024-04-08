let toCheckPrime = 10 || 1;
let counter = 0;

for (let i = 0; i <= toCheckPrime; ++i) {
  if (toCheckPrime % i == 0) {
    counter++;
  }
}

console.log(
  `${toCheckPrime}: ${counter > 0 && counter <= 2 ? "É primo" : "Não é primo"}`
);
