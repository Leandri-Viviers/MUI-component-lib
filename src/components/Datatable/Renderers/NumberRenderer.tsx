import React from "react";
import { TableCell, Typography } from "@mui/material";
import { IRendererProps } from "./types";

export const NumberRenderer = ({ row, column: { key } }: IRendererProps) => (
  <TableCell>
    <Typography variant="body2" align="right">
      {parseInt(row[key]) || 0}
    </Typography>
  </TableCell>
);
