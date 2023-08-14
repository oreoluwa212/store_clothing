import googleImg from "../assets/images/google.png";
import { dataBase } from "../../firebase.config";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Login = ({ setOpenLoginModal, onClickOpenSignup }) => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  }, [])

  useEffect(()=>{
    setErrMsg('');
  }, [user,pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
  }
  return (
    <>
    {success ? (
      <div>
        {/* <h1>You are logged in</h1>
        <br />
        <p>
          <a href="#">Go to Home</a>
        </p> */}
      </div>
    ): (
      <div className="login-wrapper">
      <p ref={errRef} className={errMsg ? "errMsg": "offscreen"} aria-live="assertive">{errMsg}</p>
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
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    ref={userRef}
                    value={user}
                    autoComplete="off"
                    onChange={(e)=> setUser(e.target.value)}
                    required
                    placeholder="yourname"
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
                  <button>Login</button>

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
    )}
    </>
  );
};

export default Login;
