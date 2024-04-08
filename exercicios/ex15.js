function isPrime(n) {
  let counter = 0;

  for (let i = 0; i <= n; ++i) {
    if (n % i == 0) {
      counter++;
    }
  }

  return `${n}: ${counter > 0 && counter <= 2 ? "É primo" : "Não é primo"}`;
}

for (let i = 0; i <= 50; ++i) {
  console.log(isPrime(i));
}
