import React, { useState, useEffect } from "react";
import auth from "../auth/auth";
const Login = props => {
  useEffect(() => {}, []);
  const [userError, setUserError] = useState({
    value: "",
    state: false
  });
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const login = e => {
    e.preventDefault();
    console.log("sdfa");
    let authStatus = auth.login(() => {
      console.log("dfa");
      props.history.push("/protected/sidebar");
    }, formData);
    if (authStatus !== undefined) {
      setUserError({ value: "", state: false });
    } else {
      setUserError({ value: "Invalid login credentials", state: true });
    }
  };
  const updateForm = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getUserError = () => {
    if (userError.state) {
      return <span className="text-warning">{userError.value}</span>;
    }
  };

  return (
    <div className="login container-screen p-3 d-flex justify-content-center align-items-center">
      <form
        onSubmit={e => login(e)}
        className="p-2 d-flex flex-column justify-content-center align-items-start shadow"
      >
        {getUserError()}
        <label htmlFor="username" className="px-2 pt-2">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          className="m-2"
          value={formData.username}
          onChange={e => updateForm(e)}
        />
        <label htmlFor="password" className="px-2 pt-2">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="m-2"
          value={formData.password}
          onChange={e => updateForm(e)}
        />
        <input type="submit" className="btn btn-info m-2" />
      </form>
      {/* <div>{props.incDec}</div> */}
    </div>
  );
};

export default Login;
