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

function filterByBinary(input, binary, type) {
  let final = [...input];
  let isDone = false;
  binary.forEach((bin, idx) => {
    if (!isDone) {
      if (isBinarySameLength(final, idx, type)) {
        final = final.filter((data) => data[idx] === 1);
        done = true;
      } else {
        final = final.filter((data) => data[idx] === bin);
      }
    }
  });

  return final[0];
}

function isBinarySameLength(data, idx, type) {
  console.log("🚀 ~ file: index.mjs ~ line 60 ~ isBinarySameLength ~ idx", idx);
  console.log(
    "🚀 ~ file: index.mjs ~ line 60 ~ isBinarySameLength ~ data",
    data
  );
  const tmpData = transpose(data)[idx];
  const filteredData = transpose(data)[idx].filter((d) => d === 1);
  const isSameLength = filteredData.length === tmpData.length / 2;
  return isSameLength ? (type === "gamma" ? 1 : 0) : false;
}

// console.log(filterByBinary(test, [1, 0, 1, 1, 0]));
// console.log(
//   parseInt(
//     filterByBinary(test, [1, 0, 1, 1, 0], "gamma")
//       .toString()
//       .replaceAll(",", ""),
//     2
//   )
// );

console.log(
  parseInt(
    filterByBinary(test, [0, 1, 0, 0, 1], "epsilon")
      .toString()
      .replaceAll(",", ""),
    2
  )
);

// console.log(
//   parseInt(filterByBinary(input, gammaBin).toString().replaceAll(",", ""), 2)
// );
