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

console.log(getNumDepthIncreased(sweeps)); // 1616
