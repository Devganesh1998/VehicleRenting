import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Paper,
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  updateBills,
  sortBills,
  filterBillsEq,
} from "../../../Redux/userAction";
import { Link } from "react-router-dom";
import styles from "../../Comp.module.css";

class ViewAllBookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSorted: true,
      category: "all",
    };
  }

  componentDidMount() {
    this.props.updateBills();
  }

  handleSort = (...e) => {
    const [fieldName, isNumber] = e;
    let { isSorted } = this.state;
    let { sortBills } = this.props;
    if (isSorted) {
      sortBills(fieldName, "DECENDING", isNumber);
    } else {
      sortBills(fieldName, "ASCENDING", isNumber);
    }
    this.setState({
      isSorted: !this.state.isSorted,
    });
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    let { updateBills, filterBills } = this.props;
    if (value === "all") {
      updateBills();
    } else {
      updateBills();
      filterBills(name, value);
    }
    this.setState({
      [name]: value,
    });
  };

  render() {
    let { Bills, Users } = this.props;
    return (
      <React.Fragment>
        <h5>Filters</h5>
        <Select
          onChange={this.handleChange}
          name="category"
          variant="outlined"
          value={this.state.category}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"car"}>Car</MenuItem>
          <MenuItem value={"bike"}>Bike</MenuItem>
        </Select>
        <div>
          <h5 style={{ color: "red", fontWeight: "700" }}>
            Click on the Table header to sort in both Ascending and Descending
            order And click on the Bill Id to View which user Booked which
            Vehicle.
          </h5>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className={styles.tableHeader}>
                <TableCell onClick={() => this.handleSort("billId", true)}>
                  <button>Bill ID</button>
                </TableCell>
                <TableCell onClick={() => this.handleSort("billAmount", true)}>
                  <button>Bill Amount</button>
                </TableCell>
                <TableCell onClick={() => this.handleSort("category", false)}>
                  <button>Vehicle Category</button>
                </TableCell>
                <TableCell onClick={() => this.handleSort("vehicle_no", true)}>
                  <button>Vehicle Number</button>
                </TableCell>
                <TableCell onClick={() => this.handleSort("startDate", false)}>
                  <button>Start date</button>
                </TableCell>
                <TableCell onClick={() => this.handleSort("endDate", false)}>
                  <button>End date</button>
                </TableCell>
                <TableCell onClick={() => this.handleSort("bookedDate", false)}>
                  <button>Booked date</button>
                </TableCell>
                <TableCell onClick={() => this.handleSort("origin", false)}>
                  <button>Origin</button>
                </TableCell>
                <TableCell
                  onClick={() => this.handleSort("destination", false)}
                >
                  <button>Destination</button>
                </TableCell>
                <TableCell
                  onClick={() => this.handleSort("paymentMethod", false)}
                >
                  <button>Payment Mode</button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(Bills).map((key) => {
                let row = Bills[key],
                  UserId = "";
                Object.keys(Users).map((key) => {
                  let hasBill = false,
                    user = Users[key];
                  user.history.forEach((bill) => {
                    if (row.billId === bill.billId) {
                      hasBill = true;
                    }
                  });
                  if (hasBill) {
                    UserId = user.userId;
                  }
                });
                return (
                  <TableRow key={row.billId}>
                    <TableCell component="th" scope="row">
                      <Link to={`allUsers/${UserId}`}>{row.billId}</Link>
                    </TableCell>
                    <TableCell>{row.billAmount}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.vehicle_no}</TableCell>
                    <TableCell>{row.startDate}</TableCell>
                    <TableCell>{row.endDate}</TableCell>
                    <TableCell>{row.bookedDate}</TableCell>
                    <TableCell>{row.origin}</TableCell>
                    <TableCell>{row.destination}</TableCell>
                    <TableCell>{row.paymentMethod}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  Bills: state.user.AllBills,
  Users: state.user.user_data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateBills: () => dispatch(updateBills()),
    sortBills: (fieldName, sortType, isNumber) =>
      dispatch(sortBills(fieldName, sortType, isNumber)),
    filterBills: (category, value) => dispatch(filterBillsEq(category, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllBookings);
