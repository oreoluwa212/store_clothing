// import React from 'react';
import '../styles/PageStyles.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-menu">Free Shipping On All U.S Orders</div>

      <div className="nav-items">
        <div className="first">
          <Link to={'/new-arrivals'}>
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

        <div className="participle-nav">
          <Link to={'/'}>
            <h1>Participle+</h1>
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
    </div>
  );
};

export default NavBar;
