import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
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
            <NavItem className="navItem">
              <Link to="/leaderboard" className="link">
                Leaderboard
              </Link>
            </NavItem>
            <NavItem className="navItem">
              <Link to="/songselection" className="link">
                Song Selection
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
