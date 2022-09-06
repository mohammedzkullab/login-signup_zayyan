import React from "react";

import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const handleSubmit = () => {};
function Sign_in() {
  return (
    <div class="form-container sign-in-container">
      <form action="#" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <div class="social-container">
          <a href="#" class="social">
            <FaFacebookF />
          </a>
          <a href="#" class="social">
            <FaGoogle />
          </a>
          <a href="#" class="social">
            <FaLinkedinIn />
          </a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  );
}

export default Sign_in;
