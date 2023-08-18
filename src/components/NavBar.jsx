import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/PageStyles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
  faLock,
  faX,
  // faX,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./login";
import SignUp from "./SignUp";

const NavBar = ({ setSearchValue, searchValue }) => {
  // UseState for opening the Drawer
  const [openSearch, setOpenSearch] = useState(false);
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

  // Onclick function handling SignUp
  const onClickOpenSignup = () => {
    setOpenLoginModal(false);
    setOpenSignUpModal(true);
  };

  return (
    <div className="nav-container">
      <div className="nav-menu">Free Shipping On All U.S Orders</div>

      <div className="nav-items">
        <div className="first">
          <Link to={"/catalog"}>
            <a>Shop</a>
          </Link>
          <Link to={"/about-us"}>
            <a>About Us</a>
          </Link>
          <Link to={"/contact-us"}>
            <a>Contact Us</a>
          </Link>
        </div>

        <div className="participle-nav">
          <Link to={"/"}>
            <h1>Participle+</h1>
          </Link>
        </div>

        <div className="second">
          {openSearch ? (
            <div>
              <input
                type="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <FontAwesomeIcon
                onClick={() => setOpenSearch((prev) => !prev)}
                icon={faX}
              />
            </div>
          ) : (
            <a
              onClick={() => setOpenSearch((prev) => !prev)}
              className="active"
            >
              Search <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
          )}
          <Link to={""}>
            <a onClick={onClickOpenLogIn}>Account</a>
          </Link>

          <Link to={"/items-bag"}>
            <a>
              Bag <FontAwesomeIcon icon={faLock} />
            </a>
          </Link>
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
              <a className="active">New Arrivals</a>
            </Link>

            <Link to={"/catalog"}>
              <a>Shop</a>
            </Link>
            <Link to={"/about-us"}>
              <a>About Us</a>
            </Link>
          </div>

          <div className="second">
            <a className="active" href="#">
              Search <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>

            <a onClick={onClickOpenLogIn}>Account</a>

            <Link to={"/items-bag"}>
              <a>
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
