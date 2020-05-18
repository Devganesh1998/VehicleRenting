import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import styles from "../Components/Comp.module.css";

export default (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="dark" dark expand="md" className={styles.navBar}>
      <NavbarBrand>
        <Link to="/">
          <img
            src="https://cutewallpaper.org/21/venum-wallpaper-mma/Venum-Logo-9000+-Logo-Design-Ideas.jpg"
            alt="Logo"
          />
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className={`mr-auto ${styles.navItems}`} navbar>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <AuthButtons {...props} />
        </Nav>
      </Collapse>
    </Navbar>
  );
};
