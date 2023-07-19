import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import logo from "../../assets/images/logo.png"
import owner from "../../assets/images/owner.png"

const NavAbout = () => {
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

      <div className="about-section">
        <img src={owner} alt="" />

        <div className="aparel">
          <h1>APAREL'S WEARABLE HISTORY</h1>
          <h2>
            APARELS was founded by our designer and creator Lily Chen in the
            fictional city of Riverside in 2018. The Obsidian in our product
            line inherits its deep black color from being woven from fine, dark
            threads. Our stunning fabric draws upon its rich history in a
            contemporary way. Our unique product line presents the dedicated
            individually handcrafted precision of artistry and design. While
            developing a new piece, Lily is not focused on the historical or
            aesthetic value - she is dedicatedly working on it, focusing on the
            end result and trying to technically realize the very vision of the
            piece in her mind. While we cater to various market needs, our goal
            is to design and create bespoke, authentically handcrafted pieces of
            clothing that will be cherished and worn with a personalized touch
            for many generations to come.
          </h2>
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

export default NavAbout;
