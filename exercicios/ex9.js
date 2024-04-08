for (let i = 1; i <= 100; ++i) {
  if (i % 3 == 0 && i % 2 !== 0) {
    console.log("Fizz");
  } else if (i % 2 == 0 && i % 3 !== 0) {
    console.log("Buzz");
  } else if (i % 2 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}
