import React from "react";
import { connect } from "react-redux";
import ViewTable from "./ViewTable";
import { Button, Select, MenuItem } from "@material-ui/core";
import { filterVehicleEq, sortVehicles } from "../../../Redux/rentAction";

class ViewAllVehicles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all",
      lesserThan: "all",
      greaterThan: "all",
      available: "all",
      isSorted: true,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.props.filterDataEQ(name, value);
    this.setState({
      [name]: value,
    });
  };

  handleSort = (...e) => {
    const [fieldName, isNumber] = e;
    let { isSorted } = this.state;
    let { sortCost } = this.props;
    if (isSorted) {
      sortCost(fieldName, "DECENDING", isNumber);
    } else {
      sortCost(fieldName, "ASCENDING", isNumber);
    }
    this.setState({
      isSorted: !this.state.isSorted,
    });
  };

  render() {
    const { category, lesserThan, greaterThan, available } = this.state;
    return (
      <React.Fragment>
        <h5>Filters</h5>
        <Select
          onChange={this.handleChange}
          name="available"
          variant="outlined"
          value={available}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={false}>Not Available</MenuItem>
          <MenuItem value={true}>Available</MenuItem>
        </Select>
        <Select
          onChange={this.handleChange}
          name="category"
          variant="outlined"
          value={category}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"car"}>Car</MenuItem>
          <MenuItem value={"bike"}>Bike</MenuItem>
        </Select>
        <div>
          <h5 style={{ color: "red", fontWeight: "700" }}>
            Click on the Table header to sort in both Ascending and Descending
            order And click on the Model name to View and Update the respective
            Vehicle.
          </h5>
        </div>
        {/* <Select
          onChange={this.handleChange}
          name="lesserThan"
          variant="outlined"
          value={lesserThan}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"car"}>Ca2r</MenuItem>
          <MenuItem value={"bike"}>Bi2ke</MenuItem>
        </Select>
        <Select
          onChange={this.handleChange}
          name="greaterThan"
          variant="outlined"
          value={greaterThan}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"car"}>Ca2r</MenuItem>
          <MenuItem value={"bike"}>Bike</MenuItem>
        </Select> */}
        <ViewTable handleSort={this.handleSort} {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.rent.filteredData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    filterDataEQ: (category, value) =>
      dispatch(filterVehicleEq(category, value)),
    sortCost: (category, sortType, isNumber) =>
      dispatch(sortVehicles(category, sortType, isNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllVehicles);
