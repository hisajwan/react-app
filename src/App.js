import React, { Suspense } from "react";
import "./App.scss";
import { HashRouter as Router } from "react-router-dom";
import Nav from "./components/nav";
import Routes from "./routes";
import FloatRight from "./components/floatRight";
function App() {
  return (
    <React.Fragment>
      <Router basename="">
        <Nav />
        {/* For lazy loading */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </Router>
      <FloatRight />
    </React.Fragment>
  );
}

export default App;
