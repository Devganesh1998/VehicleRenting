import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addVehicle } from "../../Redux/rentAction";
import { connect } from "react-redux";
import { TextField, Button, Select, MenuItem } from "@material-ui/core";

class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_name: "",
      company: "",
      category: "bike",
      cost: {
        per_day: "",
        after_5: "",
        after_10: "",
      },
      location: "",
      vehicle_no: "",
      available: true,
      img_url: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = () => {
    this.props.addVehicle(this.state);
    alert("Vehicle Added");
    this.reseting();
  };

  reseting = () => {
    this.setState({
      modal_name: "",
      company: "",
      category: "bike",
      cost: {
        per_day: "",
        after_5: "",
        after_10: "",
      },
      location: "",
      vehicle_no: "",
      available: true,
      img_url: "",
    });
  };

  costDataUpdate = (event) => {
    this.setState({
      cost: {
        ...this.state.cost,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    const {
      company,
      category,
      location,
      cost,
      modal_name,
      available,
      vehicle_no,
      img_url,
    } = this.state;
    return (
      <div>
        <form>
          <h2>Add New Vehicle</h2>
          <TextField
            onChange={this.handleChange}
            name="img_url"
            label="Vehicle image URL"
            variant="outlined"
            value={img_url}
          />
          <TextField
            onChange={this.handleChange}
            name="modal_name"
            label="Model Name"
            variant="outlined"
            value={modal_name}
          />
          <TextField
            onChange={this.handleChange}
            name="company"
            label="Company"
            variant="outlined"
            value={company}
          />
          <h3>Availability :</h3>
          <Select
            onChange={this.handleChange}
            name="available"
            variant="outlined"
            value={available}
          >
            <MenuItem value={true}>Available</MenuItem>
            <MenuItem value={false}>Not Available</MenuItem>
          </Select>
          <h3>Vehicle type</h3>
          <Select
            onChange={this.handleChange}
            name="category"
            variant="outlined"
            value={category}
          >
            <MenuItem value={"bike"}>Bike</MenuItem>
            <MenuItem value={"car"}>Car</MenuItem>
          </Select>
          <h3>Cost :</h3>
          <TextField
            onChange={this.costDataUpdate}
            name="per_day"
            label="Cost per Day"
            variant="outlined"
            type="Number"
            value={cost.per_day}
          />
          <TextField
            onChange={this.costDataUpdate}
            name="after_5"
            label="Cost after 5-days"
            variant="outlined"
            type="Number"
            value={cost.after_5}
          />
          <TextField
            onChange={this.costDataUpdate}
            name="after_10"
            label="Cost after 10-days"
            variant="outlined"
            type="Number"
            value={cost.after_10}
          />
          <TextField
            onChange={this.handleChange}
            name="location"
            label="location"
            variant="outlined"
            value={location}
          />
          <TextField
            onChange={this.handleChange}
            name="vehicle_no"
            label="Vehicle Number"
            variant="outlined"
            value={vehicle_no}
          />
          <Button onClick={this.submit} variant="outlined" color="primary">
            Add Vehicle
          </Button>
          <Button variant="outlined" color="primary">
            <Link to="/allVehicles">View All Vehicles</Link>
          </Button>
          <Button variant="outlined" color="primary">
            <Link to="/">Home Page</Link>
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.rent.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addVehicle: (vehicle) => dispatch(addVehicle(vehicle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddVehicle);
