import React, { useState, useEffect } from "react";

function ContactUs() {
  useEffect(() => {}, []);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [email, setEmail] = useState("");
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

  return (
    <React.Fragment>
      <div className="contact-us container-screen">
        <div className="background"></div>
        <div className="overlay"></div>
        <main className="p-3">
          <form className="w-100" onSubmit={event => handleForm(event)}>
            <input
              className="form-control"
              type="text"
              placeholder="Firstname"
              value={formValues.firstName}
              onChange={event => {
                const firstName = event.target.value;
                const updatedFormValue = { ...formValues, firstName };
                setFormValues(updatedFormValue);
              }}
            />
            <input
              className="form-control"
              type="text"
              placeholder="Lastname"
              value={formValues.lastName}
              onChange={event => {
                const lastName = event.target.value;
                const updatedFormValue = { ...formValues, lastName };
                setFormValues(updatedFormValue);
              }}
            />
            <input
              className="form-control"
              type="number"
              placeholder="9999999999"
              value={formValues.mobile}
              onChange={event => {
                const mobile = event.target.value;
                const updatedFormValue = { ...formValues, mobile };
                setFormValues(updatedFormValue);
              }}
            />
            <input
              className="form-control"
              type="email"
              placeholder="xyz@abc.com"
              value={formValues.email}
              onChange={event => {
                const email = event.target.value;
                const updatedFormValue = { ...formValues, email };
                setFormValues(updatedFormValue);
              }}
            />
            <textarea
              className="form-control"
              type="text"
              placeholder="xyz@abc.com"
              value={formValues.description}
              onChange={event => {
                const description = event.target.value;
                const updatedFormValue = { ...formValues, description };
                setFormValues(updatedFormValue);
              }}
            />
            <input className="btn btn-primary" type="submit" value="submit" />
          </form>
        </main>
      </div>
    </React.Fragment>
  );
}

export default ContactUs;
