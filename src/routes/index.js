import React, { lazy } from "react";
// import Home from "../screens/home";
import AboutUs from "../screens/aboutUs";
import ContactUs from "../screens/contactUs";
import Fortnite from "../screens/fortnite";
import Login from "../screens/login";
import MapContainer from "../screens/mapContainter";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../screens/sidebar";
import { ProtectedRoute } from "../protected/protected.route";
const Home = lazy(() => import("../screens/home"));
const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/fortnite" component={Fortnite} />
        <Route path="/login" component={Login} />
        <Route path="/map" component={MapContainer} />
        <ProtectedRoute path="/protected/sidebar" component={Sidebar} />
        <Route
          path="**"
          exact
          component={() => (
            <div class="h1 container-screen d-flex justify-content-center align-items-center">
              404 NOT FOUND
            </div>
          )}
        />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
