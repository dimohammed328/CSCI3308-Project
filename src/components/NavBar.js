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

import cookie from "react-cookies";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout() {
    cookie.remove("lyricraceUser");
    cookie.remove("sessionID");
    this.props.updateState({ username: "", sessionID: "", user: false });
    window.location = "/";
  }
  render() {
    if (!this.props.state.user || !this.props.state.username) {
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
    } else {
      return (
        <div>
          <Navbar className="navBar">
            <NavbarBrand className="navBrand" href="/">
              LyricRace
            </NavbarBrand>
            <Nav>
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
              <UncontrolledDropdown nav inNavbar className="navItem">
                <DropdownToggle nav caret className="link">
                  Logged in as: {this.props.state.username}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.onLogout}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Navbar>
        </div>
      );
    }
  }
}
