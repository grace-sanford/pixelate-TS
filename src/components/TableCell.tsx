import React from "react";
import { useDispatch } from "react-redux";
import { colorize } from "../store/stateSlice";

interface TableCellProps {
    rowIdx: number;
    colIdx: number;
    color: string;
  }

const TableCell = (props: TableCellProps) => {
  const dispatch = useDispatch();

  function handleClick() {
    // e.preventDefault();
    dispatch(colorize({ row: props.rowIdx, column: props.colIdx }));
  }

  return <td onClick={handleClick} className={props.color}></td>;
};

export default TableCell;