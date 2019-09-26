import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../actions";
function Home(props) {
  // const style = {
  //   cursor: "pointer",
  //   width: "max-content",
  //   top: 0
  // };
  // const counter = useSelector(state => state.counter);
  // const dispatch = useDispatch();
  const [redirectToMap, setredirectToMap] = useState(false);
  window.addEventListener("message", function(e) {
    window.alert("postMessage", e);
  });

  const handleClick = () => {
    setredirectToMap(true);
    // props.history.push("/aboutUs");
  };
  if (redirectToMap) {
    return <Redirect to="map"></Redirect>;
  }
  return (
    <div className="container-screen home position-relative">
      <div className="background"></div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          color: "white",
          padding: "40px"
        }}
        className="position-absolute pull-right"
      >
        <u
          style={{
            cursor: "pointer"
          }}
          onClick={() => handleClick()}
        >
          See our locations on map
        </u>
      </div>
      {/* <div style={style} className="position-absolute">
        <div>Counter {counter}</div>
        <div>
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-warning"
          >
            +
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-warning"
          >
            -
          </button>
        </div>
        <u onClick={handleClick}>About us</u>
      </div> */}
    </div>
  );
}

export default withRouter(Home);
