const calculateDependents = (orgState, coordinates, currX, currY) => {
  const remove = [];
  const add = [];
  coordinates.map((xy) => {
    let isPresent = false;
    orgState[currX][currY].coords.map((ab, idx) => {
      if (ab[0] === xy[0] && ab[1] === xy[1]) {
        isPresent = true;
        return 0;
      }
      return 0;
    });
    if (!isPresent) add.push(xy);
    return 0;
  });
  orgState[currX][currY].coords.map((xy) => {
    let isPresent = false;
    coordinates.map((ab, idx) => {
      if (ab[0] === xy[0] && ab[1] === xy[1]) {
        isPresent = true;
      }
      return 0;
    });
    if (!isPresent) {
      remove.push(xy);
    }
    return 0;
  });
  return [add, remove];
};
export default calculateDependents;
