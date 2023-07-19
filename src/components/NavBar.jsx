import React from 'react';
import '../App';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <div className="nav-menu">
        <h2>Free Shipping On All U.S Orders</h2>
      </div>

      <div className="nav-items">
        <div className="first">
          <Link to={"/new-arrivals"}>
            <h1>
              <a className="active" href="#">
                New Arrivals
              </a>
            </h1>
          </Link>

          <Link to={"/catalog"}>
            <h1>
              <a href="#">Shop</a>
            </h1>
          </Link>
          <Link to={"/about-us"}>
            <h1>
              <a href="#">About Us</a>
            </h1>
          </Link>
        </div>

        <div className="Participle-nav">
          <Link to={"/"}>
            <h1>Participle+</h1>
          </Link>
        </div>
        <div className="second">
          <h1>
            <a className="active" href="#">
              Search <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
          </h1>
          <h1>
            <a href="#">Account</a>
          </h1>
          <h1>
            <a href="#">
              Bag <FontAwesomeIcon icon={faLock} />
            </a>
          </h1>
        </div>
      </div>
      <hr />
    </>
  );
};

export default NavBar;
