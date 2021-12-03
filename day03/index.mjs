import * as fs from "fs";

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split(/\n/)
  .map((str) => str.split("").map((num) => Number(num)));

function transpose(matrix) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}

const gammaBin = transpose(input).reduce((prev, curr) => {
  if (curr.reduce((prev, curr) => prev + curr, 0) >= input.length / 2) {
    return [...prev, 1];
  } else return [...prev, 0];
}, []);
const epsilonBin = gammaBin.map((g) => Number(!Boolean(g)));

const gamma = parseInt(gammaBin.toString().replaceAll(",", ""), 2);
const epsilon = parseInt(epsilonBin.toString().replaceAll(",", ""), 2);
console.log(`Part1: ${gamma * epsilon}`);

/*
 * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */

const test = [
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 1, 1, 0],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0],
];

function filterByBinary(input, binary) {
  let final = [...input];
  binary.forEach((bin, idx) => {
    if (checkSameLength(final, idx, "gamma")) {
      final = final.filter((data) => data[idx] === 1);
    } else {
      final = final.filter((data) => data[idx] === bin);
    }
  });

  return final[0];
}

function checkSameLength(data, idx, type) {
  const tmp = transpose(data)[idx];
  console.log("🚀 ~ file: index.mjs ~ line 57 ~ checkSameLength ~ tmp", tmp);
}

// console.log(filterByBinary(test, [1, 0, 1, 1, 0]));
console.log(
  parseInt(
    filterByBinary(test, [1, 0, 1, 1, 0]).toString().replaceAll(",", ""),
    2
  )
);
// console.log(
//   parseInt(filterByBinary(input, gammaBin).toString().replaceAll(",", ""), 2)
// );
