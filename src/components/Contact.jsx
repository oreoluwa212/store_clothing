import "../styles/PageStyles.scss";
import Footer from "./Footer";
import NavBar from "./NavBar";
import contact from "../assets/images/contact.png"

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <NavBar />

      <div className="contact-section">
        <div className="contact-us">
          <img src={contact} alt="" />

          <div className="contact-txt">
            <h1>CONTACT US</h1>

            <div className="contact-form">
              <div className="name-email">
                <input type="text" placeholder="name" />
                <input type="text" placeholder="email" />
              </div>
              <input type="text" placeholder="phone" />

              <button>SEND</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
