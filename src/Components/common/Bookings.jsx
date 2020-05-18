import React from "react";
import { connect } from "react-redux";
import UserCard from "../admin/User Components/UserCard";
import styles from "../Comp.module.css";
import { Link } from "react-router-dom";

const Bookings = (props) => {
  const { bookings } = props;
  return (
    <div style={{ margin: "5vh 0" }}>
      <h3 style={{ color: "red" }}>
        Click on the vehicle ID to view which vehicle has been booked
      </h3>
      <div className={styles.cardContainer}>
        {bookings.length === 0 ? (
          <div style={{ textAlign: "center", height: "20vh" }}>
            <h5>There are no bookings made...</h5>
            <Link to="/">
              <h5 style={{ color: "blue", textDecoration: "underline" }}>
                Click here to book Vehicles Now!!
              </h5>
            </Link>
          </div>
        ) : (
          bookings.map((bill) => {
            return <UserCard item={bill} />;
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookings: state.user.currentUser.history,
});

export default connect(mapStateToProps)(Bookings);
