import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import logo from "../../assets/images/logo.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";

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

      <div className="links">
        <ul>
          <li>JEWELRY</li>
          <li>CAMPAIGNS</li>
          <li>PRESS</li>
          <li>SEARCH</li>
          <li>CART(2)</li>
        </ul>
      </div>

      <div className="earrings">
        <h2>EARRINGS</h2>
      </div>
      
      <div className="img-gallery">
        <div className="img-row">
          <div className="img-line">
            <div className="img-col">
              <img src={img1} alt="" />
              <div className="text">
                <h1>Kaila Dress Es</h1>
                <h2>$325.00 - $450.00</h2>
              </div>
            </div>
            <div className="img-col">
              <img src={img2} alt="" />
              <div className="text">
                <h1>Kaila Dress Es</h1>
                <h2>$325.00 - $450.00</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="img-row">
          <div className="img-line">
            <div className="img-col">
              <img src={img3} alt="" />
              <div className="text">
                <h1>Kaila Dress Es</h1>
                <h2>$325.00 - $450.00</h2>
              </div>
            </div>
            <div className="img-col">
              <img src={img4} alt="" />
              <div className="text">
                <h1>Kaila Dress Es</h1>
                <h2>$325.00 - $450.00</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="img-row">
          <div className="img-line">
            <div className="img-col">
              <img src={img5} alt="" />
              <div className="text">
                <h1>Kaila Dress Es</h1>
                <h2>$325.00 - $450.00</h2>
              </div>
            </div>
            <div className="img-col">
              <img src={img6} alt="" />
              <div className="text">
                <h1>Kaila Dress Es</h1>
                <h2>$325.00 - $450.00</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="img-row">
          <div className="img-line">
            <div className="img-col">
              <img src={img7} alt="" />
              <div className="text">
                <h1>Kaila Dress Es</h1>
                <h2>$325.00 - $450.00</h2>
              </div>
            </div>
            <div className="img-col">
              <img src={img8} alt="" />
              <div className="text">
                <h1>Kaila Dress Es</h1>
                <h2>$325.00 - $450.00</h2>
              </div>
            </div>
          </div>
        </div>
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
