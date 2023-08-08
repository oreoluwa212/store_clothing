import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/PageStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
  faLock,
  // faX,
} from '@fortawesome/free-solid-svg-icons';
import Login from './login';
import SignUp from './SignUp';

const NavBar = () => {
  // UseState for opening the Drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  // UseState for opening the Login  and signup Modal
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  //Onclick function handling Open Drawer
  const onClickMenu = () => {
    setOpenDrawer(true);
  };

  //Onclick function handling Close Drawer
  const handleClose = () => {
    setOpenDrawer(false);
  };

  // Onclick function handling LogIn
  const onClickOpenLogIn = () => {
    setOpenSignUpModal(false);
    setOpenLoginModal(true);
  };

  // Onclick function handling LogIn
  const onClickOpenSignup = () => {
    setOpenLoginModal(false);
    setOpenSignUpModal(true);
  };

  return (
    <div className="nav-container">
      <div className="nav-menu">Free Shipping On All U.S Orders</div>

      <div className="nav-items">
        <div className="first">
          <Link to={'/catalog'}>
            <a href="#">Shop</a>
          </Link>
          <Link to={'/about-us'}>
            <a href="#">About Us</a>
          </Link>
          <Link to={'/contact-us'}>
            <a href="#">Contact Us</a>
          </Link>
        </div>

        <div className="participle-nav">
          <Link to={'/'}>
            <h1>Participle+</h1>
          </Link>
        </div>

        <div className="second">
          <Link to={'/product'}>
            <a className="active" href="#">
              Search <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
          </Link>
          <Link to={''}>
            <a href="#" onClick={onClickOpenLogIn}>
              Account
            </a>
          </Link>

          <Link to={'/items-bag'}>
            <a href="#">
              Bag <FontAwesomeIcon icon={faLock} />
            </a>
          </Link>
        </div>
      </div>

      <div className="mobile-nav-container">
        <div className="participle-nav">
          <Link to={'/'}>
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
            <Link to={'/'}>
              <h1>Participle+</h1>
            </Link>
          </div>

          <div className="first">
            <Link to={'/product'}>
              <a className="active" href="#">
                New Arrivals
              </a>
            </Link>

            <Link to={'/catalog'}>
              <a href="#">Shop</a>
            </Link>
            <Link to={'/about-us'}>
              <a href="#">About Us</a>
            </Link>
          </div>

          <div className="second">
            <a className="active" href="#">
              Search <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>

            <a href="#">Account</a>

            <Link to={'/items-bag'}>
              <a href="#">
                Bag <FontAwesomeIcon icon={faLock} />
              </a>
            </Link>
          </div>
        </div>
      )}

      {openLoginModal && (
        <Login
          setOpenLoginModal={setOpenLoginModal}
          onClickOpenSignup={onClickOpenSignup}
        />
      )}
      {openSignUpModal && (
        <SignUp
          setOpenSignUpModal={setOpenSignUpModal}
          onClickOpenLogIn={onClickOpenLogIn}
        />
      )}
    </div>
  );
};

export default NavBar;
