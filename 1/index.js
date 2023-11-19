const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  let count = 0;
  const nums = data
    .toString()
    .split("\n")
    .map((line) => parseInt(line));
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) count++;
  }
  console.log(count);
});
