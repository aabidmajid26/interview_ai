import Cell from "./Cell";
import { changeTheme } from "../store/themeSlice";
import "../App.css";
import useTableSettings from "../hooks/useTableSettings";
import useEventHandlers from "../hooks/useEventHandlers";
import { Button, TextField, Typography } from "@mui/material";

const Table = () => {
  const [rows, cols, setRows, setCols, table, setTable, dispatch, theme] =
    useTableSettings();
  const [handleBlur, handleChange, handleFocus] = useEventHandlers(
    table,
    setTable
  );

  return (
    <div className={"App " + theme}>
      <h1>Excel Sheet</h1>

      <Button variant="contained" onClick={() => dispatch(changeTheme())}>
        Theme {": " + theme}
      </Button>
      <div>
        <Typography>Enter Sheet Dimensions:</Typography>
        <TextField
          id="rows"
          label="Rows"
          variant="filled"
          className={theme + "-input"}
          onChange={(e) =>
            setRows(e.target.value.length > 0 ? e.target.value : "0")
          }
        />
        <TextField
          id="cols"
          label="Cols"
          variant="filled"
          className={theme + "-input"}
          onChange={(e) =>
            setCols(e.target.value.length > 0 ? e.target.value : "0")
          }
        />
      </div>
      <div>
        <table>
          <tbody>
            {table.map((row, i) => {
              return (
                <tr key={i}>
                  {row.map((col, j) => {
                    return (
                      <td key={String(i) + String(j)}>
                        <Cell
                          cellState={table[i][j]}
                          handleFocus={(e) => handleFocus(e, i, j)}
                          handleBlur={(e) => handleBlur(e, i, j)}
                          handleChange={(e) => handleChange(e, i, j)}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
