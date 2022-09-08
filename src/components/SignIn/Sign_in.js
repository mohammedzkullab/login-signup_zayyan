/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

function Sign_In({ users }) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailCheck = /[\w\.]+@[\w\.]+\.[\w+]{2,4}/gi;
    if (!emailCheck.test(email)) {
      setEmailError("Invalid Email");
    } else {
      setEmailError("");
    }
    const passCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g;
    if (!passCheck.test(password)) {
      setPassError("Invalid pass");
    } else {
      setPassError("");
    }
    const login = users.find((target) => target.email === email);
    if (login) {
      const passSuccess = login.password === password;
      if (passSuccess) {
        localStorage.setItem("email", email.toString());
        localStorage.setItem("password", password.toString());
        alert("user is successfully logged in ");
        setEmail("");
        setpassword("");
        setEmailError("");
        setPassError("");
      } else {
        setPassError("password is not correct");
      }
    } else {
      setEmailError("Email doesn't exist! please sign up");
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form action="#" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
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
        <span>or use your account</span>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p className="error-badge">{emailError}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        {passError && <p className="error-badge">{passError}</p>}
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Sign_In;
