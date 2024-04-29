import calculateDependents from "../utils/calculateDependents";
import calculateValue from "../utils/calculator";
import modifyDependents from "../utils/modifyDependent";
import parseFormula from "../utils/parser";
import spread from "../utils/spread";

const useEventHandlers = (table, setTable) => {
  function handleBlur(e, i, j) {
    const tempState = spread(table);
    if (tempState[i][j].value) {
      tempState[i][j].showValue = true;
    } else {
      tempState[i][j].showValue = false;
    }
    setTable(tempState);
  }
  function handleChange(e, i, j) {
    const inputValue = e.target.value;
    const { coordinates, operation } = parseFormula(inputValue);
    const tempState = spread(table);
    tempState[i][j].rawValue = inputValue;
    if (coordinates && operation) {
      tempState[i][j].coords = coordinates;
      tempState.operation = operation;
      //   tempState[i][j].value = "";
      const aggregateValue = calculateValue(
        tempState[i][j].coords,
        tempState[i][j].operation,
        tempState,
        i,
        j
      );
      tempState[i][j].value = aggregateValue;
      // add dependents
      const [add, remove] = calculateDependents(table, coordinates, i, j);
      modifyDependents(add, remove, tempState, i, j);
    } else {
      if (!isNaN(parseFloat(inputValue)) || inputValue === "") {
        tempState[i][j].value = inputValue;
        tempState[i][j].dependents.forEach((xy) => {
          const [x, y] = xy;
          const aggregateValue = calculateValue(
            tempState[x][y].coords,
            tempState[x][y].operation,
            tempState,
            x,
            y
          );
          tempState[x][y].value = aggregateValue;
        });
      } else {
        tempState[i][j].coords = [];
        tempState[i][j].value = "";
        tempState[i][j].operation = "";
      }
    }
    setTable(tempState);
  }
  function handleFocus(e, i, j) {
    const tempState = spread(table);
    if (tempState[i][j].rawValue) {
      tempState[i][j].showValue = false;
    } else if (tempState[i][j].value) {
      tempState[i][j].showValue = true;
    }
    setTable(tempState);
  }

  return [handleBlur, handleChange, handleFocus];
};

export default useEventHandlers;
