import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { booking_data } from "../../Redux/userAction";
import ISLoader from "./Isloader";
import swal from "sweetalert";
import { Select, Descriptions, DatePicker } from "antd";
import styles from "../Comp.module.css";
import { Button } from "@material-ui/core";

function Booking(props) {
  const { Option } = Select;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [destination, setDestination] = useState(0);

  let dt = new Date();
  let dateNow = dt.getUTCDate();
  let year = dt.getUTCFullYear();
  let month = dt.getUTCMonth();
  month = month + 1;

  const [loading, setLoading] = useState(false);
  const [direct, setdirect] = useState(false);
  let name = props.match.params.name;
  let vehicle = props.data.find((ele) => {
    return ele.modal_name === name;
  });

  const clickHandler = () => {
    if (start.length > 0 && end.length > 0 && destination.length > 0) {
      props.booking_data(start, end, destination, vehicle);
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setdirect(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      swal("All Fields Are Required");
    }
  };

  const handleChange = (value) => {
    setDestination(value);
  };

  const SetStartDate = (...value) => {
    setStart(value[1]);
  };

  const SetEndDate = (...value) => {
    setEnd(value[1]);
  };

  const { is_auth, currentUser } = props;

  if (!is_auth) {
    return <Redirect to="/login" />;
  }

  if (loading) {
    return <ISLoader />;
  } else if (direct) {
    return <Redirect to={`${props.match.url}/pay`} />;
  } else {
    let vehicleType = "Car";
    const destination = "destination";
    if (vehicle.category === "bike") {
      vehicleType = "Bike";
    }
    return (
      <div style={{ minHeight: "90vh" }}>
        <h3 style={{ marginTop: "20px" }}>Welcome {currentUser.name}</h3>
        <div className={styles.description}>
          <img
            src={vehicle.img_url}
            alt="VehicleImg"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          />
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <Descriptions title={`${vehicleType} Info`} bordered>
              <Descriptions.Item label="Company">
                {vehicle.company}
              </Descriptions.Item>
              <Descriptions.Item label="Model Name">
                {vehicle.modal_name}
              </Descriptions.Item>
              <Descriptions.Item label="Location">
                {vehicle.location}
              </Descriptions.Item>
              <Descriptions.Item label="Cost per Day">
                {vehicle.cost.per_day}
              </Descriptions.Item>
              <Descriptions.Item label="Cost after 5 Days">
                {vehicle.cost.after_5}
              </Descriptions.Item>
              <Descriptions.Item label="Cost after 10 Days">
                {vehicle.cost.after_10}
              </Descriptions.Item>
              <Descriptions.Item label="Vehicle Number">
                {vehicle.vehicle_no}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>
        <div
          style={{ margin: "30px 0" }}
          data-aos="fade-up"
          data-aos-offset="120"
          data-aos-delay="800"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <h5 style={{ margin: "30px 0" }}>Fill to Get Payment Details</h5>
          <div className={styles.dateSelectors}>
            <Select
              defaultValue="disabled"
              style={{ width: "180px" }}
              size="large"
              onChange={handleChange}
            >
              <Option value="disabled" disabled>
                Select Destination
              </Option>
              <Option value="chennai">Chennai</Option>
              <Option value="trichy">Trichy</Option>
              <Option value="bangalore">Bangalore</Option>
              <Option value="hyderabad">Hyderabad</Option>
            </Select>
            <div>
              <h6>Start Date :</h6>
              <DatePicker size="large" onChange={SetStartDate} />
            </div>
            <div>
              <h6>End Date :</h6>
              <DatePicker size="large" onChange={SetEndDate} />
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "20px 0" }}
            onClick={clickHandler}
          >
            Get Pay Details
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.rent.data,
  is_auth: state.user.isauth,
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  booking_data: (start, end, destination, vehicle) =>
    dispatch(booking_data(start, end, destination, vehicle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
