import React, { useState } from "react";
import "./index.css";

export default function App() {
  // give an initial state, an object, and have 3 values
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleFirstNameInputChange = (event) => {
    event.persist(); // 如果在react中想异步访问事件属性（如在setTimeout内），应该在是处理事件时调用event.persist()，这会从事件池中移除该合成函数并允许对该合成事件的引用被保留下来。access the event properties in an asynchronous way
    setValues((values) => ({
      ...values, // copy the old values by doing the spread operator
      firstName: event.target.value, // firstName is going to be equal to event.target.value.
    }));
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // event.preventDefault will stop the refresh from happening that we've been seeing.
    if (values.firstName && values.lastName && values.email) setVerified(true);
    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          values={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName && (
          <span id="first-name-error">Please enter a first name</span>
        )}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          values={values.lastName}
          onChange={handleLastNameInputChange}
        />
        {submitted && !values.lastName && (
          <span id="last-name-error">Please enter a last name</span>
        )}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          values={values.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
      {/* pretend that we've called a server or an end point somewhere. And it's come back with a success message */}
      {submitted && verified && (
        <div class="success-message">Success! Thank you for registering!</div>
      )}
    </div>
  );
}
