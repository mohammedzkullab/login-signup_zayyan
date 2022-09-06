import React, { useState, useEffect, useRef } from "react";

import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

function Sign_up() {
  const handleSubmit = () => {};

  return (
    <div class="form-container sign-up-container">
      <form action="#" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
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
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          placeholder="Name"
          //   value={inputs.name}
          //   onChange={handleChange}
          // ref={refName}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          //   value={inputs.email}
          //   onChange={handleChange}
          // ref={refEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          //   value={inputs.password}
          //   onChange={handleChange}
          // ref={refPass}
        />
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
}

export default Sign_up;
