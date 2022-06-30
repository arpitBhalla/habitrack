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
import { CardWrapper } from "@arpitbhalla/habitrack/components/Card";
import Box from "@mui/material/Box";
import { supabase } from "@arpitbhalla/habitrack/utils/supabaseClient";

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
              <TableCell>Streak</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users?.map((row, rowIndex) => (
              <TableRow
                onClick={() => {
                  props?.onClick?.(row.full_name);
                }}
                key={row.full_name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {rowIndex + 1}
                </TableCell>
                <TableCell>{row.full_name}</TableCell>
                <TableCell>{Number(row.points).toLocaleString()}</TableCell>
                <TableCell>{Number(row.streak).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardWrapper>
  );
}
