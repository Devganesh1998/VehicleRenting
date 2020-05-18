import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default (props) => {
  const { isauth, logout } = props;
  if (isauth) {
    return (
      <React.Fragment>
        <NavItem>
          <Link to="/bookings">Bookings</Link>
        </NavItem>
        <NavItem>
          <Link to="/profile">Profile</Link>
        </NavItem>
        <NavItem>
          <Link to="/admin">Admin</Link>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Admin actions
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <Link to="/admin/addVehicle">Add New Vehicle</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/admin/allVehicles">View All Vehicles</Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <Link to="/admin/allUsers">View All Active Users</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/admin/allBookings">View All Bookings</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <Link to="/">
            <Button variant="contained" color="primary" onClick={logout}>
              Log Out
            </Button>
          </Link>
        </NavItem>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <NavItem>
          <Link to="/register">Register</Link>
        </NavItem>
        <NavItem>
          <Link to="/login">Login</Link>
        </NavItem>
      </React.Fragment>
    );
  }
};
