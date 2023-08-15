import googleImg from '../assets/images/google.png';

const SignUp = ({ setOpenSignUpModal, onClickOpenLogIn }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, pwd);
      // Handle successful signup, e.g., redirect or update state
    } catch (error) {
      setErrMsg("Sign up failed. Please try again.");
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-section">
          <div className="logo-text">
            <h1 onClick={() => setOpenSignUpModal(false)}>X</h1>
          </div>

          <div className="login-style">
            <div className="log-in">
              <h1>Sign Up</h1>
              <p>Enter your credentials to access your account</p>
              <div className="button-div">
                <button>
                  <img src={googleImg} alt="" />
                  <h3>Sign Up with google</h3>
                </button>
              </div>

              <div className="or-">
                <hr />
                <p>or</p>
                <hr />
              </div>

              <form className="form-place" onSubmit={handleSubmit}>
                <div className="email">
                  <label htmlFor="">Email address</label>
                  <input type="text" placeholder="yourname@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="password">
                  <div className="forgot-password">
                    <label htmlFor="">Password</label>
                    <h4>Forgot password?</h4>
                  </div>
                  <input type="text" placeholder="smaTiger21@" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <h5>Keep me signed in</h5>
                </div>

                <div className="login-btn">
                  <button>Login</button>

                  <p>
                    Already have an account?{' '}
                    <span
                      onClick={onClickOpenLogIn}
                      style={{ cursor: 'pointer' }}
                    >
                      Log In
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

export default SignUp;
