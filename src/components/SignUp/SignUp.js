/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

function Sign_up({ users, newUser = (f) => f }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailCheck = /[\w\.]+@[\w\.]+\.[\w+]{2,4}/gi;
    const passCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g;
    const loggedIn = users.find((target) => target.email === email);
    if (!loggedIn) {
      if (!emailCheck.test(email)) {
        setEmailError("Invalid Email");
      } else {
        setEmailError("");
      }
      if (!passCheck.test(password)) {
        setPasswordError("Invalid pass");
        return;
      } else {
        setPasswordError("");
      }
      newUser(name, email, password);
      alert("signed up successfully");
    } else {
      setEmailError("email already exists ! please sign in ");
      return;
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form action="#" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <FaFacebookF />
          </a>
          <a href="#" className="social">
            <FaGoogle />
          </a>
          <a href="#" className="social">
            <FaLinkedinIn />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          min={5}
          max={15}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p className="error-badge">{emailError}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        {passwordError && <p className="error-badge">{passwordError}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Sign_up;
