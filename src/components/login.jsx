import googleImg from "../assets/images/google.png";
import { dataBase } from "../firebase.config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

import { toast } from "react-toastify";

const Login = ({ setOpenLoginModal, onClickOpenSignup }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const existingUser = await getDoc(doc(dataBase, "users", email));

      if (!existingUser.exists()) {
        // Create a new account
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const formDataCopy = { ...formData };
        delete formDataCopy.password;
        formDataCopy.timestamp = serverTimestamp();

        await setDoc(
          doc(dataBase, "users", userCredential.user.uid),
          formDataCopy
        );
        navigate("/");
        toast.success("Account creation and login were successful!");
      } else {
        try {
          // Sign in the user
          await signInWithEmailAndPassword(auth, email, password);
          navigate("/");
          toast.success("Login was successful!");
        } catch (error) {
          // Handle the error when signing in with existing email
          toast.error("Account exists already.");
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for user
      const docRef = doc(dataBase, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(dataBase, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
      toast.success("Login was successful!");
    } catch (error) {
      toast.error("Could not authorize with Google.");
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
                  <h3 onClick={onGoogleClick}> Log in with google</h3>
                </button>
              </div>

              <div className="or-">
                <hr />
                <p>or</p>
                <hr />
              </div>

              <div className="form-place">
                <div className="email">
                  <label htmlFor="">Email address</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={onChange}
                    placeholder="yourname@gmail.com"
                  />
                </div>
                <div className="password">
                  <div className="forgot-password">
                    <label htmlFor="">Password</label>
                    <h4>Forgot password?</h4>
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={onChange}
                    id="password"
                    placeholder="smaTiger21@"
                  />
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <h5>Keep me signed in</h5>
                </div>

                <div className="login-btn">
                  <button onClick={onSubmit}>Login</button>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
