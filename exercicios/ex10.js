let initial = 1;
let sum = 1;
for (let i = 2; i <= 10; ++i) {
  console.log(i);
  sum += initial / i;
}

console.log(`A soma é ${sum}`);
