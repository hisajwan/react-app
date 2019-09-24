import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar fixed-top navbar-dark bg-dark d-flex justify-content-between">
        <div>
          <Link to="/">
            <li className="navbar-brand">Home</li>
          </Link>
          <Link to="aboutUs">
            <li className="navbar-brand">About us</li>
          </Link>
          <Link to="contactUs">
            <li className="navbar-brand">Contact us</li>
          </Link>
        </div>
        <Link to="login">
          <li className="navbar-brand">Login</li>
        </Link>
      </nav>
    );
  }
}

export default Nav;
