import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../../Comp.module.css";

export default (props) => {
  let { Users, handleSort } = props;
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className={styles.tableHeader}>
              <TableCell onClick={() => handleSort("userId", true)}>
                <button>User ID</button>
              </TableCell>
              <TableCell onClick={() => handleSort("name", false)}>
                <button>Name</button>
              </TableCell>
              <TableCell onClick={() => handleSort("age", true)}>
                <button>Age</button>
              </TableCell>
              <TableCell onClick={() => handleSort("email", false)}>
                <button>Email ID</button>
              </TableCell>
              <TableCell onClick={() => handleSort("mobile", true)}>
                <button>Phone Number</button>
              </TableCell>
              <TableCell onClick={() => handleSort("password", false)}>
                <button>Password</button>
              </TableCell>
              <TableCell onClick={() => handleSort("lisenceId", false)}>
                <button>Lisence Number</button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Users.map((row) => {
              // let row = Users[key];
              return (
                <TableRow key={row.userId}>
                  <TableCell component="th" scope="row">
                    {row.userId}
                  </TableCell>
                  <TableCell>
                    <Link to={`${props.match.url}/${row.userId}`}>
                      {row.name}
                    </Link>
                  </TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.mobile}</TableCell>
                  <TableCell>{row.password}</TableCell>
                  <TableCell>{row.lisenceId}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};
