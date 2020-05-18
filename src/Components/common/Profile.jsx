import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Descriptions } from "antd";
import UserCard from "../admin/User Components/UserCard";
import styles from "../Comp.module.css";

const Profile = (props) => {
  let { CurrentUser } = props;
  let UserData = CurrentUser;
  return (
    <React.Fragment>
      <div
        style={{
          fontWeight: "700",
          width: "80vw",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        <Descriptions title={`${UserData.name} Info`} bordered>
          <Descriptions.Item label="User ID">
            {UserData.userId}
          </Descriptions.Item>
          <Descriptions.Item label="Name">{UserData.name}</Descriptions.Item>
          <Descriptions.Item label="Age">{UserData.age}</Descriptions.Item>
          <Descriptions.Item label="Email">{UserData.email}</Descriptions.Item>
          <Descriptions.Item label="Phone Number">
            {UserData.mobile}
          </Descriptions.Item>
          <Descriptions.Item label="Password">
            {UserData.password}
          </Descriptions.Item>
          <Descriptions.Item label="Lisence ID">
            {UserData.lisenceId}
          </Descriptions.Item>
        </Descriptions>
      </div>
      <div>
        <h3>History</h3>
        <h3 style={{ color: "red" }}>
          Click on the vehicle ID to view which vehicle has been booked
        </h3>
        <div className={styles.cardContainer}>
          {UserData.history.length === 0 ? (
            <div style={{ textAlign: "center" }}>
              <h5>There are no bookings made...</h5>
              <Link to="/">
                <h5 style={{ color: "blue", textDecoration: "underline" }}>
                  Click here to book Vehicles Now!!
                </h5>
              </Link>
            </div>
          ) : (
            UserData.history.map((item) => {
              return <UserCard item={item} />;
            })
          )}
        </div>
      </div>
      <div style={{ margin: "30px 0" }}>
        <Link to="/">
          <Button variant="contained" color="primary">
            Home
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  CurrentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Profile);
