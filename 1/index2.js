const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  const nums = data
    .toString()
    .split("\n")
    .map((line) => parseInt(line));

  let count = 0;
  if (nums.length < 4) return 0;

  const start = performance.now();
  //===================Dynamic Method====================
  // Execution time: 0.3175000101327896 ms
  //=====================================================
  const firstSum = nums[0] + nums[1] + nums[2];
  let prevSum = firstSum;

  for (let i = 1; i < nums.length; i++) {
    const exactI = nums[i],
      plusOne = nums[i + 1],
      plusTwo = nums[i + 2];

    const sumA = prevSum;

    const sumB = exactI + plusOne + plusTwo;

    if (sumB > sumA) count++;
    prevSum = sumB;
  }
  //=================Non-Dynamic Method==================
  // Execution time: 0.3410999923944473 ms
  //=====================================================
  //   for (let i = 1; i < nums.length; i++) {
  //     const minusOne = nums[i - 1],
  //       exactI = nums[i],
  //       plusOne = nums[i + 1],
  //       plusTwo = nums[i + 2];
  //     const sumA = minusOne + exactI + plusOne;
  //     const sumB = exactI + plusOne + plusTwo;
  //     if (sumB > sumA) count++;
  //   }

  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  console.log(count);
});
