import React from "react";
import TableCell from "./TableCell";
import { v4 as uuidv4 } from "uuid";

interface TableRowProps {
  row: Array<string>;
  rowIdx: number;
}

const TableRow = (props: TableRowProps) => {
  return (
    <tr>
      {props.row.map((color, colIdx) => (
        <TableCell
          key={uuidv4()}
          rowIdx={props.rowIdx}
          colIdx={colIdx}
          color={color}
        />
      ))}
    </tr>
  );
};

export default TableRow;
