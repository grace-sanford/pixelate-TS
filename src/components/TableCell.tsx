import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { colorize } from "../store/stateSlice";

interface TableCellProps {
  rowIdx: number;
  colIdx: number;
  color: string;
}

const TableCell = (props: TableCellProps) => {
  const dispatch = useDispatch();

  const handleMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(colorize({ row: props.rowIdx, column: props.colIdx }));
  };

  return <td onMouseOver={handleMouseOver} className={props.color}></td>;
};

export default TableCell;
