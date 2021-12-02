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
  let vertical = 0;
  positions.forEach((pos) => {
    if (pos.includes("forward")) {
      horizontal += Number(pos.replace("forward ", ""));
    } else if (pos.includes("down")) {
      vertical += Number(pos.replace("down ", ""));
    } else if (pos.includes("up")) {
      vertical -= Number(pos.replace("up ", ""));
    }
  });

  return horizontal * vertical;
}

console.log(`Part1: ${calculateDive01(positions)}`); // 1694130
