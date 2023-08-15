import googleImg from "../assets/images/google.png";

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useRef, useEffect } from "react";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Login = ({ setOpenLoginModal, onClickOpenSignup }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
       e.preventDefault();
       try {
        await signInWithEmailAndPassword(auth, email, pwd)
         .then((userCredential) => {
           // Signed in
           const user = userCredential.user;
           console.log(user);
           navigate("/catalog");
           toast.success("Login successful!");
         })
         
       } catch (error){
        console.log(error);
        toast.error("Something went wrong");
       }
       
  };
  return (
      <div className="login-wrapper">
      <div className="login-container">
        <div className="login-section">
          <div className="logo-text">
            <h1 onClick={() => setOpenLoginModal(false)}>X</h1>
          </div>

          <div className="login-style">
            <div className="log-in">
              <h1>Log In</h1>
              <p>Enter your credentials to access your account</p>
              <div className="button-div">
                <button>
                  <img src={googleImg} alt="" />
                  <h3> Log in with google</h3>
                </button>
              </div>

              <div className="or-">
                <hr />
                <p>or</p>
                <hr />
              </div>

              <form onSubmit={handleSubmit} className="form-place">
                <div className="email">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    value={email}
                    autoComplete="off"
                    onChange={(e)=> setEmail(e.target.value.toLocaleLowerCase())}
                    required
                    placeholder="input email here"
                  />
                </div>
                <div className="password">
                  <div className="forgot-password">
                    <label htmlFor="password">Password</label>
                    <h4>Forgot password?</h4>
                  </div>
                  <input
                    type="password"
                    value={pwd}
                    id="password"
                    onChange={(e)=> setPwd(e.target.value)}
                    required
                    placeholder="smaTiger21@"
                  />
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <h5>Keep me signed in</h5>
                </div>

                <div className="login-btn">
                  <button type="submit">Login</button>

                  <p>
                    Not a member?{" "}
                    <span
                      onClick={onClickOpenSignup}
                      style={{ cursor: "pointer" }}
                    >
                      Sign up
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;
