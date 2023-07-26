import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/PageStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
  faLock,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import Login from './login';

const NavBar = () => {
  // UseState for opening the Drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  // UseState for opening the Login Modal
  const [openLoginModal, setLoginModal] = useState(false);

  // UseState for opening the Signup Modal
  const [openSignUpModal, setSignUpModal] = useState(false);

  //Onclick funtion handling Open Drawer
  const onClickMenu = () => {
    setOpenDrawer(true);
  };

  //Onclick funtion handling Close Drawer
  const handleClose = () => {
    setOpenDrawer(false);
  };

  //Onclick funtion handling SignUp
  const onClickSignUp = () => {
    setSignUpModal(true);
  };

  //Onclick funtion handling LogIn
  const onClickLogIn = () => {
    setLoginModal(true);
  };
  return (
    <div className="nav-container">
      <div className="nav-menu">Free Shipping On All U.S Orders</div>

      <div className="nav-items">
        <div className="first">
         <Link to={"/catalog"}>
            <a href="#">Shop</a>
          </Link>
          <Link to={"/about-us"}>
            <a href="#">About Us</a>
          </Link>
            <Link to={"/contact-us"}>
            <a href="#">
              Contact Us
            </a>
          </Link>
        </div>

        <div className="participle-nav">
          <Link to={"/"}>
            <h1>Participle+</h1>
          </Link>
        </div>

        <div className="second">
          <a className="active" href="#">
            Search <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
          <Link to={""}>
            <a href="#" onClick={() => {
              setLoginModal(true);
            }}>Account</a>
          </Link>

          <a href="#">
            Bag <FontAwesomeIcon icon={faLock} />
          </a>
        </div>
      </div>

      <div className="mobile-nav-container">
        <div className="participle-nav">
          <Link to={"/"}>
            <h1>Participle+</h1>
          </Link>
        </div>

        <FontAwesomeIcon icon={faBars} onClick={onClickMenu} />
      </div>

      {openDrawer && (
        <div className="mobile-nav-items">
          <FontAwesomeIcon
            icon={faXmark}
            className="close-icon"
            onClick={handleClose}
          />

          <div className="participle-nav">
            <Link to={"/"}>
              <h1>Participle+</h1>
            </Link>
          </div>

          <div className="first">
            <Link to={"/product"}>
              <a className="active" href="#">
                New Arrivals
              </a>
            </Link>

            <Link to={"/catalog"}>
              <a href="#">Shop</a>
            </Link>
            <Link to={"/about-us"}>
              <a href="#">About Us</a>
            </Link>
          </div>

          <div className="second">
            <a className="active" href="#">
              Search <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>

            <a href="#">Account</a>

            <a href="#">
              Bag <FontAwesomeIcon icon={faLock} />
            </a>
          </div>
        </div>
      )}

      {openLoginModal && <Login closeLoginModal={setLoginModal}/>}
    </div>
  );
};

export default NavBar;
