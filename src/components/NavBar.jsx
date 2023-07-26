import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/PageStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const onClickMenu = () => {
    setOpenDrawer(true);
  };

  const handleClose = () => {
    setOpenDrawer(false);
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
          <Link to={"/login"}>
            <a href="#">Account</a>
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
    </div>
  );
};

export default NavBar;
