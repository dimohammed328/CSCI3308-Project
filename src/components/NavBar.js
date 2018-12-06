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
              <NavLink>
                <Link to="/login" className="link">
                  Log In
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink>
                <Link to="/signup" className="link">
                  Sign Up
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink>
                <Link to="/songselection" className="link">
                  Song Selection
                </Link>
                        </NavLink>
            </NavItem>
             <NavItem className="navItem">
              <NavLink>
                <Link to="/leaderboard" className="link">
                  Leaderboard
                </Link>
              </NavLink>
            </NavItem>		
          </Nav>
        </Navbar>
      </div>
    );
  }
}
