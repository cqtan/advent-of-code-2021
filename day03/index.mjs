import * as fs from "fs";

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split(/\n/)
  .map((str) => str.split("").map((num) => Number(num)));

function transpose(matrix) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}

function getDecimal(numArray) {
  return parseInt(numArray.toString().replaceAll(",", ""), 2);
}

const gammaBin = transpose(input).reduce((prev, curr) => {
  if (curr.reduce((prev, curr) => prev + curr, 0) >= input.length / 2) {
    return [...prev, 1];
  } else return [...prev, 0];
}, []);
const epsilonBin = gammaBin.map((g) => Number(!Boolean(g)));

const gamma = getDecimal(gammaBin);
const epsilon = getDecimal(epsilonBin);
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

function filterByBinary(input, binary, type) {
  let final = [...input];
  binary.forEach((bin, idx) => {
    if (isBinarySameLength(final, idx, type)) {
      final = final.filter((data) => data[idx] === (type === "gamma" ? 1 : 0));
    } else if (final.length > 1) {
      final = final.filter((data) => data[idx] === bin);
    }
  });

  return final[0];
}

function isBinarySameLength(data, idx, type) {
  const tmpData = transpose(data)[idx];
  const filteredData = transpose(data)[idx].filter((d) => d === 1);
  const isSameLength = filteredData.length === tmpData.length / 2;
  return isSameLength ? (type === "gamma" ? 1 : 0) : false;
}
