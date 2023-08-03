import '../styles/PageStyles.scss';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-text">
        <div className="participle">
          <h1> Participle+</h1>
          <div className="oar">
            <h3> 132 Smith Street </h3>
            <h3> Brooklyn, NY 14231</h3>
            <div className="contact-us">
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="customer">
          <h1> CUSTOMER CARE</h1>
          <div className="care">
            <a href="#"> FAQ</a>
            <a href="#"> Orders & Returns</a>
            <a href="#"> Account</a>
            <a href="#"> About Us</a>
          </div>
        </div>
        <div className="connect">
          <h1> CONNECT</h1>
          <div className="links">
            <a href="#"> Instagram</a>
            <a href="#"> Facebook</a>
            <a href="#"> Twitter</a>
            <a href="#"> Pinterest</a>
          </div>
        </div>
      </div>
      <div className="footer-container-signup">
        <div className="email-us">
          <input type="email" placeholder="Email" />
        </div>
        <div className='sign-up'>
          <button>Sign Up!</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
