import React from "react";
// Components
import { TableBody, TableRow } from "@mui/material";
// Types
import renderers from "./Renderers";
import { IColumn } from "./Renderers/types";

interface DatatableBodyProps {
  rows: Array<any>;
  columns: Array<IColumn>;
}

const Body = ({ rows, columns }: DatatableBodyProps) => {
  return (
    <TableBody>
      {rows.map((row, rowIndex) => (
        <TableRow key={rowIndex}>
          {/* {selected && (
            <TableCell
              align="center"
              padding="checkbox"
              onClick={() =>
                (row.selectable || selectable) && setSelected({ id: row.id })
              }
            >
              {(row.selectable || selectable) && singleSelect && (
                <Radio
                  checked={includes(row?.id, selected)}
                  inputProps={{
                    "aria-labelledby": `select-${rowIndex}`,
                  }}
                />
              )}
              {(row.selectable || selectable) && !singleSelect && (
                <Checkbox
                  checked={includes(row?.id, selected)}
                  inputProps={{
                    "aria-labelledby": `select-${rowIndex}`,
                  }}
                />
              )}
            </TableCell>
          )} */}
          {columns.map((column: IColumn, colIndex) => (
            <React.Fragment key={colIndex}>
              {renderers[column.type]({ row, column })}
            </React.Fragment>
          ))}
        </TableRow>
      ))}
      {/* {rows.length === 0 && (
        <TableRow sx={{ height: "64px" }}>
          <TableCell
            align="center"
            padding="checkbox"
            colSpan={columns.length + (selectable ? 1 : 0)}
          >
            <Typography variant="body2">No results</Typography>
          </TableCell>
        </TableRow>
      )} */}
    </TableBody>
  );
};

export default Body;
