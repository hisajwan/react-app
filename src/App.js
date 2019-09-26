import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
// import Login from "./components/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./screens/home";
import AboutUs from "./screens/aboutUs";
import ContactUs from "./screens/contactUs";
import Fortnite from "./screens/fortnite";
import Login from "./screens/login";
import MapContainer from "./screens/mapContainter";
function App() {
  return (
    <React.Fragment>
      {/* <Login /> */}
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/fortnite" component={Fortnite} />
          <Route path="/login" component={Login} />
          <Route path="/map" component={MapContainer} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
