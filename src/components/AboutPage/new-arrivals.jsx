import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import logo from "../../assets/images/logo.png";
import owner from "../../assets/images/owner.png";

const NewArrivals = () => {
  return (
    <>
      <div className="grey">
        <h1>
          Please note in stock pieces will ship within an estimated two weeks of
          order.
        </h1>
        <p>X</p>
      </div>
      <div className="white">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>{" "}
      </div>

      <div className="links3">
        <div className="express">
          <i class="fa-solid fa-cube"></i>
          <h1>FREE EXPRESS SHIPPING</h1>
          <h2>On all orders, no minimum</h2>
        </div>
        <div className="duties">
          <i class="fa-solid fa-check"></i>
          <h2>DUTIES AND TAXES GUARANTEED</h2>
          <h2>On all orders, no minimum</h2>
        </div>
        <div className="custome-love">
          <i class="fa-regular fa-envelope"></i>
          <h1>CUSTOMER LOVE</h1>
          <h2>We got you via phone, email or text</h2>
        </div>
      </div>

      <div className="links1">
        <ul>
          <li>ABOUT</li>
          <li>VALUES</li>
          <li>CONTACT</li>
          <li>POLICIES</li>
          <li>STOCKLIST</li>
          <li>INSTAGRAM</li>
        </ul>
      </div>

      <div className="copyright">
        <h1>&copy; 2020 All rights reserved</h1>
      </div>
    </>
  );
};

export default NewArrivals;
