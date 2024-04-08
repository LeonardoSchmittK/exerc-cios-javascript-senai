let counterOdd = 0;
let counterEven = 0;
for (let i = 0; i <= 100; ++i) {
  i % 2 == 0 && counterEven++;
  i % 2 != 0 && counterOdd++;
}

console.log(`Há ${counterEven} números pares de 1 a 100`);
console.log(`Há ${counterOdd} números ímpares de 1 a 100`);
