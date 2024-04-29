export default function parseFormula(input) {
  const regex = /([A-Z]+)\((\d{2}):(\d{2})\)/;
  const match = input.match(regex);
  const coordinates = [];
  let operation = "";

  if (match) {
    const op = match[1];
    const rowStart = parseInt(match[2][0]);
    const colStart = parseInt(match[2][1]);
    const rowEnd = parseInt(match[3][0]);
    const colEnd = parseInt(match[3][1]);
    operation = op;

    for (let row = rowStart; row <= rowEnd; row++) {
      for (let col = colStart; col <= colEnd; col++) {
        coordinates.push([row, col]);
      }
    }
  }

  return { coordinates, operation };
}
