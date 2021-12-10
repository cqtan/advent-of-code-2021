import * as fs from "fs";

const bingoBoards = fs
  .readFileSync("./bingo_boards.txt", "utf-8")
  .split(/\n\n/)
  .map((board) =>
    board
      .replace(/\s+/g, ",")
      .split(",")
      .map((str) => Number(str))
  );

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split(",")
  .map((num) => Number(num));
