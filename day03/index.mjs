import * as fs from "fs";

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split(/\n/)
  .map((str) => str.split("").map((num) => Number(num)));

function transpose(matrix) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}

// console.log(transpose(input));

const gammaBin = transpose(input).reduce((prev, curr) => {
  if (curr.reduce((prev, curr) => prev + curr, 0) >= input.length / 2) {
    return [...prev, 1];
  } else return [...prev, 0];
}, []);
console.log(`Gamma Binary: ${gammaBin}`);

const epsilonBin = gammaBin.map((g) => Number(!Boolean(g)));
const gamma = parseInt(gammaBin.toString().replaceAll(",", ""), 2);
const epsilon = parseInt(epsilonBin.toString().replaceAll(",", ""), 2);
console.log(`Part1: ${gamma * epsilon}`);
