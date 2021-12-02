import * as fs from "fs";

const test = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
]; // part1 = 150, part2 = 900

const positions = fs.readFileSync("./positions.txt", "utf-8").split(/\n/);

function calculateDive01(positions) {
  let horizontal = 0;
  let depth = 0;
  positions.forEach((pos) => {
    if (pos.includes("forward")) {
      horizontal += Number(pos.replace("forward ", ""));
    } else if (pos.includes("down")) {
      depth += Number(pos.replace("down ", ""));
    } else if (pos.includes("up")) {
      depth -= Number(pos.replace("up ", ""));
    }
  });

  return horizontal * depth;
}

console.log(`Part1: ${calculateDive01(positions)}`); // 1694130

function calculateDive02(positions) {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  positions.forEach((pos) => {
    if (pos.includes("forward")) {
      const hVal = Number(pos.replace("forward ", ""));
      horizontal += hVal;
      depth += aim * hVal;
    } else if (pos.includes("down")) {
      aim += Number(pos.replace("down ", ""));
    } else if (pos.includes("up")) {
      aim -= Number(pos.replace("up ", ""));
    }
  });

  return horizontal * depth;
}

console.log(`Part2: ${calculateDive02(positions)}`); // 1698850445
