import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../actions/inc_dec_action";
import auth from "../auth/auth";
class Nav extends Component {
  login = () => {
    auth.login(() => {
      this.props.history.push("/login");
    });
  };

  logout = () => {
    auth.logout(() => {
      this.props.history.push("/login");
    }, {});
  };

  getSessionButton = () => {
    if (!auth.isAuthenticated()) {
      return (
        <li
          style={{ cursor: "pointer" }}
          onClick={this.login}
          className="navbar-brand"
        >
          Login
        </li>
      );
    } else {
      return (
        <li
          style={{ cursor: "pointer" }}
          onClick={this.logout}
          className="navbar-brand"
        >
          Logout
        </li>
      );
    }
  };

  render() {
    return (
      <nav className="navbar fixed-top navbar-dark bg-dark d-flex justify-content-between">
        <div>
          <button
            onClick={this.props.incrementAction}
            className="btn btn-primary"
          >
            +
          </button>
          <button
            onClick={this.props.decrementAction}
            className="btn btn-warning mx-2"
          >
            -
          </button>
          <Link to="/">
            <li className="navbar-brand">Home</li>
          </Link>
          <Link to="/aboutUs">
            <li className="navbar-brand">About us</li>
          </Link>
          <Link to="/contactUs">
            <li className="navbar-brand">Contact us</li>
          </Link>
        </div>
        <div>{this.getSessionButton()}</div>
      </nav>
    );
  }
}

Nav.propTypes = {
  incrementAction: PropTypes.func.isRequired,
  decrementAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  incrementAction: () => dispatch(incrementAction()),
  decrementAction: () => dispatch(decrementAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Nav));
