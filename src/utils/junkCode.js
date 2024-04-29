//   function parse(i, j) {
//     // coordinates of the current cell
//     // parse the string
let temp_table = [];
// (0, 0) -> (0, 2), (0, 4), (0, 5), ()
// (0, 3) -> (0, 2)
// (0, 0) ->
// (0, 4) -> (0,)
const new_coords = [(0, 0), (0, 3)]; // coords of master cells
const old_coords = table[c[0]][c[1]].coords;
old_coords.map((c, idx) => {
  if (!coords.includes(c)) {
    let depIdx = temp_table[c[0][1]].dependents.indexOf((i, j));
    if (depIdx !== -1) {
      temp_table[c[0][1]].dependents.splice(depIdx, 1);
    }
  }
});
new_coords.map((c) => {
  if (!old_coords.includes(c)) {
    temp_table[c[0]][c[1]].dependents.push((i, j));
  }
});

function calculateNewValue(cell) {
  if (!cell.coords) {
    return;
  }
  const coords = cell.coords;
  let F = cell.coords[0]; // SUM((0,0), (0,1)); break this up: OP & operands
  let S = cell.coords[1]; // SUM((0,0), (0,1)); break this up: OP & operands
  let op = cell.operator;
  if (op == "+") {
    //   let value = table[F[0]][F[1]] + table[S[0]][S[1]];
    let value = 0;
    coords.map((coord) => {
      // first check if the value is integer
      value += temp_table[coord[0]][coord[1]].value;
    });
  } else if (op == "-") {
    // ...
  }
  cell.value = value;
}

const handleKey = (e, i, j) => {
  const temp_table = [];
  table.map((row, a) => {
    temp_table.push([]);
    let len = temp_table.length;
    row.map((col) => {
      temp_table[len - 1].push({ value: col.value, fn: col.fn });
    });
    //   temp_table.push([...row]);
  });
  calculateNewValue(temp_table[i][j]);
  temp_table[i][j].dependents.map((c) => {
    calculateNewValue(temp_table[c[0]][c[1]]);
  });

  setTable(temp_table);
  console.log(table);
};
