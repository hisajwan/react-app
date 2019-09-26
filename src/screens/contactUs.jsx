import React, { useState, useEffect } from "react";

function ContactUs() {
  useEffect(() => {}, []);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    description: ""
  });
  const handleForm = event => {
    event.preventDefault();
    console.log("form", formValues);
  };

  const updateState = event => {
    event.preventDefault();
    console.log(event.target.name, event.target.value);
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <React.Fragment>
      <div className="contact-us container-screen">
        <div className="background"></div>
        <div className="overlay"></div>
        <main className="p-3">
          <form className="w-100" onSubmit={event => handleForm(event)}>
            <input
              name="firstName"
              className="form-control"
              type="text"
              placeholder="Firstname"
              value={formValues.firstName}
              onChange={e => updateState(e)}
            />
            <input
              name="lastName"
              className="form-control"
              type="text"
              placeholder="Lastname"
              value={formValues.lastName}
              onChange={e => updateState(e)}
            />
            <input
              name="mobile"
              className="form-control"
              type="number"
              placeholder="9999999999"
              value={formValues.mobile}
              onChange={e => updateState(e)}
            />
            <input
              name="email"
              className="form-control"
              type="email"
              placeholder="xyz@abc.com"
              value={formValues.email}
              onChange={e => updateState(e)}
            />
            <textarea
              name="description"
              className="form-control"
              type="text"
              placeholder="xyz@abc.com"
              value={formValues.description}
              onChange={e => updateState(e)}
            />
            <input className="btn btn-primary" type="submit" value="submit" />
          </form>
          <div className="position-relative"></div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default ContactUs;
