import * as fs from "fs";

const test = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]; // 7
const sweeps = fs
  .readFileSync("./sweeps.txt", "utf-8")
  .split(/\n/)
  .map((num) => Number(num));

function getNumDepthIncreased(sweeps) {
  let counter = 0;
  let prev = 0;

  sweeps.forEach((sweep, idx) => {
    prev = idx > 0 ? sweeps[idx - 1] : sweep;
    sweep > prev && counter++;
  });

  return counter;
}

console.log(getNumDepthIncreased(`Part 1: ${sweeps}`)); // 1616

function getNumDepthIncreasedBySums(sweeps) {
  const maxLength = sweeps.length;
  let counter = 0;
  let prev = 0;

  sweeps.forEach((_, idx) => {
    if (idx + 2 < maxLength) {
      const sum = sweeps[idx] + sweeps[idx + 1] + sweeps[idx + 2];
      prev = idx > 0 ? sweeps[idx - 1] + sweeps[idx] + sweeps[idx + 1] : sum;
      sum > prev && counter++;
    }
  });

  return counter;
}

console.log(getNumDepthIncreasedBySums(`Part2: ${sweeps}`)); // 1645
