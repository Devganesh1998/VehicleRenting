import React from "react";
import { connect } from "react-redux";
import { TextField, Button, Select, MenuItem } from "@material-ui/core";
import { updateVehicle } from "../../../Redux/rentAction";
import { Link } from "react-router-dom";
import styles from "../../Comp.module.css";

class UpdateVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_name: "",
      company: "",
      category: "",
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

  componentDidMount() {
    let data = this.props.vehicles[this.props.match.params.id];
    this.setState({
      modal_name: data.modal_name,
      company: data.company,
      category: data.category,
      cost: {
        per_day: data.cost.per_day,
        after_5: data.cost.after_5,
        after_10: data.cost.after_10,
      },
      location: data.location,
      vehicle_no: data.vehicle_no,
      available: data.available,
      img_url: data.img_url,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
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

  submit = () => {
    this.props.updateVehicle(this.state, this.props.match.params.id);
    alert("Vehicle Updated");
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
        <form className={styles.AddVehicle}>
          <h2>Update Vehicle</h2>
          <div className={styles.Addform}>
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
            <Select
              onChange={this.handleChange}
              name="available"
              variant="outlined"
              value={available}
            >
              <MenuItem value={true}>Available</MenuItem>
              <MenuItem value={false}>Not Available</MenuItem>
            </Select>
            <Select
              onChange={this.handleChange}
              name="category"
              variant="outlined"
              value={category}
            >
              <MenuItem value={"bike"}>Bike</MenuItem>
              <MenuItem value={"car"}>Car</MenuItem>
            </Select>
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
          </div>
          <div className={styles.Addbtns}>
            <Button onClick={this.submit} variant="outlined" color="primary">
              Update Vehicle
            </Button>
            <Link to={`/admin/allVehicles/${this.props.match.params.id}`}>
              <Button variant="outlined" color="primary">
                Go back
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="outlined" color="primary">
                Admin Page
              </Button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  vehicles: state.rent.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateVehicle: (data, id) => dispatch(updateVehicle(data, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateVehicle);
