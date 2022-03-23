import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { CardWrapper } from "@components/global/Card";
import Box from "@mui/material/Box";

function createData(name: string, points: number, rank: number) {
  return {
    name,
    points,
    rank,
  };
}

const rows = [
  createData("Arpit Bhalla", 1020, false),
  createData("Akshat Kumar", 908, true),
  createData("Karan", 807, false),
];

export default function BasicTable(props: any) {
  return (
    <CardWrapper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow
                onClick={() => {
                  props?.onClick?.(row.name);
                }}
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {rowIndex + 1}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{Number(row.points).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardWrapper>
  );
}
