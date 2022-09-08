import React, { useEffect, useState } from "react";
import Sign_In from "../SignIn/Sign_in";
import SignUp from "../SignUp/SignUp";
import data from "../../data.json";
import { v4 } from "uuid";
import "./Form.css";

function Form() {
  const [users, setUsers] = useState(data);
  const addUser = (name, email, password) => {
    console.log("users", name, email, password);
    setUsers([
      ...users,
      {
        id: v4(),
        name,
        email,
        password,
      },
    ]);
  };
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
    console.log(users);
  });

  return (
    <>
      <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
      <div className="container" id="container">
        <SignUp users={users} newUser={addUser} />

        <Sign_In users={users} />

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
