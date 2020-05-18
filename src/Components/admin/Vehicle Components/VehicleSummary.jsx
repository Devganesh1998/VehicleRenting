import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Descriptions } from "antd";
import styles from "../../Comp.module.css";

const VehicleSummary = (props) => {
  let { data, match } = props;
  let VehicleData = data.find((vehicle) => {
    return vehicle.id == match.params.id;
  });
  let vehicleType = "Car";
  if (VehicleData.category === "bike") {
    vehicleType = "Bike";
  }
  return (
    <div style={{ minHeight: "60vh" }}>
      <div className={styles.description}>
        <img src={VehicleData.img_url} alt="VehicleImg" />
        <div>
          <Descriptions title={`${vehicleType} Info`} bordered>
            <Descriptions.Item label="Vehicle ID">
              {VehicleData.id}
            </Descriptions.Item>
            <Descriptions.Item label="Availability">
              {VehicleData.available ? "Available" : "Not Available"}
            </Descriptions.Item>
            <Descriptions.Item label="Company">
              {VehicleData.company}
            </Descriptions.Item>
            <Descriptions.Item label="Model Name">
              {VehicleData.modal_name}
            </Descriptions.Item>
            <Descriptions.Item label="Category">
              {VehicleData.category}
            </Descriptions.Item>
            <Descriptions.Item label="Location">
              {VehicleData.location}
            </Descriptions.Item>
            <Descriptions.Item label="Cost per Day">
              {VehicleData.cost.per_day}
            </Descriptions.Item>
            <Descriptions.Item label="Cost after 5 Days">
              {VehicleData.cost.after_5}
            </Descriptions.Item>
            <Descriptions.Item label="Cost after 10 Days">
              {VehicleData.cost.after_10}
            </Descriptions.Item>
            <Descriptions.Item label="Vehicle Number">
              {VehicleData.vehicle_no}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
      <div className={styles.Addbtns}>
        <Link to={`${match.url}/updateVehicle`}>
          <Button variant="contained" color="primary">
            Update Vehicle
          </Button>
        </Link>
        <Link to="/admin/allVehicles">
          <Button variant="contained" color="primary">
            Go back
          </Button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.rent.data,
});

export default connect(mapStateToProps)(VehicleSummary);
