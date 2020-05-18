import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../Comp.module.css";

export default (props) => {
  return (
    <div style={{ height: "115vh" }}>
      <div className={styles.bgimage}></div>
      <div className={styles.adminbtns}>
        <div>
          <h5>Admin has authority to add new Vehicle</h5>
          <Link to={`${props.match.url}/addVehicle`}>
            <Button variant="contained" color="primary">
              Add New Vehicle
            </Button>
          </Link>
        </div>
        <div>
          <h5>
            Admin can view all the Vehicles and can also able to Update the
            details of Each Vehicle is he/she insist
          </h5>
          <Link to={`${props.match.url}/allVehicles`}>
            <Button variant="contained" color="primary">
              View All Vehicles
            </Button>
          </Link>
        </div>
        <div>
          <h5>
            Admin is authorized to view all the details of Users and can also
            View their history of bookings
          </h5>
          <Link to={`${props.match.url}/allUsers`}>
            <Button variant="contained" color="primary">
              View All Users
            </Button>
          </Link>
        </div>
        <div>
          <h5>
            Admin can view and monitor all the bookings and can inspect which
            user booked which Vehicle with each unique ID
          </h5>
          <Link to={`${props.match.url}/allBookings`}>
            <Button variant="contained" color="primary">
              View All Bookings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
