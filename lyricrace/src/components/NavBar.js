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
              <NavLink href="/login">Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
