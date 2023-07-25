import googleImg from "../assets/images/google.png"
import {
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Login = ({ closeLoginModal }) => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-section">
          <div className="logo-text">
            <h1 onClick={() => closeLoginModal(false)}>X</h1>
          </div>

          <div className="login-style">
            <div className="log-in">
              <h1>Log In</h1>
              <p>Enter your credentials to access your account</p>
              <div className="button-div">
                <button>
                  <img src={googleImg} alt="" />
                  <h3>Log in with google</h3>
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
                  <input type="text" placeholder="yourname@gmail.com" />
                </div>
                <div className="password">
                  <div className="forgot-password">
                    <label htmlFor="">Password</label>
                    <h4>Forgot password?</h4>
                  </div>
                  <input type="text" placeholder="smaTiger21@" />
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <h5>Keep me signed in</h5>
                </div>

                <div className="login-btn">
                  <button>Login</button>

                  <p>
                    Not a member? <span>Sign up</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="login-container">
        <div className="login-section">
          <div className="logo-text">
            <h1 onClick={() => closeSignInModal(false)}>Participle+</h1>
          </div>

          <div className="login-style">
            <div className="log-in">
              <h1>Log In</h1>
              <p>Enter your credentials to access your account</p>
              <div className="button-div">
                <button>
                  <img src={googleImg} alt="" />
                  <h3>Sign in with google</h3>
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
                  <input type="text" placeholder="yourname@gmail.com" />
                </div>
                <div className="password">
                  <div className="forgot-password">
                    <label htmlFor="">Password</label>
                    <h4>Forgot password?</h4>
                  </div>
                  <input type="text" placeholder="smaTiger21@" />
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <h5>Keep me signed in</h5>
                </div>

                <div className="login-btn">
                  <button>Login</button>

                  <p>
                    Already have an account? <span>Log In</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};


export default Login;
