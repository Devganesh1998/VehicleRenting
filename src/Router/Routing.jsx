import React, { Component } from "react";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Carousel } from "antd";
import Home from "../Components/common/Home";
import Profile from "../Components/common/Profile";
import Booking from "../Components/common/Booking";
import Bookings from "../Components/common/Bookings";
import Payment from "../Components/common/Payment";
import Register from "../Components/auth/register";
import Login from "../Components/auth/login";
import { logout } from "../Redux/userAction";
import Admin from "../Components/admin/Admin";
import styles from "../Components/Comp.module.css";
import AddVehicle from "../Components/admin/Vehicle Components/AddVehicle";
import ViewAllVehicles from "../Components/admin/Vehicle Components/ViewAllVehicles";
import VehicleSummary from "../Components/admin/Vehicle Components/VehicleSummary";
import UpdateVehicle from "../Components/admin/Vehicle Components/UpdateVehicle";
import ViewAllUsers from "../Components/admin/User Components/ViewAllUsers";
import UserDetails from "../Components/admin/User Components/UserDetails";
import ViewAllBookings from "../Components/admin/User Components/ViewAllBookings";

class Routing extends Component {
  change = (e) => {
    e.target.style.background = "red";
  };

  render() {
    const { isauth } = this.props;
    return (
      <React.Fragment>
        <Carousel autoplay className={styles.carousel}>
          <img
            src="https://www.fatbit.com/fab/wp-content/uploads/2018/09/Feature-Analysis-P2P-Car-Renting-Marketplace-Main-Img.png"
            alt="1"
          />
          <img
            src="https://gritdaily.com/wp-content/uploads/2018/09/19588717540_9d9224d888_b.jpg"
            alt="2"
          />
          <img
            src="http://www.realcarrentals.com/wp-content/uploads/2017/11/car-renting-process.jpeg"
            alt="3"
          />
          <img
            src="https://www.collisonvehiclerental.co.uk/wp-content/uploads/2019/05/Off-road-car.jpg"
            alt="4"
          />
          <img
            src="https://content.skyscnr.com/m/46e5fd3d70838cf2/original/GettyImages-86496717.jpg"
            alt="5"
          />
        </Carousel>
        <NavBar {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" render={(props) => <Register {...props} />} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/admin" exact render={(props) => <Admin {...props} />} />
          <Route
            path="/admin/addVehicle"
            exact
            render={(props) => <AddVehicle {...props} />}
          />
          <Route
            path="/admin/allVehicles"
            exact
            render={(props) => <ViewAllVehicles {...props} />}
          />
          <Route
            path="/admin/allVehicles/:id"
            exact
            render={(props) => <VehicleSummary {...props} />}
          />
          <Route
            path="/admin/allVehicles/:id/updateVehicle"
            render={(props) => <UpdateVehicle {...props} />}
          />
          <Route path="/admin/allUsers" exact component={ViewAllUsers} />
          <Route
            path="/admin/allUsers/:id"
            exact
            render={(props) => <UserDetails {...props} />}
          />
          <Route path="/admin/allBookings" exact component={ViewAllBookings} />
          <Route exact path="/bookings" component={Bookings} />
          <Route exact path="/profile" component={Profile} />
          <Route
            exact
            path="/booking/:name"
            render={(props) => <Booking {...props} />}
          />
          <Route
            path="/booking/:name/pay"
            render={(props) => <Payment {...props} />}
          />
          <Route render={() => <h3>404 Page Not Fount</h3>} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isauth: state.user.isauth,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routing);
