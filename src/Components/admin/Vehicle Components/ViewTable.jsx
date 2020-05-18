import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../../Comp.module.css";

export default (props) => {
  let { data, handleSort } = props;
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className={styles.tableHeader}>
              <TableCell onClick={() => handleSort("id", true)}>
                <button>Vehicle ID</button>
              </TableCell>
              <TableCell onClick={() => handleSort("modal_name", false)}>
                <button>Model Name</button>
              </TableCell>
              <TableCell onClick={() => handleSort("company", false)}>
                <button>Company</button>
              </TableCell>
              <TableCell onClick={() => handleSort("category", false)}>
                <button>Category</button>
              </TableCell>
              <TableCell onClick={() => handleSort("available", "bool")}>
                <button>Available</button>
              </TableCell>
              <TableCell onClick={() => handleSort("location", false)}>
                <button>Location</button>
              </TableCell>
              <TableCell onClick={() => handleSort("vehicle_no", false)}>
                <button>Vehicle Number</button>
              </TableCell>
              <TableCell onClick={() => handleSort("cost.per_day", true)}>
                <button>Cost per day</button>
              </TableCell>
              <TableCell onClick={() => handleSort("cost.after_5", true)}>
                <button>Cost after 5-days</button>
              </TableCell>
              <TableCell onClick={() => handleSort("cost.after_10", true)}>
                <button>Cost after 10-days</button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    <Link to={`${props.match.url}/${row.id}`}>
                      {row.modal_name}
                    </Link>
                  </TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>
                    {row.available ? "Available" : "Not Available"}
                  </TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.vehicle_no}</TableCell>
                  <TableCell>{row.cost.per_day}</TableCell>
                  <TableCell>{row.cost.after_5}</TableCell>
                  <TableCell>{row.cost.after_10}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};
