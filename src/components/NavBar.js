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
            <NavItem>
              <NavLink>
                <Link to="/login">Log In</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <Link to="/signup">Sign Up</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
