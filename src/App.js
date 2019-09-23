import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
// import Login from "./components/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import Fortnite from "./components/fortnite";
function App() {
  return (
    <React.Fragment>
      {/* <Login /> */}
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutUs" component={ContactUs} />
          <Route path="/contactUs" component={AboutUs} />
          <Route path="/fortnite" component={Fortnite} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
