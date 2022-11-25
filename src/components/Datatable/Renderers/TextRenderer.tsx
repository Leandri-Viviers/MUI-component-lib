import React from "react";
import { TableCell, Typography } from "@mui/material";
import { IRendererProps } from "./types";

export const TextRenderer = ({ row, column: { key } }: IRendererProps) => (
  <TableCell>
    <Typography variant="body2">{row[key] || ""}</Typography>
  </TableCell>
);
