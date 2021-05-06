import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './table.css';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3f51b5',
    borderRadius: 0,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.focus,
    },
  },
}))(TableRow);

function createData(brand, name, model, color) {
  return { brand, name, model, color};
}

const rows = [
  createData('Harley-davidson', 'Harley-davidson 883', '883', 'Black'),
  createData('Harley-davidson', 'Harley-davidson Dyna', 'Dyna', 'Black'),
  createData('Harley-davidson', 'Harley-davidson Super Glide', 'Super Glide', 'Black'),
  createData('Harley-davidson', 'Harley-davidson Fat-bob', 'Fat-bob', 'Black'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} class="tablee">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell>Brand</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Model</StyledTableCell>
            <StyledTableCell align="center">Color</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}  className="background">
              <StyledTableCell>{row.brand}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.model}</StyledTableCell>
              <StyledTableCell align="center">{row.color}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
