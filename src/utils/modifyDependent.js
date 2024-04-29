export default function modifyDependents(add, remove, tempState, i, j) {
  add.forEach((xy) => {
    if (
      !tempState[xy[0]][xy[1]].dependents.some(([a, b]) => a === i && b === j)
    ) {
      if (!(xy[0] === i && xy[1] === j))
        tempState[xy[0]][xy[1]].dependents.push([i, j]);
    }
  });
  remove.forEach((xy) => {
    let index = -1;
    tempState[xy[0]][xy[1]].dependents.forEach((ab, idx) => {
      if (ab[0] === i && ab[1] === j) {
        index = idx;
      }
    });
    if (index !== -1) {
      tempState[xy[0]][xy[1]].dependents.splice(index, 1);
    }
  });
  return tempState;
}
