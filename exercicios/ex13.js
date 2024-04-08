const nums = [10, 10, 50];
let sum = 0;

for (let i = 0; i < nums.length; ++i) {
  sum += nums[i];
}

const average = sum / nums.length;
console.log("A média é  " + average.toFixed(2));
