import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import React, { Component } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="navBar">
          <NavbarBrand className="navBrand" href="/">
            LyricRace
          </NavbarBrand>
          <Nav>
            <NavItem className="navItem">
              <Link to="/login" className="link">
                Log In
              </Link>
            </NavItem>
            <NavItem className="navItem">
              <Link to="/signup" className="link">
                Sign Up
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
