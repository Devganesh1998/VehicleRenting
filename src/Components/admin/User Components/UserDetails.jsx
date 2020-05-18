import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Descriptions } from "antd";
import UserCard from "./UserCard";
import styles from "../../Comp.module.css";

const UserDetails = (props) => {
  let { users, match } = props;
  let UserData = users.find((user) => {
    return user.userId === match.params.id;
  });
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
          {UserData.history.map((item, index) => {
            return <UserCard item={item} />;
          })}
        </div>
      </div>
      <div style={{ margin: "30px 0" }}>
        <Link to="/admin/allUsers">
          <Button variant="contained" color="primary">
            Go back
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  users: state.user.user_data,
});

export default connect(mapStateToProps)(UserDetails);
