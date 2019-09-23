import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light d-flex justify-content-start">
        <Link to="/">
          <li className="navbar-brand">Home</li>
        </Link>
        <Link to="aboutUs">
          <li className="navbar-brand">About us</li>
        </Link>
        <Link to="contactUs">
          <li className="navbar-brand">Contact us</li>
        </Link>
        <Link to="fortnite">
          <li className="navbar-brand">Fortnite</li>
        </Link>
      </nav>
    );
  }
}

export default Nav;
