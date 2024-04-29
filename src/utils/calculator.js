export default function calculateValue(coords, op, array, i, j) {
  let value = 0;
  coords.forEach((coord) => {
    const [x, y] = [...coord];
    if (!isNaN(parseFloat(array[x][y].value))) {
      if (!(x === i && y === j)) value += parseFloat(array[x][y].value);
    }
  });
  return value;
}
