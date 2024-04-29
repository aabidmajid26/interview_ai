import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useTableSettings = () => {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(5);
  const [table, setTable] = useState(
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        value: "",
        rawValue: "",
        coords: [],
        operation: "+",
        dependents: [],
        showValue: false,
      }))
    )
  );
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  useEffect(() => {
    console.log("hello");
    const initializeTable = () => {
      if (rows.length === 0 || cols.length === 0) return;
      const newTable = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => ({
          value: "",
          rawValue: "",
          coords: [],
          operation: "+",
          dependents: [],
          showValue: false,
        }))
      );
      if (
        table?.length !== parseFloat(rows) ||
        ![undefined, parseFloat(cols)].includes(table?.[0]?.length)
      ) {
        setTable(newTable);
      }
    };
    initializeTable();
  }, [rows, cols, table]);

  return [rows, cols, setRows, setCols, table, setTable, dispatch, theme];
};
export default useTableSettings;
