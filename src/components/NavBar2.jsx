import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "../App";

const NavBar2 = () => {
  return (
    <>
      <div className="nav-menu">
        <h2>Free Shipping On All U.S Orders</h2>
      </div>

      <div class="nav-items">
        <div class="first">
          <Link to={"/new-arrivals"}>
            <h1>
              <a class="active" href="#">
                New Arrivals
              </a>
            </h1>
          </Link>

          <Link to={"/catalog"}>
            <h1>
              <a href="">Shop</a>
            </h1>
          </Link>
          <Link to={"/about-us"}>
            <h1>
              <a href="">About Us</a>
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
            <a class="active" href="#">
              Search <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
          </h1>
          <h1>
            <a href="#">Sign In</a>
          </h1>
          <button>
            14 items <FontAwesomeIcon icon={faLock} />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default NavBar2